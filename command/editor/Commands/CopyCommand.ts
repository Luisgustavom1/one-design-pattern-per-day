import { BaseCommand } from "./BasetCommand";

export class CopyCommand extends BaseCommand {
  // The copy command isn't saved to the history since it
  // doesn't change the editor's state.
  execute(): boolean {
    this.app.clipboard = this.editor.getSelection();
    return false;
  }
}