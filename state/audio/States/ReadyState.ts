import { LockedState } from "./LockedState";
import { PlayingState } from "./PlayingState";
import { State } from "./State";

export class ReadyState extends State {
  clickLock(): void {
    this.player.changeState(new LockedState(this.player));
  }

  clickPlay(): void {
    this.player.playing = true;
    this.player.changeState(new PlayingState(this.player));
  }

  clickNext(): void {
    this.player.nextSong()
  }

  clickPrevious(): void {
    this.player.previousSong()
  }
}