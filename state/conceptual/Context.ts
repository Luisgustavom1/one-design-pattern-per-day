import { State } from "./State";

export class Context {
  private state?: State = undefined;

  constructor(state: State) {
    this.transitionTo(state);
  }

  public transitionTo(state: State): void {
    console.log(`Context: Transition to ${state.constructor.name}`);
    this.state = state;
    this.state.setContext(this);
  }

  public request1(): void {
    this.state?.handle1();
  }

  public request2(): void {
    this.state?.handle2();
  }
}