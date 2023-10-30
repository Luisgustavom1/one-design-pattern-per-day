import { BaseComponent } from "./BaseComponent";
import { MediatorEvents } from "./mediator";

export class Component2 extends BaseComponent {
  public doC() {
    console.log("Component 2 does C");
    this.mediator?.notify(this, MediatorEvents.C)
  }
  
  public doD() {
    console.log("Component 2 does D");
    this.mediator?.notify(this, MediatorEvents.D)
  }
}