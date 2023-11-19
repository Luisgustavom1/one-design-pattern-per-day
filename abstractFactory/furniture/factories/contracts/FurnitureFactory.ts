import { Armchair } from "../../products/contracts/ArmChair";
import { CoffeeTable } from "../../products/contracts/CoffeeTable";
import { Sofa } from "../../products/contracts/Sofa";

export interface FurnitureFactory {
  MakeArmchair(height: number, width: number, length: number): Armchair;
  MakeCoffeeTable(height: number, width: number, depth: number): CoffeeTable;
  MakeSofa(height: number, width: number, depth: number): Sofa;
}

