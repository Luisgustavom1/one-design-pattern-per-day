import { Device } from "./implementations/Device";
import { Radio } from "./implementations/Radio";
import { Tv } from "./implementations/Tv";
import { AdvancedRemote } from "./remotes/AdvancedRemote";
import { BasicRemote } from "./remotes/BasicRemote";

function clientCode(device: Device) {
  console.log("Tests with basic remote.");
  const basicRemote = new BasicRemote(device);
  basicRemote.power();
  basicRemote.channelUp();
  device.printStatus();

  console.log("Tests with advanced remote.");
  const advancedRemote = new AdvancedRemote(device);
  advancedRemote.power();
  advancedRemote.mute();
  advancedRemote.channelUp();
  device.printStatus();
}

clientCode(new Tv());
console.log("");
clientCode(new Radio());