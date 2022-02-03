import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarRepository } from "../ICarsRepository";

class CarsRepositoryinMemory implements ICarRepository {
  cars: Car[] = [];
  
  async create({
    brand,
    category_id,
    daily_rate,
    description,
    file_amount,
    name,
    license_plate,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();
    
    Object.assign(car, {
      brand,
      category_id,
      daily_rate,
      description,
      file_amount,
      name,
      license_plate,
    });
    
    this.cars.push(car);

    return car;
  }


  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find(car => car.license_plate === license_plate);
  }
}

export { CarsRepositoryinMemory };