function fib() {
  const fibSeq = [0, 1];
  for (let i = 2; i < 50; i++) {
    fibSeq.push(fibSeq[i - 2] + fibSeq[i - 1]);
  }
  return fibSeq;
}

console.log(fib());

function numToStrings() {
  return _.map(fib(), function (num) { return `${num}`; });
}

console.log(numToStrings());

function numEvenNums(arr) {
  return (_.filter(arr, function (num) { return num % 2 === 0; })).length;
}

console.log(numEvenNums(fib()));
