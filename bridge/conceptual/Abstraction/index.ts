import { Implementation } from "../Implementations";

export class Abstraction {
  constructor(
    protected readonly implementation: Implementation
  ) {}

  public operation() {
    const result = this.implementation.operationImpl();
    return `Abstraction: Base operation with:\n${result}`;
  }
}