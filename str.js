//#region reverse string using split
//Q1>
// let str = " Hiii abhsiek ";
// let savedStr = str.split(" ").map((word) => {
//   return word.split("").reverse().join("");
// });

// console.log(savedStr.join(" "));

//#region check arry or not
//Q2>
// function checkArray(elem){
//    return Array.isArray(elem)
// }
// console.log(checkArray({}));
// console.log(checkArray([]));

//#region  how to make arr empty
//Q 3
// let arr =[1,2,3,4,5,6];
// arr.length = 0;
// console.log(arr);

//#region check number is integer or not
//Q 4

// let n = 3.0;
// if (n % 1 === 0) {
//   console.log("Integer");
// } else {
//   console.log("noit!");
// }
//#region
//Q5
// function duplicate (arr){
// let len = arr.length
// for(let i = 0;i < len ;i++)
// {
//   arr.push(arr[i])
// }
// return arr;
// }
//  newArr = duplicate([1,2,3,4,5]);
//  console.log(newArr)

//#region check palindrome string
//Q-6>

// function stringPalChecker(str){
//    var word = str.split("").reverse().join("");
//    return word === str;
// }
// console.log(stringPalChecker("poop"));
// console.log(stringPalChecker("loop"));

//#region alphabetical order
//Q7>
// function alphaOrder(str){
//    return str.split("").sort().join("");
// }
// console.log(alphaOrder("abhishek"));

// function stringUpperCase(str){
//        return str.split(" ").map((e)=>{
//        return  e.charAt(0).toUpperCase() + e.slice(1)

//       })
//       .join(" ")
// }
// console.log(stringUpperCase("hii friends how are you"));

//#region
//Q8
// function occ(str){
//    var occrance= {};
//    str.split("").forEach((elem)=>{
//     if(!occrance.hasOwnProperty(elem)){
//       occrance[elem]=1;
//     }
//      else{
//       occrance[elem]++;
//      }
//    })
//    return occrance;
// }
// console.log(occ("apple"));
// //console.log(occ("app kaiise hoo"));
//#region Loopss
//Q 9>
// let arr =[ 1,2,3,4,5,6];
//   sum =0 ;
//   arr.forEach((e)=>sum+=e )
//  console.log(sum);

//#region filetr a number in arry and add those number
//Q 10.

// let arr =[ 12,"abhi",12,"tusahr",23,23,34];
// sum = 0 ;
// arr.forEach((elem)=>{
//   if(typeof elem === "number"){
//     sum += elem;
//   }
// })
//console.log(sum);

//var arr = [
// {
//   name: "abhi",
//   gender: "male",
// },

// {
//   name: "harshita",
//   gender: "female",
// },
//   {
//     name: "sarthak",
//     gender: "male",
//   },

//   {
//     name: "payal",
//     gender: "female",
//   },

//   {
//     name: "tushar",
//     gender: "male",
//   },
// ];
//  count =0;
// arr.forEach((e)=>{
//   if(e.gender !== "male")
//     count++;
// })
// console.log(count);
// pre post increment
// let a = 10;
//  let b = a++;//10  use dhaba pahile use kro item
// console.log(b);//11
// console.log(a);//10
// // 11

// let a=10;
// let b= ++a;//11 change  pahile pay kro bill then use karo
// console.log(b);
// console.log(a);

// let b = 23;
// console.log(b);//23
// let a = b++ // 23
// console.log(a);//23
// console.log(b);

// let b= 12;
// console.log(b);//12
// let a = ++b;//13
// console.log(a);//13
// console.log(b);//13

//  var a = 12;//13 //14
//  var b= 10;//9
//  var c= 9;//10

//  var d =  a++  + --b - c++ +  ++a
//            12  +  9   -   9  +   14

//   console.log(d);

// function swap(a,b){
//  [a,b]=[b,a]
//   return[a,b]
// }
// console.log(swap(5,6));
//#region
//Q14
// console.log("Enter 1 for a area of rectagle");
// console.log("Enter 2 for area of square ");
// console.log("Enter 3 for area of tringle");

// let n = Number(prompt());
// switch (n) {
//   case 1: {
//     let len = Number(prompt("Enter a length"));
//     let breadth = Number(prompt("Enter a breadth"));
//     console.log(len * breadth);
//     break;
//   }
//   case 2: {
//     let side = Number(prompt("enter a side"));
//     console.log(side * side);
//     break;
//   }
//   case 3: {
//     let height = Number(prompt("enter a height"));
//     let base = Number(prompt("enter a base"));
//     console.log((height * base) / 2);
//     break;
//   }
//   default:console.log("invalid Number");

// }

//#region
//Q15
// let s = prompt("Enetr a string");
// let consonent = 0,
//   vowel = 0;
// for (let i = 0; i<s.length; i++) {
//   let ch = s.charAt(i);
// switch(ch){
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":vowel++;
//     break;
//     default: consonent++;
//   }

// }
// console.log("consonent:" + consonent);
// console.log("vowel :"  + vowel);

// let count = 0;
// for (let i = 2; i <= 20; i += 3) {
//     count++;
// }
// console.log(count);
//#region 
//Q16
// let n = Number(prompt("enetr  N value"));
// for(let i =1 ;i<=n ;i++){
//   console.log("hello world");
  
//#region
//Q17
// let num = 5;
// let fact = 1;
// for(let i = 1 ;i<=num;i++){
// fact =fact * i
// }
// console.log(fact);

//#region
//Q18

// let sum =0 
// let num = Number(prompt("enter a num"));
// for(let i = 0 ;i <=num ;i++){
//   sum+=i
//   console.log(sum);
// }

// console.log(sum);

//#region
//Q19

// let start = 1;
// let end =10;
// let sum  =0 ;
// let odd =0 ;
// for(let i =start;i<=end;i++){
//   if(i %2===0){
//     sum+=i;
//   }
//  else{
//   odd+=i
//  }
// }
// console.log(sum );
// console.log(odd);


//#region
//Q20

// let n=Number(prompt("enter number"));
// if(n<=1)console.log("not prime");
// else if(n==2)console.log("prime");
// else if(n%2===0)console.log("not prime");
// else {
//   let isPrime = true;
//   for(i=3;i<=Math.floor(Math.sqrt(n));i+=2){
//        if(n%i==0){
//      isPrime = false;
//        break;
//        }
     
//   }
//   console.log(isPrime?"prime":"not prime");
  
// }
//
//#region 
// let n =Number(prompt("Enter a number"))
// let rev = 0 ;
// while(n>0){
//   rev = (rev*10) + (n%10)
//    n= Math.floor(n /10)
// }
// console.log(rev);
