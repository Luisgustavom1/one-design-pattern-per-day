import { RetroArmchair } from "../products/retro/RetroArmchair";
import { RetroCoffeeTable } from "../products/retro/RetroCoffeeTable";
import { RetroSofa } from "../products/retro/RetroSofa";
import { FurnitureFactory } from "./contracts/FurnitureFactory";

export class RetroFurnitureFactory implements FurnitureFactory {
  MakeArmchair(height: number, width: number, length: number) {
    return new RetroArmchair(height, width, length)
  };
  MakeCoffeeTable(height: number, width: number, depth: number) {
    return new RetroCoffeeTable(height, width, depth)
  };
  MakeSofa(height: number, width: number, depth: number) {
    return new RetroSofa(height, width, depth)
  };
}

