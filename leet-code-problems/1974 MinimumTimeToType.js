function minTimeToType(word) {
  let time = 0;
  let current = 'a';
  for (let i=0; i<word.length; i++) {
    const target = word[i];
    const diff = Math.abs(target.charCodeAt(0) - current.charCodeAt(0));
    const minSteps = Math.min(diff, 26-diff);
    time+= minSteps+1;
    current = target;
  }
  return time;
}

console.log(minTimeToType('abc'))
console.log(minTimeToType('bza'))