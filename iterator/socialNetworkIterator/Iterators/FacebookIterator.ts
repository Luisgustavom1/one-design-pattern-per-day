import { Facebook } from "../Collections/Facebook";
import { Profile } from "../Profile";
import { ProfileIterator } from "./ProfileIterator";

export class FacebookIterator implements ProfileIterator {
  // a reference to the collection that it traverses.
  private facebook: Facebook
  private profileId: number
  private type: string

  // how can iterator is independently
  // from other iterators it has to store the
  // iteration state
  private currentPosition: number = 0
  private cache?: Array<Profile>

  constructor(facebook: Facebook, profileId: number, type: string) {
    this.facebook = facebook;
    this.profileId = profileId;
    this.type = type;
  }

  private lazeInit() {
    if (!this.cache) {
      this.cache = this.facebook.socialGraphRequest(this.profileId, this.type);
    };
  }

  getNext() {
    if (this.hasMore()) {
      const result = this.cache![this.currentPosition]
      this.currentPosition += 1;
      return result;
    }
  }

  hasMore() {
    this.lazeInit();
    if (!this.cache) return false;  
    return this.currentPosition < this.cache.length; 
  }
}