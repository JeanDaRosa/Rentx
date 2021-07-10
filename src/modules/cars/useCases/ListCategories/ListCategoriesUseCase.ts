import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { ICategoryRepository } from "@modules/cars/repositories/ICategoryRepository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoryRepository) {}

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };