// function sayHello(Name){
// console.log("Hellow", Name);

// }
// sayHello( "abhi")
//Q-2
//#region
// function add(a, b) {
//  return(a + b);}
// let sum = add(2, 4); //fn
// console.log(sum);
// are reusble
// add(14, 23);
// add(23, 56);

//#region
//Q3
// function square(a){
//   return  a*a
// }
// let num = square(5)
// console.log(num);
//#region
//Q-4
// function multiply(a,b,c){
//   return a*b*c;
// }
// let num = multiply(2,3,4)
// console.log(num);
//#region
//Q5
// function checkEvenOdd(num) {
//   if (num % 2 == 0) {
//     return "even";
//   } else {
//     return "oddd";
//   }
// }
// let num = checkEvenOdd(8)
// console.log(num);
//

//#region
//Q-6
// function canVote(num){
//   if(num>=18 && num<=110)
//    {
//     return  "you can vote"
//    }
//   else if(num>125){
//     return "You are a Vote not valid"
//   }
//   else{
//     return " Not Eligible"
//   }
// }
// let num = canVote(56)
// console.log(num);
//#region
//Q-7
// function findMax(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// let num = findMax(6, 2);
// console.log(num);

//#region
//Q-8
// function checkNumber(num) {
//   if (num >= 0){
//     return " Num is Positive";
//   } else {
//     return " Num is Nagative";
//   }
// }
// let num = checkNumber(0)
//   console.log(num);

//#region
//Q9
// function printNumbers(num) {
//   for (let i = 1; i<=num; i++)
//   console.log(i);

// }
// printNumbers(9);
//#region
// Q -10
// function printTable(num) {
//   for (let i = 1; i <= 10; i++) console.log(num * i);
// }
// printTable(7);
//#region
// function sumUp(n){
//   let sum = 0
//   for (let i = 0;i<=n;i++){
//       sum =sum + i;
//   }
// return sum ;
// }
// let n = sumUp(4)
// console.log(n);

//#region
//Q-11
// function factorial(n){
//   fact = 1;
//   for (let i = 1; i<=n;i++){
//     fact = fact*i;
//   }
//   return fact;
// }
// let multiply = factorial(5);
// console.log(multiply);

/// array with function

//#region
//Q 12.13
// function findMaxArray(arr){
//   let max= arr[0];
//   for (let i = 0 ;i< arr.length;i++)
//   {
//     if(arr[i]< max);
//      //max = arr[i]

//   }
// return max;
// }
// let numbers = findMaxArray([10,20,40,67,545,999]);
// console.log(numbers);

// function findArrySum(arr){
//   let sum = 0;
//   for (let i =0 ;i<arr.length;i++)
// {
//   sum=sum+arr[i];
// }
// let avg = sum /arr.length
// return avg;
// }
// let sumofAll = findArrySum([10,45,32,445])
// console.log(sumofAll);
//#region
//Q14
// function getEvenNumbers(arr) {
//   let even = [];
//   for (let i = 0; i < arr.length; i++)
//     {
//     if (arr[i] % 2 == 0) {
//       even.push(arr[i]);
//     }
//   }
//    return even
// }
// let evenNum = getEvenNumbers([2, 3, 4, 5, 6, 7, 8, 90]);
// console.log(evenNum);
//#region
//Q 15
// function reverseNum(arr){
//   let reversed =[];
//   for ( let i = arr.length-1;i>=0;i--){
//     reversed.push(arr[i])
//   }
//   return reversed ;
// }

// let newArry= reverseNum([10,39,48,84])
// console.log(newArry);
//#region
//Q16
function findDuplicate(arr) {
  let duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j] && !duplicate.includes(arr[i]))
        duplicate.push(arr[i]);
    }
  }
  return duplicate;
}
let duplicates = findDuplicate([10, 20, 10, 30, 20, 30, 40, 50, 40]);
console.log(duplicates);
