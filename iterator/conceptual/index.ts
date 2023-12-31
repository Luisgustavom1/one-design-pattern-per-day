import { WordsCollection } from "./collections/WordsCollection";

function ClientCode() {
  const collection = new WordsCollection();
  collection.addItem('First');
  collection.addItem('Second');
  collection.addItem('Third');

  const iterator = collection.getIterator();

  console.log('Straight traversal:');
  while(iterator.valid()) {
    console.log(iterator.next());
  }
  
  console.log('');
  
  const reverseIterator = collection.getReverseIterator();
  while(reverseIterator.valid()) {
    console.log(reverseIterator.next());
  }
}

ClientCode();