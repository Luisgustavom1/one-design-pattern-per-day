import { Implementation } from ".";

export class ConcreteImplementationB implements Implementation {
  public operationImpl(): string {
      return 'ConcreteImplementationB: Here\'s the result on the platform B.';
  }
}