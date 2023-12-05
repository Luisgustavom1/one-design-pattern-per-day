import { Editor } from "./Editor";
import { EmailNotification } from "./Listeners/EmailNotification";
import { LogOpen } from "./Listeners/LogOpen";

const editor = new Editor();
const emailNotification = new EmailNotification("email@gmail.com");
const logOpen = new LogOpen("log/path");

editor.events?.subscribe("save", logOpen);
editor.events?.subscribe("open", emailNotification);

editor.open("some/file/path");
editor.save();