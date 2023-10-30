import { BaseComponent } from "./BaseComponent";
import { MediatorEvents } from "./mediator";

export class Component1 extends BaseComponent {
  public doA() {
    console.log("Component 1 does A");
    this.mediator?.notify(this, MediatorEvents.A)
  }

  public doB() {
    console.log("Component 1 does B");
    this.mediator?.notify(this, MediatorEvents.B)
  }
}