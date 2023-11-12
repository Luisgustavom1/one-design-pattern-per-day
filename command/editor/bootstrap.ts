import { Application } from "./Application";
import { CommandHistory } from "./CommandHistory";
import { Editor } from "./Editor";

const commandHistory = new CommandHistory();
const editor = new Editor();
const app = new Application(commandHistory, editor);

app.test();