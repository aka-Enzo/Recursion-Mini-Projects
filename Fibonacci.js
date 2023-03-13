// iterative 

const fib = (num) => {
    const sequence = [0, 1];
    if (num < 2) return sequence.slice(0, num);

    while (num < 2) {
        const newNum = sequence.at(-1) + sequence.at(-2)
        sequence.push(newNum);
        num --;
    }
    return sequence;
}

// Recursive

const fibsRec = (num, sequence = [0, 1]) => {
    if (sequence.length >= num) {
      return sequence.slice(0, num);
    }
  
    const newNumber = sequence.at(-1) + sequence.at(-2);
    sequence.push(newNumber);
    return fibsRec(num, sequence);
  }
  
  console.log(fib(0)); // []
  console.log(fib(1)); // [0]
  console.log(fib(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
  
  
  console.log(fibsRec(0)); // []
  console.log(fibsRec(1)); // [0]
  console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]