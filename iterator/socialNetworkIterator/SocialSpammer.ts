import { ProfileIterator } from "./Iterators/ProfileIterator";

// Here is another useful trick: you can pass an iterator to a
// client class instead of giving it access to a whole
// collection. This way, you don't expose the collection to the
// client.
//
// And there's another benefit: you can change the way the
// client works with the collection at runtime by passing it a
// different iterator. This is possible because the client code
// isn't coupled to concrete iterator classes.
export class SocialSpammer { 
  constructor() {}

  send(iterator: ProfileIterator, msg: string) {
    while (iterator.hasMore()) {
      const profile = iterator.getNext()!;
      console.log(profile.getEmail(), msg);
    }
  }
}