/**
Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢
*/

const changePossibilities = (amount, money) => {
  let combos = [];
  combos[0] = 1;

  for (let i = 0; i <= amount; i++) combos.push(0);

  money.forEach(coin => {
    for (let i = 1; i < combos.length; i++) {
      if (i >= coin) combos[i] += combos[i - coin];
    }
  });

  return combos[amount];
};