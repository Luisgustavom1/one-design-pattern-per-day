import { AudioPlayer } from "../AudioPlayer";

export abstract class State {
  constructor(
    protected player: AudioPlayer,
  ) {}

  abstract clickLock(): void;
  abstract clickPlay(): void;
  abstract clickNext(): void;
  abstract clickPrevious(): void;
}