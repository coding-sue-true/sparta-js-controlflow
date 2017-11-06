var moneyInPocket = prompt("How much do you have to spend?");
var drinks = prompt("How many drinks you had so far?");
var crisps = prompt("How much are the crisps?");

if (moneyInPocket > 10) {
  alert ("I can buy a drink with my lunch");
} else if (moneyInPocket > 5) {
  alert ("I can buy just some crisps");
} else {
  alert ("I can't buy anything");
}

if (moneyInPocket > 10 && drinks < 3) {
  alert ("I'm going to buy another drink");
} else if (moneyInPocket > 5 || crisps == 0) {
  alert ("I'm going to buy some crisps!");
} else {
  alert ("I'm going home");
}
