import { Application } from "../Application";
import { Command } from "../Interfaces/Command";
import { Editor } from "../Editor";

export abstract class BaseCommand implements Command {
  protected backup: string = "";

  constructor(
    /**
     * Only commands know about receiver (aka app and editor)
     */
    protected readonly app: Application,
    protected readonly editor: Editor,
  ) {}

  saveBackup(): void {
    this.backup = this.editor.getText();
  }

  undo(): void {
    this.editor.setText(this.backup);
  }

  // The execution method is declared abstract to force all
  // concrete commands to provide their own implementations.
  // The method must return true or false depending on whether
  // the command changes the editor's state.
  abstract execute(): boolean 
}