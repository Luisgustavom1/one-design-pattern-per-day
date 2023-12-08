import { Device } from "./Device";

export class Radio implements Device {
  on: boolean = false;
  volume: number = 30;
  channel: number = 1;

  isEnabled(): boolean {
    return this.on;
  }
  enable(): void {
    this.on = true;
  }
  disable(): void {
    this.on = false;
  }
  getVolume(): number {
    return this.volume;
  }
  setVolume(percent: number): void {
    if (percent > 100) {
      this.volume = 100;
    } else if (percent < 0) {
      this.volume = 0;
    } else {
      this.volume = percent;
    };
  }
  getChannel(): number {
    return this.channel;
  }
  setChannel(channel: number): void {
    this.channel = channel;
  }
  printStatus(): void {
    console.log("-------------------");
    console.log("| I`m radio.");
    console.log("| I`m " + (this.on ? "enabled" : "disabled"));
    console.log("| Current volume is " + this.volume + "%");
    console.log("| Current channel is " + this.channel);
    console.log("-------------------");
  }
}