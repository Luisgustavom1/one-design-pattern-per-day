import { EditorEvents } from "../Editor";
import { Listener } from "./Listener";

export class EmailNotification implements Listener<EditorEvents> {
  constructor (
    private readonly email: string,
  ) {}

  update(event: EditorEvents, file: File): void {
    console.log("Email to " + this.email + ": Someone has performed " + event + " operation with the following file: " + file.name);
  }
}