import { Command } from "./Command";
import { Editor } from "./Editor";

const history: Array<Command> = []
const editor = new Editor();

editor.setCursor(1, 12);
editor.setText("Hello world!");
const command = new Command();
command.makeBackup(editor);
history.push(command);

editor.setText("10rem");
editor.setSelectionWidth("0rem");
editor.setCursor(2, 5);
const command1 = new Command();
command1.makeBackup(editor);
history.push(command1);

editor.setText("12 30rem");
editor.setSelectionWidth("30rem");
editor.setCursor(7, 15);
console.log(editor.toString());

history.pop()?.undo();
console.log(editor.toString());

history.pop()?.undo();
console.log(editor.toString());
