import { Strategy } from "./Strategy";

export class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public do() {
    console.log("Context: Sorting Data using the strategy");
    const result = this.strategy.do(['a', 'b', 'c', 'd', 'e'])
    console.log(result.join(','));
  }
}