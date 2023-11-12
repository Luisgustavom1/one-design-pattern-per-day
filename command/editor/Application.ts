import { Command } from "./Interfaces/Command";
import { CommandHistory } from "./CommandHistory";
import { Editor } from "./Editor";
import { CopyCommand } from "./Commands/CopyCommand";
import { PasteCommand } from "./Commands/PasteCommand";
import { CutCommand } from "./Commands/CutCommand";

export class Application {
  clipboard?: string;

  constructor(
    private readonly history: CommandHistory,
    private readonly editor: Editor,
  ) {}

  // Only a sequence of commands to simulate user interaction 
  test() {
    this.editor.setText("I typed this beautiful sentence");

    this.editor.setSelection("beautiful sent");
    this.executeCommand(new CopyCommand(this, this.editor));
    this.editor.setSelection(undefined);
    this.executeCommand(new PasteCommand(this, this.editor));
    console.assert(this.editor.getText() === "I typed this beautiful sentencebeautiful sent", "Paste");

    this.undo();
    console.assert(this.editor.getText() === "I typed this beautiful sentence", "Undo paste");

    this.editor.setSelection("ed this beautif");
    this.executeCommand(new CutCommand(this, this.editor));
    console.assert(this.editor.getText() === "I typul sentence", "Cut");

    this.executeCommand(new PasteCommand(this, this.editor))
    console.assert(this.editor.getText() === "I typul sentenceed this beautif", "Paste the cut to end of line")
  }

  executeCommand(command: Command) {
    const shouldAddToHistory = command.execute();
    if (shouldAddToHistory) {
      this.history.push(command)
    }
  }
  
  undo() {
    const command = this.history.pop()
    if (command) {
      command.undo()
    }
  }
}