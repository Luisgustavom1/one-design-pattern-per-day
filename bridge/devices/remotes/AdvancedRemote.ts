import { Device } from "../implementations/Device";
import { BasicRemote } from "./BasicRemote";

export class AdvancedRemote extends BasicRemote {
  constructor (device: Device) {
    super(device);
  }

  public mute() {
    console.log("Remote: mute");
    this.device.setVolume(0);
  }
}