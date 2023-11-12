import { LockedState } from "./LockedState";
import { ReadyState } from "./ReadyState";
import { State } from "./State";

export class PlayingState extends State {
  clickLock(): void {
    this.player.changeState(new LockedState(this.player));
  }

  clickPlay(): void {
    this.player.stopPlayback();
    this.player.changeState(new ReadyState(this.player));
  }

  clickNext(): void {
    if (this.player.event.doubleClick) {
      this.player.nextSong();
    } else {
      this.player.fastForward(5);
    }
  }

  clickPrevious(): void {
    if (this.player.event.doubleClick) {
      this.player.previousSong();
    } else {
      this.player.rewind(5);
    }
  }
}