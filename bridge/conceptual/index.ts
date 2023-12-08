import { Abstraction } from "./Abstraction";
import { ExtendAbstraction } from "./Abstraction/ExtendAbstraction";
import { ConcreteImplementationA } from "./Implementations/ConcreteImplementationA";
import { ConcreteImplementationB } from "./Implementations/ConcreteImplementationB";

function clientCode(abstraction: Abstraction) {
  console.log(abstraction.operation());
}

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log("");

implementation = new ConcreteImplementationB();
abstraction = new ExtendAbstraction(implementation);

clientCode(abstraction);