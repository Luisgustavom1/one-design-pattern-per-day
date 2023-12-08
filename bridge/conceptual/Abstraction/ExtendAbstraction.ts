import { Abstraction } from ".";

export class ExtendAbstraction extends Abstraction {
  public operation(): string {
    const result = this.implementation.operationImpl();
    return `ExtendedAbstraction: Extended operation with:\n${result}`;
  }
}