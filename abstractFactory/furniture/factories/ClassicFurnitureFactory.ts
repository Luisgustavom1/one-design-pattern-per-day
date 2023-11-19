import { ClassicArmchair } from "../products/classic/ClassicArmchair";
import { ClassicCoffeeTable } from "../products/classic/ClassicCoffeeTable";
import { ClassicSofa } from "../products/classic/ClassicSofa";
import { FurnitureFactory } from "./contracts/FurnitureFactory";

export class ClassicFurnitureFactory implements FurnitureFactory {
  MakeArmchair(height: number, width: number, length: number) {
    return new ClassicArmchair(height, width, length)
  };
  MakeCoffeeTable(height: number, width: number, depth: number) {
    return new ClassicCoffeeTable(height, width, depth)
  };
  MakeSofa(height: number, width: number, depth: number) {
    return new ClassicSofa(height, width, depth)
  };
}

