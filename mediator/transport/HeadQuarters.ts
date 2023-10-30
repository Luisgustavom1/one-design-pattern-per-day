import { TransportUnit } from "./TransportUnit";
import { Transportable } from "./Transportable";

export class HeadQuarters {
  private units: Array<Transportable> = [];
  private transporters: Array<TransportUnit> = [];

  public registerTransportable(unit: Transportable) {
    this.units.push(unit);
  }

  public registerTransportUnit(unit: TransportUnit) {
    this.transporters.push(unit);
  }

  public startEmbarkationProcess(transporter: TransportUnit) {
    console.log("HeadQuarters starting embarkation process on " + transporter + "\n");
    for (const unit of this.units) {
      unit.embark();
      unit.idle();
    }
    console.log("Embarkation process finished");
  }

  public startDisembarkationProcess(transporter: TransportUnit) {
    console.log("HeadQuarters starting disembarkation process on " + transporter + "\n");
    for (const unit of this.units) {
      unit.activate();
      unit.disembark();
    }
    console.log("disembarkation process finished\n");
  }


  public unitActivated(unit: Transportable) {
    console.log("Unit activated...\n");
  }
  public unitIdled(unit: Transportable) {
    console.log("Unit idled...\n");
  }
  public unitEmbarked(unit: Transportable) {
    console.log("Unit embarked...\n");
  }
  public unitDisembarked(unit: Transportable) {
    console.log("Unit disembarked...\n");
  }
}