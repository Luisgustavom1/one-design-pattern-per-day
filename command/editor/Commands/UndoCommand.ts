import { BaseCommand } from "./BasetCommand";

export class UndoCommand extends BaseCommand {
  execute() {
    this.app.undo()
    return false;
  }
}