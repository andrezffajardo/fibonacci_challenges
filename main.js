
function calculateChallenge1() {
  let n = document.getElementById("input1").value;
  let result = fibonacciChallenge1(n);
  document.getElementById("result1").innerHTML = result;
}

//Challenge 1: the function must not exceed O(n) in time complexity.

function fibonacciChallenge1(n) {
  //If n is less than 2, return the value of n
  if (n<2) return n;
  //Create an array with the first two terms of the Fibonacci sequence
  let values = [0, 1];
  //Loop that runs from index 2 to n
  for (let i = 2; i <= n; i++) {
    //Calculate the next term of the sequence as the sum of the previous two
    //and add it to the values array
    values.push(values[i - 1] + values[i - 2]);
  }
  //Return the last term of the sequence,
  //which is the element at position n in the values array
  return values[n];
}





function calculateChallenge2() {
  let n = document.getElementById("input2").value;
  let result = fibonacciChallenge2(n);
  document.getElementById("result2").innerHTML = result;
}

//Challenge 2: the function must be recursive.

function fibonacciChallenge2(n) {
  //If n is less than 2, return the value of n
  if (n<2) return n;
  //Calculate the (n - 1) element of the Fibonacci sequence
  let n1 = fibonacciChallenge2(n - 1);//2
  //Calculate the (n - 2) element of the Fibonacci sequence
  let n2 = fibonacciChallenge2(n - 2);//1

  return n1 + n2;
}




function calculateChallenge3() {
    let n = document.getElementById("input3").value;
    let result = fibonacciChallenge3(n);
    document.getElementById("result3").innerHTML = result;
  }

//Challenge 3: the function must be iterative.


function fibonacciChallenge3(n) {
  // If n is less than 2, return n
  if (n<2) return n;
  // Declare variables and assign initial values to current and previous
  let current = 0;
  let previous = 1;
  let next;
  // Start a loop that iterates from the 2nd to the nth term of the sequence
  for (let i = 2; i <= n; i++) {
    next = current + previous;//1//2
    current = previous;//1//1
    previous = next;//1/2
  }
  // Return the value of next, which is the nth term of the Fibonacci sequence
  return next;
}


//Challenge 4: Global variables are not allowed, but the use of high level functions or closures is.

  function calculateChallenge4() {
    let n = document.getElementById("input4").value;
    const f = fibonacciChallenge4();
    const result = [];
    for (let i = 0; i <= n; i++) {
      result.push(f());
    }
    document.getElementById("result4").innerHTML = result[n];
  }


function fibonacciChallenge4() {
  let first = 0;
  let second = 0;
  // This anonymous function, when called, will return the next number in the Fibonacci sequence
  return function() {
    // If this is the first time the anonymous function is called, set first and second to 1 and return 0
    if (first === 0) {
      first = 1;
      second = 1;
      return 0;
    }
    // Otherwise, return the value of first, set first to the value of second, and set second to the sum of first and second
    else {
      const current = first;
      const firstc = second;
      second = first + second;
      first = firstc;
      return current;
    }
  };
}


//Challenge 5: Eneacci function

  function calculateChallenge5() {
    let n = document.getElementById("input5").value;
    let baseCases = [0, 1];
    let result = eneacci(n, baseCases);
    document.getElementById("result5").innerHTML = result;
  }


function eneacci(n, baseCases) {
  // If n is less than the length of baseCases, the desired term is already present in the array,
  // and return that value.
  if (n < baseCases.length) return baseCases[n];
  // Initialize a sum variable to 0.
  let sum = 0;
  // Loop from i = 1 to i = baseCases.length.
  for (let i = 1; i <= baseCases.length; i++) {
    // On each iteration, calculate the (n - i)th term of the Fibonacci series using recursion
    // and add it to the sum.
    sum += eneacci(n - i, baseCases);
  }
  // Return the sum of all the terms calculated in the loop.
  return sum;
}