import { Adaptee } from "./Adaptee";
import { Target } from "./Target";

export class Adapter extends Target {
  constructor(
    private readonly adaptee: Adaptee
  ) {
    super();
  }

  request() {
    const result = this.adaptee.specificRequest().split('').reverse().join('');
    return `Adapter: (TRANSLATED) ${result}`;
  }
}
