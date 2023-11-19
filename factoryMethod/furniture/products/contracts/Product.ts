export abstract class Product {
  public toString() {
    return this.constructor.name;
  }
}