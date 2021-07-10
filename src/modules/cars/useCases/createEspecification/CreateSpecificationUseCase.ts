import { inject, injectable } from "tsyringe";

import { ISpecificantionsRepository } from "@modules/cars/repositories/ISpecificationReposository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationsUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificantionsRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAllreadyExist =
            await this.specificationsRepository.findByName(name);

        if (specificationAllreadyExist) {
            throw new AppError("Specification already exists!", 401);
        }

        this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationsUseCase };
