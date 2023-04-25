/*
You might know some pretty large perfect squares. 
But what about the NEXT one?

Complete the findNextSquare method that finds the next 
integral perfect square after the one passed as a parameter. 
Recall that an integral perfect square is an 
integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. 
You may assume the parameter is non-negative.
*/


// Solution

function findNextSquare(sq) {
  let root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}

// or

function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq);
  return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}

