import { ProfileIterator } from "../Iterators/ProfileIterator"

export interface SocialNetwork {
  createFriendsIterator(profileId: number): ProfileIterator
  createCoworkersIterator(profileId: number): ProfileIterator
}