import { Decimal } from "decimal.js";

let badPrice = 0.1 + 0.2;
const a = new Decimal('0.1');
const b = new Decimal('0.2');
let goodPrice = a.plus(b);
console.log(badPrice);
console.log(goodPrice);
