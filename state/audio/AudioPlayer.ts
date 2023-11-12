import { ReadyState } from "./States/ReadyState";
import { State } from "./States/State";

export class AudioPlayer {
  private state: State;
  playing: boolean = false;
  // Simulate event
  event: Event = {} as Event;

  constructor() {
    this.state = new ReadyState(this);
  }

  public changeState(state: State) {
    this.state = state;
  }

  public clickLock() {
    this.state.clickLock();
  }

  public clickPlay() {
    this.state.clickPlay();
  }

  public clickNext() {
    this.state.clickNext();
  }

  public clickPrevious() {
    this.state.clickPrevious();
  }

  public startPlayback() {
    console.log("Starting playback...")
  }

  public stopPlayback() {
    console.log("Stopping playback...")
  }

  public nextSong() {
    console.log("Next song")
  }

  public previousSong() {
    console.log("Previous song")
  }

  public fastForward(time: number) {
    console.log("Fast Forward", time, "seconds")
  }

  public rewind(time: number) {
    console.log("Going back", time, "seconds")
  }
}

interface Event {
  doubleClick: boolean;
}