import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('Victor');
const linked = new LinkedList();

for (let i = 0; i <= 10; i++) {
  linked.add(Math.round(Math.random() * 100));
}

charactersCollection.sort();
linked.sort();
numbersCollection.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
console.log(linked.length);
linked.print();
