import { DataSource } from "../DataSource";

// The Base Decorator define the wrapping interface for all concrete decorators
export class DataSourceDecorator implements DataSource {
  constructor(private wrappee: DataSource) { }

  // The base decorator just delegate work to wrapped component
  writeData(data: string): void {
    this.wrappee.writeData(data);
  }

  // Thee base decorator just delegate work to wrapped component
  readData(): string {
    return this.wrappee.readData();
  }
}