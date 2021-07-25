import { Rental } from "../infra/typeOrm/entiries/Rental";

class IRentalsRepository {
    findOpenRentalByCar(car_id: string): Promise<Rental>;
    findOpenRentalByUser(user_id: string): Promise<Rental>;
}

export { IRentalsRepository };
