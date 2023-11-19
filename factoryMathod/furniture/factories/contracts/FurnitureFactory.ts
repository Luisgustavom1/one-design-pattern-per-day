import { Armchair } from "../../products/contracts/ArmChair";
import { CoffeeTable } from "../../products/contracts/CoffeeTable";
import { Sofa } from "../../products/contracts/Sofa";

export abstract class FurnitureFactory {
  // This class can have business logic
  public abstract MakeArmchair(): Armchair;
  public abstract MakeCoffeeTable(): CoffeeTable;
  public abstract MakeSofa(): Sofa;
}

