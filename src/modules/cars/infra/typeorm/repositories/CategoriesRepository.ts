import { getRepository, Repository } from "typeorm";

import {
    ICategoryRepository,
    ICreateCategoryDTO,
} from "@modules/cars/repositories/ICategoryRepository";

import { Category } from "../entities/Category";

class CategoriesRepository implements ICategoryRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ description, name }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name,
        });

        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({ name });
        return category;
    }
}

export { CategoriesRepository };

// private static INSTANCE: CategoriesRepository;

// public static getInstance(): CategoriesRepository {
//     if (!CategoriesRepository.INSTANCE) {
//         CategoriesRepository.INSTANCE = new CategoriesRepository();
//     }

//     return CategoriesRepository.INSTANCE;
// }

// async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
//     const specification = new Specification();

//     Object.assign(specification, {
//         name,
//         description,
//         created_at: new Date(),
//     });

//     this.specifications.push(specification);
// }
