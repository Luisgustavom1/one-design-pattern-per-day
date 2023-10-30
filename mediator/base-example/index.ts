import { Component1 } from "./component1";
import { Component2 } from "./component2";
import { ConcreteMediator } from "./concreteMediator";

const c1 = new Component1();
const c2 = new Component2();
const mediator = new ConcreteMediator(c1, c2)

console.log("Client triggers operation A\n\n");
c1.doA()

console.log("Client triggers operation B");
c2.doD()
