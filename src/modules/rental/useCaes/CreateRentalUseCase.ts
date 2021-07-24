
interface IResquest {
    user_id: string;
    car_id: string;
    expected_return_date: Date;
}

class CreateRentalUseCase {
    execute({user_id, car_id, expected_return_date}: IResquest): Promise<void> {
        
    }
}

export { CreateRentalUseCase };
