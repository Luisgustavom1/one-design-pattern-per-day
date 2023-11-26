import { Facebook } from "./Facebook";
import { Twitter } from "./Twitter";

(async () => {
  const username = "username" 
  const password = "password" 

  let network = new Facebook(username, password);
  await network.post("send post to facebook");
  console.log();
  network = new Twitter(username, password);
  await network.post("send post to twitter")
})()