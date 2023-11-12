import { PlayingState } from "./PlayingState";
import { ReadyState } from "./ReadyState";
import { State } from "./State";

export class LockedState extends State {
  clickLock(): void {
    if (this.player.playing) {
      return this.player.changeState(new PlayingState(this.player))
    }

    return this.player.changeState(new ReadyState(this.player))
  }

  clickPlay() {};
  clickNext() {};
  clickPrevious() {};
}