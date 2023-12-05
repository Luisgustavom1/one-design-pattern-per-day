import { EditorEvents } from "../Editor";
import { Listener } from "./Listener";

export class LogOpen implements Listener<EditorEvents> {
  private log?: File;

  constructor (
    fileName: string,
  ) {
    this.log = new File([], fileName)
  }

  update(event: EditorEvents, file: File): void {
    console.log("Save to log " + this.log + ": Someone has performed " + event + " operation with the following file: " + file.name);
  }
}