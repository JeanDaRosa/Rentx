import { Repository, getRepository } from "typeorm";

import {
    ISpecificantionsRepository,
    ICreateSpecificationDTO,
} from "@modules/cars/repositories/ISpecificationReposository";

import { Specification } from "../entities/Specification";

class SpecificationsRepository implements ISpecificantionsRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({
        description,
        name,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            description,
            name,
        });

        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({
            name,
        });
        return specification;
    }
}

export { SpecificationsRepository };
