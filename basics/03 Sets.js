const set = new Set([1, 2, 3, 5, 5, 'anas', 'anas', 'Anas']);

set.add(4);
// set.add(4); // will not add duplicate values
console.log(set.has('anas'));
set.delete(3);
console.log(set.size);
// console.log(set);
// set.clear();
// console.log(set);

// iterate set values

let set2 = new Set('fooooooood');
console.log({ set2 });

for (const item of set) {
  console.log(item);
}
