import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "@modules/cars/repositories/ICategoryRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoryRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAllreadyExist =
            await this.categoriesRepository.findByName(name);

        if (categoryAllreadyExist) {
            throw new AppError("Category already exists!", 401);
        }

        this.categoriesRepository.create({
            name,
            description,
        });
    }
}

export { CreateCategoryUseCase };
