import { CoffeeTable } from "../contracts/CoffeeTable";

export class ClassicCoffeeTable extends CoffeeTable {
  constructor(
    height: number,
    width: number,
    length: number, 
  ) {
    super();
    this.height = height;
    this.width = width;
    this.length = length;
  }
}
