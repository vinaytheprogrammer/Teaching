console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    process.stdout.write(i + " ");
}
console.log("\n");


console.log("Numbers from 10 to 1:");
let num = 10;
while (num >= 1) {
    process.stdout.write(num + " ");
    num--;
}
console.log("\n");


const favoriteFruits = ["apple", "banana", "mango", "strawberry", "pineapple"];
console.log("My favorite fruits:");
for (let fruit of favoriteFruits) {
    console.log(fruit);
}