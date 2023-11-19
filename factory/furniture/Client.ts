import { FurnitureFactory } from "./factories/contracts/FurnitureFactory";

export class Client {
  produceFurniture(furnitureFactory: FurnitureFactory) {
    console.log("Producing furniture...\n");

    const armChair = furnitureFactory.MakeArmchair();
    console.log("Armchair was produced", armChair.toString(), "\n");

    const coffeeTable = furnitureFactory.MakeCoffeeTable();
    console.log("CoffeeTable was produced", coffeeTable.toString(), "\n");

    const sofa = furnitureFactory.MakeSofa();
    console.log("Sofa was produced", sofa.toString(), "\n");

    console.log("Finish...");
  }
}
