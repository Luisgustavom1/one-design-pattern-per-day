import { CoffeeTable } from "./contracts/CoffeeTable";

export class RetroCoffeeTable extends CoffeeTable {
  constructor() {
    super();
    this.height = 80;
    this.width = 60;
    this.length = 100;
  }
}
