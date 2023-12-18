import { DataSource } from "./DataSource";

// this concrete class provide default implementation
export class FileDataSource implements DataSource {
  private data: string[] = [];
  constructor(private filename: string) { }

  writeData(data: string): void {
    this.data.push(data);
    console.log(`Write data to file: ${this.filename}`);
    console.log(`Data saved: ${data}`);
  }

  readData(): string {
    console.log(`Read data from file: ${this.filename}`);
    return this.data.join(' - ');
  }
}