import { HeadQuarters } from "./HeadQuarters";
import { TransportUnit } from "./TransportUnit";

export class TransportShip implements TransportUnit {
  private headQuarters: HeadQuarters;
  
  constructor(hq: HeadQuarters) {
    this.headQuarters = hq;
    this.headQuarters.registerTransportUnit(this);
  }

  startEmbarkation(): void {
    console.log("Starting embarkation...\n")
    this.headQuarters.startEmbarkationProcess(this);
  }
  startDisembarkation(): void {
    console.log("Starting disembarkation...\n")
    this.headQuarters.startDisembarkationProcess(this);
  }  
  arrive(): void {
    console.log("arriving...\n")
  }
  depart(): void {
    console.log("departing...\n")
  }
  travel(): void {
    console.log("traveling...\n")
  }
}