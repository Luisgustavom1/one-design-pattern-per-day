import { Subsystem1 } from "./Subsystem1";
import { Subsystem2 } from "./Subsystem2";

export class Facade {
  protected subs1: Subsystem1;
  protected subs2: Subsystem2;

  constructor(subsystem1: Subsystem1, subsystem2: Subsystem2) {
    this.subs1 = subsystem1;
    this.subs2 = subsystem2;
  }

  public operation(): string {
    let result = 'Facade initializes subsystems:\n';
    result += this.subs1.operation1();
    result += this.subs2.operation2();
    result += "Facade orders subsystems to perform the action: \n";
    result += this.subs1.operationN();
    result += this.subs2.operation2();
    return result;
  }
}