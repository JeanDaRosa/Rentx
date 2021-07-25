import { IRentalsRepository } from "@modules/rental/repositories/IRentalsRepository";

import { Rental } from "../entiries/Rental";

class RentalRepository implements IRentalsRepository {
    findOpenRentalByCar(car_id: string): Promise<Rental> {
        throw new Error("Method not implemented.");
    }
    findOpenRentalByUser(user_id: string): Promise<Rental> {
        throw new Error("Method not implemented.");
    }
}
