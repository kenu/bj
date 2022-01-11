const s = require('fs').readFileSync('/dev/stdin')+'';
console.log(run(s));

function run(input) {
  const lines = input.split('\n');
  const n = parseInt(lines[0]);
  const a = lines[1].split(' ').map(Number);
  let r = [];
  a.forEach(el => {
    console.log(el);
    let isPrime = true && el !== 1;
    for(let i = 2; i <= el; i++) {
      console.log(el, i, el % i);
      if (i < el && el % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      r.push(el);
    }
  });
  console.log(r);
  return r.length;
}

module.exports = run;
