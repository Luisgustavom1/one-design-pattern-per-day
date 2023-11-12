import { Context } from "./Context";

export abstract class State {
  protected context?: Context;

  public setContext(ctx: Context) {
    this.context = ctx;
  }

  public abstract handle1(): void;
  public abstract handle2(): void;
}