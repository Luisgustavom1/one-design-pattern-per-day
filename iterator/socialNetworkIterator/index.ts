import { Facebook } from "./Collections/Facebook";
import { FacebookIterator } from "./Iterators/FacebookIterator";
import { SocialSpammer } from "./SocialSpammer";

function ClientCode() {
  const collection = new Facebook()
  const spammer = new SocialSpammer();

  // we can change iterator at runtime
  let iterator = collection.createFriendsIterator(1);
  console.log('\n------------------ to friends ------------------')
  spammer.send(iterator, 'Hello world my friends')
  console.log('\n------------------ to coworkers ------------------')
  iterator = collection.createCoworkersIterator(1);
  spammer.send(iterator, 'Hello world my coworkers')
}

ClientCode();