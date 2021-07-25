import { RentalsRepositoryInMemory } from "../repositories/in-memory/RentalsRepositoryInMemory";
import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInmemory: RentalsRepositoryInMemory;

describe("Create rental", () => {
    beforeEach(() => {
        rentalsRepositoryInmemory = new RentalsRepositoryInMemory();
        createRentalUseCase = new CreateRentalUseCase(
            rentalsRepositoryInmemory
        );
    });

    it("Should be able to create a new Rental", async () => {
        await createRentalUseCase.execute({
            user_id: "12345",
            car_id: "123123",
            expected_return_date: new Date(),
        });
    });
});
