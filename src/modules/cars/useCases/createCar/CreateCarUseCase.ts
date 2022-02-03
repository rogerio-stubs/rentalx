import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICarRepository } from "../../repositories/ICarsRepository";
import { Car } from "../../infra/typeorm/entities/Car";

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  file_amount: number;
  brand: string;
  category_id: string;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarRepository
  ) { }

  async execute({
    name,
    description,
    daily_rate,
    license_plate,
    file_amount,
    brand,
    category_id
  }): Promise<Car> {
    const carAlreadyExists = await this.carsRepository.findByLicensePlate(license_plate);

    if (carAlreadyExists) {
      throw new AppError("Car already exists!");
    }

    const car = await this.carsRepository.create({
      name,
      description,
      daily_rate,
      license_plate,
      file_amount,
      brand,
      category_id
    })
    return car;
  }
}


export { CreateCarUseCase };