import { ConcreteStateA } from "./ConcreteStateA";
import { Context } from "./Context";

const context = new Context(new ConcreteStateA());
context.request1();
context.request2();