import { FurnitureFactory } from "./factories/contracts/FurnitureFactory";

export class Client {
  produceFurniture(furnitureFactory: FurnitureFactory) {
    console.log("Producing furniture...", furnitureFactory.constructor.name, "\n");

    const armChair = furnitureFactory.MakeArmchair(60, 120, 100);
    console.log("Armchair was produced", armChair.toString(), "\n");

    const coffeeTable = furnitureFactory.MakeCoffeeTable(120, 60, 80);
    console.log("CoffeeTable was produced", coffeeTable.toString(), "\n");

    const sofa = furnitureFactory.MakeSofa(140, 40, 90);
    console.log("Sofa was produced", sofa.toString(), "\n");

    console.log("Finish...");
  }
}
