import csvParse from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "@modules/cars/repositories/ICategoryRepository";

interface IImportCategory {
    name: string;
    description: string;
}

injectable();
class ImportCategoryUseCase {
    constructor(
        @inject("categoriesRepository")
        private categoriesRepository: ICategoryRepository
    ) {}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            // createReadStream: Permite que faça leitura dos arquivos
            // em partes(como o caregamento de video no youTube)
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];
            const parseFile = csvParse();

            // .pipe transforma um aquivo "readable" em "writeable"
            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                    categories.push({
                        name,
                        description,
                    });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })

                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);

        categories.map(async (category) => {
            const { name, description } = category;

            const existsCategory = await this.categoriesRepository.findByName(
                name
            );

            if (!existsCategory) {
                await this.categoriesRepository.create({
                    name,
                    description,
                });
            }
        });
    }
}

export { ImportCategoryUseCase };
