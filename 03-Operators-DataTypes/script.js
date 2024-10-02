// TASK 1: Ilk 10 Fibonacci ededlerini yazan algorithm

let num1 = 0;
let num2 = 1;

let nextNum;

console.log(num1);
console.log(num2);

for (i = 2; i < 10; i++) {
  nextNum = num1 + num2;
  console.log(nextNum);

  num1 = num2;
  num2 = nextNum;
}

// TASK 2: Verilmish sozu tersine yazan algorithm

let soz = "kitab";

let tersSoz = "";

for (i = soz.length - 1; i >= 0; i--) {
  tersSoz = tersSoz + soz[i];
}
console.log(tersSoz);

// TASK 3: 1-dən 500-ə qədər tək ədədlərin cəmi ilə cüt ədədlərin cəminin fərqinin mənfi və ya müsbət olduğunu çap edən algotithm

let tekCem;
let cutCem;

for (i = 1; i <= 500; i++) {
  if (i % 2 == 0) {
    cutCem = cutCem + i;
  } else {
    tekCem = tekCem + i;
  }
}
let netice = tekCem - cutCem;

if (netice > 0) {
  console.log("Müsbət ədəddir");
} else if (netice == 0) {
  console.log("Sıfırdır");
} else {
  console.log("Mənfi ədəddir");
}
