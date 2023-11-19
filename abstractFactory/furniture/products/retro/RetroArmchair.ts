import { Armchair } from "../contracts/ArmChair";

export class RetroArmchair extends Armchair {
  constructor(
    height: number,
    width: number,
    depth: number, 
  ) {
    super();
    this.height = height;
    this.width = width;
    this.depth = depth;
  }
}
