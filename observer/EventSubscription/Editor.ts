import { EventManager } from "./EventManager";

const editorEvents = ["open", "save"] as const;

export type EditorEvents = (typeof editorEvents)[number]

export class Editor {
  public events?: EventManager<EditorEvents>;
  private file?: File;

  constructor () {
    this.events = new EventManager(...editorEvents);
  }

  public open(filePath: string) {
    this.file = new File([], filePath);
    this.events?.update("open", this.file);
  }

  public save() {
    if (this.file) {
      this.events?.update("save", this.file);
    }
  }
}