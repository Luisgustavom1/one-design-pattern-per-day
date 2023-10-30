import { HeadQuarters } from "./HeadQuarters";
import { Transportable } from "./Transportable";

export class TransportableFightingUnit implements Transportable {
  private headQuarters: HeadQuarters;

  constructor(hq: HeadQuarters) {
    this.headQuarters = hq;
    this.headQuarters.registerTransportable(this);
  }

  embark(): void {
    console.log("TransportableFightingUnit Embarking...\n");
    this.headQuarters.unitEmbarked(this);
  }
  disembark(): void {
    console.log("TransportableFightingUnit Disembarking...\n");
    this.headQuarters.unitDisembarked(this);
  }
  idle(): void {
    console.log("TransportableFightingUnit Idling...\n");
    this.headQuarters.unitIdled(this);
  }
  activate(): void {
    console.log("TransportableFightingUnit Activating...\n");
    this.headQuarters.unitActivated(this);
  }
}