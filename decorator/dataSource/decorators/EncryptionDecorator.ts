import { DataSource } from "../DataSource";
import { DataSourceDecorator } from "./DataSourceDecorator";

// Concrete decorators call methods on the wrapped classes and can do something before or after the call of wrapped object
export class EncryptionDecorator extends DataSourceDecorator {
  constructor(wrappee: DataSource) {
    super(wrappee)
  }

  writeData(data: string): void {
    console.log(`Encrypting data: ${data}`); // extra behavior
    super.writeData(`Encrypted data: ${data}`);
  }

  readData(): string {
    const data = super.readData();
    console.log(`Decrypting data: ${data}`); // extra behavior
    return data;
  }
}