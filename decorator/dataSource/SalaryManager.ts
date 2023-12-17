import { DataSource } from "./DataSource";

export class SalaryManager {
  constructor(
    private source: DataSource,
  ) {}

  load() {
    return this.source.readData();
  }

  save() {
    this.source.writeData('Salary data');
  }
}