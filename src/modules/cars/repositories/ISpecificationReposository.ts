import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificantionsRepository {
    findByName(name: string): Promise<Specification>;
    create({ description, name }: ICreateSpecificationDTO): Promise<void>;
}

export { ISpecificantionsRepository, ICreateSpecificationDTO };
