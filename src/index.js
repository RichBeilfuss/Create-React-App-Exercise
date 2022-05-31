import fruits from './foods';
import {choice, remove} from './helpers';

let fruit = choice(fruits);

console.log(`I would like one ${fruit}, please!`);
console.log(`Here is your ${fruit}!`);
console.log(`YUM! Can I please have another?`);

let remaining = remove(fruit,fruits);

console.log(`I am sorry, we are out of that fruit. We have ${remaining.length} left.`)