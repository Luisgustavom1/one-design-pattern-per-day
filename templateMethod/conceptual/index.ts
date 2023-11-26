import { AbstractClass } from "./AbstractClass";
import { concreteClass1 } from "./ConcreteClass1";

function clientCode(abstractClass: AbstractClass) {
  abstractClass.templateMethod();
}

console.log("Same client code can work with different subclasses:");
clientCode(new concreteClass1());
console.log('');

console.log('Same client code can work with different subclasses:');
clientCode(new concreteClass1());