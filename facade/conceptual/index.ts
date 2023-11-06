import { Facade } from "./Facade";
import { Subsystem1 } from "./Subsystem1";
import { Subsystem2 } from "./Subsystem2";

const subs1 = new Subsystem1();
const subs2 = new Subsystem2();
const facade = new Facade(subs1, subs2);

clientCode(facade)

function clientCode(facade: Facade) {
  console.log(facade.operation())
}