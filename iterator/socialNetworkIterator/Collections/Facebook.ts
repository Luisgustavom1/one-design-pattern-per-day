import { SocialNetwork } from "./SocialNetwork";
import { ProfileIterator } from "../Iterators/ProfileIterator";
import { FacebookIterator } from "../Iterators/FacebookIterator";
import { Profile } from "../Profile";

// Each concrete collection is coupled to a set of concrete
// iterator classes it returns. But the client isn't, since the
// signature of these methods returns iterator interfaces.
export class Facebook implements SocialNetwork {
  createCoworkersIterator(profileId: number): ProfileIterator {
    return new FacebookIterator(this, profileId, 'coworkers');
  }
  createFriendsIterator(profileId: number): ProfileIterator {
    return new FacebookIterator(this, profileId, 'friends');
  }

  socialGraphRequest(profileId: number, type: string): Array<Profile> {
    return [{
      getContacts: () => ['2', '3'],
      getEmail: () => 'email', 
      getId: () => 1,
      type
    }, {
      getContacts: () => ['1', '3'],
      getEmail: () => 'email 2', 
      getId: () => 2,
      type
    }, {
      getContacts: () => ['1', '2'],
      getEmail: () => 'email 3', 
      getId: () => 3,
      type
    }];
  }
}