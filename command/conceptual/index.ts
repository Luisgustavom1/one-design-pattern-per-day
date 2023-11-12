import { ComplexCommand } from "./ComplexCommand";
import { Invoker } from "./Invloker";
import { Receiver } from "./Receiver";
import { SimpleCommand } from "./SimpleCommand";

const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand("Say hi, I'm run on start"));
const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, "Send email", "Save report"));

invoker.doSomethingImportant();