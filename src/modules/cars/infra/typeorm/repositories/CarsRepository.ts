
import { getRepository, Repository } from "typeorm";
import { ICreateCarDTO } from "../../../dtos/ICreateCarDTO";
import { ICarRepository } from "../../../repositories/ICarsRepository";
import { Car } from "../entities/Car";

class CarsRepository implements ICarRepository {

  private respository: Repository<Car>;

  constructor() {
    this.respository = getRepository(Car);
  }

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    file_amount,
    license_plate,
    name,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.respository.create({
      brand, 
      category_id,
      daily_rate,
      description,
      license_plate,
      name,
      file_amount,
    });

    await this.respository.save(car);

    return car;
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.respository.findOne({license_plate});
    return car;
  }

}

export { CarsRepository };