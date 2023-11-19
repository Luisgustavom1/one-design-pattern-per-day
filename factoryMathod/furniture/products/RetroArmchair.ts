import { Armchair } from "./contracts/ArmChair";

export class RetroArmchair extends Armchair {
  constructor() {
    super();
    this.height = 120;
    this.width = 140;
    this.depth = 60;
  }
}
