import { FileDataSource } from "./FileDataSource";
import { SalaryManager } from "./SalaryManager";
import { CompressionDecorator } from "./decorators/CompressionDecorator";
import { EncryptionDecorator } from "./decorators/EncryptionDecorator";

function BasicApp() {
  const source = new FileDataSource("file.txt");

  let decorator = new CompressionDecorator(source);
  decorator = new EncryptionDecorator(decorator);
  // Encrypt >> Compress >> Write data
  decorator.writeData("some data");
  console.log("\n\n");

  console.log("Data:", decorator.readData(), '\n');
}

function ExternalDataSource() {
  const source = new FileDataSource("file.txt");
  
  const logger = new SalaryManager(source);
  // Decorate data source
  console.log(logger.load());
}

BasicApp();
console.log("\n");
ExternalDataSource();