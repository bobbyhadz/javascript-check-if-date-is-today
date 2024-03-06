// EXAMPLE 1 - Check if a Date is Today's date using JavaScript

function isToday(date) {
  const today = new Date();

  // 👇️ Today's date
  console.log(today);

  if (today.toDateString() === date.toDateString()) {
    return true;
  }

  return false;
}

console.log(isToday(new Date())); // 👉️ true
console.log(isToday(new Date('2022-01-21'))); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a Date is today's date using Date object methods

// function isToday(date) {
//   const today = new Date();

//   // 👇️ Today's date
//   console.log(today);

//   if (
//     today.getFullYear() === date.getFullYear() &&
//     today.getMonth() === date.getMonth() &&
//     today.getDate() === date.getDate()
//   ) {
//     return true;
//   }

//   return false;
// }

// console.log(isToday(new Date())); // 👉️ true
// console.log(isToday(new Date('2022-01-21'))); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a Date is Yesterday's date in JavaScript

// function isYesterday(date) {
//   const yesterday = new Date();
//   yesterday.setDate(yesterday.getDate() - 1);

//   // 👇️ Yesterday's date
//   console.log(date);

//   if (yesterday.toDateString() === date.toDateString()) {
//     return true;
//   }

//   return false;
// }

// const y = new Date();
// y.setDate(y.getDate() - 1);

// console.log(isYesterday(y)); // 👉️ true
// console.log(isYesterday(new Date('2022-01-21'))); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if a Date is Tomorrow's date in JavaScript

// function isTomorrow(date) {
//   const tomorrow = new Date();
//   tomorrow.setDate(tomorrow.getDate() + 1);

//   // 👇️ Tomorrow's date
//   console.log(tomorrow);

//   if (tomorrow.toDateString() === date.toDateString()) {
//     return true;
//   }

//   return false;
// }

// const t = new Date();
// t.setDate(t.getDate() + 1);

// console.log(isTomorrow(t)); // 👉️ false
// console.log(isTomorrow(new Date('2022-01-21'))); // 👉️ false
