import { FileDataSource } from "./FileDataSource";
import { CompressionDecorator } from "./decorators/CompressionDecorator";
import { EncryptionDecorator } from "./decorators/EncryptionDecorator";

function BasicApp() {
  const source = new FileDataSource("file.txt");
  source.writeData("some data");

  console.log("\nWith decorator\n\n");

  let decorator = new CompressionDecorator(source);
  source.writeData("some data");

  decorator = new EncryptionDecorator(decorator);
  // Encrypt >> Compress >> Write data
  decorator.writeData("some data");
}

BasicApp();