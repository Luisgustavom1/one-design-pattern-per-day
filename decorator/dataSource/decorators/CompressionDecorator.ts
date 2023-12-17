import { DataSource } from "../DataSource";
import { DataSourceDecorator } from "./DataSourceDecorator";

export class CompressionDecorator extends DataSourceDecorator {
  constructor(wrappee: DataSource) {
    super(wrappee)
  }

  writeData(data: string): void {
    console.log(`Compressing data: ${data}`); // extra behavior
    super.writeData(data);
  }

  readData(): string {
    const data = super.readData();
    console.log(`Decompressing data: ${data}`); // extra behavior
    return data;
  }
}