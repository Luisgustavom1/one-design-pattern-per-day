import { Adaptee } from "./Adaptee";
import { Adapter } from "./Adapter";
import { Target } from "./Target";

function clientCode(target: Target) {
  console.log(target.request());
}

console.log("Client: I can work just fine with the Target objects:");
const target = new Target();
clientCode(target);

const adaptee = new Adaptee();
console.log("Client: The Adaptee class has a weird interface. See, I don\'t understand it:");
console.log(`Adaptee: ${adaptee.specificRequest()}\n`);

console.log("Client: But I can work it via the adapter:");
const adapter = new Adapter(adaptee);
clientCode(adapter);


