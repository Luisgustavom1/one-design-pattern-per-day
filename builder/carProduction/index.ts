import { CarBuilder } from "./builders/CarBuilder";
import { CarManualBuilder } from "./builders/CarManualBuilder";
import { Director } from "./director/Director";

const director = new Director();

const builder = new CarBuilder();
director.constructSportsCar(builder);

const car = builder.getResult();
console.log("Car built:\n", car.getCarType());

const manualBuilder = new CarManualBuilder();
director.constructSportsCar(manualBuilder);

const carManual = manualBuilder.getResult();
console.log("\n\nCar manual built:\n", carManual.print());

