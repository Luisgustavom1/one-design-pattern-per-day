import { Editor } from "./Editor";
import { Snapshot } from "./Snapshot";

export class Command {
  private backup?: Snapshot;

  makeBackup(editor: Editor) {
    this.backup = editor.createSnapshot();
  }

  undo() {
    if (this.backup) {
      this.backup.restore();
    }
  }
}