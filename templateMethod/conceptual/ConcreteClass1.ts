import { AbstractClass } from "./AbstractClass";

export class concreteClass1 extends AbstractClass {
  protected requiredOperations1(): void {
    console.log("ConcreteClass1 says: Implemented Operation1")
  }

  protected requiredOperations2(): void {
    console.log("ConcreteClass1 says: Implemented Operation2")
  }
}