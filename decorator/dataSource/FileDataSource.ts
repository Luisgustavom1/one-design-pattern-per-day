import { DataSource } from "./DataSource";

// this concrete class provide default implementation
export class FileDataSource implements DataSource {
  constructor(private filename: string) { }

  writeData(data: string): void {
    console.log(`Write data to file: ${this.filename}`);
  }

  readData(): string {
    console.log(`Read data from file: ${this.filename}`);
    return '';
  }
}