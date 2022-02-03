import { AppError } from "../../../../shared/errors/AppError";
import { CarsRepositoryinMemory } from "../../repositories/in-memory/CarsRepositoryinMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";


let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryinMemory;

describe("Create Car", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryinMemory()
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("Should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Name car",
      description: "Description car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      file_amount: 60,
      brand: "Brand",
      category_id: "category"
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car1",
        description: "Description car",
        daily_rate: 100,
        license_plate: "ABC-1234",
        file_amount: 60,
        brand: "Brand",
        category_id: "category"
      });

      await createCarUseCase.execute({
        name: "Car2",
        description: "Description car",
        daily_rate: 100,
        license_plate: "ABC-1234",
        file_amount: 60,
        brand: "Brand",
        category_id: "category"
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Car available",
      description: "Description car",
      daily_rate: 100,
      license_plate: "ABCD-1234",
      file_amount: 60,
      brand: "Brand",
      category_id: "category"
    });

    expect(car.available).toBe(true);
  });
})