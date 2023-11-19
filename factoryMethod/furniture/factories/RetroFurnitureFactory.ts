import { RetroArmchair } from "../products/RetroArmchair";
import { RetroCoffeeTable } from "../products/RetroCoffeeTable";
import { RetroSofa } from "../products/RetroSofa";
import { Armchair } from "../products/contracts/ArmChair";
import { CoffeeTable } from "../products/contracts/CoffeeTable";
import { Sofa } from "../products/contracts/Sofa";
import { FurnitureFactory } from "./contracts/FurnitureFactory";

export class RetroFurnitureFactory extends FurnitureFactory {
  MakeArmchair(): Armchair {
    return new RetroArmchair();
  }
  MakeCoffeeTable(): CoffeeTable {
    return new RetroCoffeeTable();
  }
  MakeSofa(): Sofa {
    return new RetroSofa();
  }
}

