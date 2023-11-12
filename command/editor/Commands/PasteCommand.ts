import { BaseCommand } from "./BasetCommand";

export class PasteCommand extends BaseCommand {
  execute() {
    this.saveBackup()
    if(this.app.clipboard) this.editor.replaceSelection(this.app.clipboard)
    return true;
  }
}