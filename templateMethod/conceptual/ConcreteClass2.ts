import { AbstractClass } from "./AbstractClass";

export class concreteClass2 extends AbstractClass {
  protected requiredOperations1(): void {
    console.log("ConcreteClass2 says: Implemented Operation1");
  }

  protected requiredOperations2(): void {
    console.log("ConcreteClass2 says: Implemented Operation2");
  }

  protected hook1(): void {
    console.log("ConcreteClass2 says: Override hook1");
  }
}