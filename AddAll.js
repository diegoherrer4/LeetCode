// Yup!! The problem name reflects your task; just add a set of numbers. But you may feel yourselves condescended, to write a program just to add a set of numbers. Such a problem will simply question your erudition. So, let's add some flavor of ingenuity to it. Addition operation requires cost now, and the cost is the summation of those two to be added. So, to add 1 and 10, you need a cost of 11. If you want to add 1, 2 and 3, there are several ways:

// 1 + 2 = 3, cost = 3,
// 3 + 3 = 6, cost = 6,
// Total = 9.
// 1 + 3 = 4, cost = 4,
// 2 + 4 = 6, cost = 6,
// Total = 10.
// 2 + 3 = 5, cost = 5,
// 1 + 5 = 6, cost = 6,
// Total = 11.
// I hope you have understood already your mission: to add a set of integers so that the cost is minimal.

// Your Task
// Given a vector of integers, return the minimum total cost of addition.

const addAll = (numbers) => {
  let totalCost = 0;

  while (numbers.length > 1) {
    numbers = numbers.sort((a, b) => a - b);
    let a = numbers.shift() + numbers.shift();
    numbers.push(a);
    totalCost += a;
  }
  return totalCost;
};
