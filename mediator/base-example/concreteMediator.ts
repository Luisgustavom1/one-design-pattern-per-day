import { Component1 } from "./component1";
import { Component2 } from "./component2";
import { Mediator, MediatorEvents } from "./mediator";

export class ConcreteMediator implements Mediator {
  private component1: Component1;
  private component2: Component2;

  constructor (c1: Component1, c2: Component2) {
    this.component1 = c1;
    this.component1.setMediator(this)
    this.component2 = c2;
    this.component2.setMediator(this)
  }

  public notify(sender: object, event: MediatorEvents) {
    switch (event) {
      case MediatorEvents.A:
        console.log("Mediator reacts on A and trigger following operations: ");
        this.component2.doC();
      case MediatorEvents.D:
        console.log("Mediator reacts on D and trigger following operations: ");
        this.component1.doB()
        this.component2.doC()
    }
  }
}