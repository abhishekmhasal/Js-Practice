//#region templte litreals
//Q1)  
// const name = "Aman";
// const age = 24;
// const city = "Nagpur";
// const isStudent = true;

// console.log(`${name} is ${age} years old, lives in ${city}, and student status is ${isStudent}.`);

//#region reassigned vslue
//Q2]
// let score = 10;
// console.log(score);//undefined
// score = 25;
// console.log(score);
// const country = " India"
// console.log(country);
// country = " england"
// console.log(country); constant varible can not resign a value

//#region check a tyep of all premitive data
// Q3]
// let value = " abhi"
// console.log( typeof value);// string
//  value = 34;//number
//  console.log(typeof value);
//  value = true; //bolean
//  console.log( typeof value);
//  let a ;
//  console.log(typeof a);//undifiend
// value = null;
// console.log(typeof value);//object

// value = 233434545565656n
//  console.log( typeof value);//bigInt

//  value = Symbol("id")
//  console.log(typeof value);

//#region propmt 
//Q-4
//  let  num = +prompt('enter a  frist number')
// let num1 = +prompt('enter asecond number')
// console.log(num % num1)

//#region
//Q5 check type of 
// console.log( "5"+3);//53 string
// console.log( typeof ('5'-3));//2 number
// console.log(typeof ("5"*"2"));//  number-10

// console.log(typeof (true+1));//2 number
// console.log(typeof (false +1));//1 number
// console.log( typeof (null +1));//number
// console.log(undefined + 1);//NaN
//#region
//Q-6 increment decreemnt
// let x = 5;
// let a = x--;
// let b =--x

// console.log(x);//7 -- 3
// console.log(a);//5 -- 5
// console.log(b);//7 -- 3

//#region aasignment opretor
//Q-7  //
// let balence = 1000;

// balence += 500;
// console.log(balence);

// balence -= 200;
// console.log(balence);

// balence *= 2;
// console.log(balence);

// balence /= 4;
// console.log(balence);

// balence %= 300;
// console.log(balence);

//#region equal two
//Q-8

// 5 =="5"//true
// 5 === "5"//false -> strict check
// 0 == false // true 
// 0 === false //flase
// "" == false //true
// "" === false// false
// null == undefined // true
// null === undefined // flase

//#region truthy and falsy
//Q 9

// let userName = "";
// let enterAge =0;
// let customTheme = null;

// userName= userName || "Guest";
// enterAge = enterAge || 18;
// customTheme = customTheme || " light"

// console.log(userName);
// console.log(enterAge);
// console.log(customTheme);

// // || frist truthy value return krat hai "", 0 ,null
// // falsy hai isiliye fallback values  choose ho jati hain 

// console.log("hello" && " world");
// console.log(0 && "hello");
// console.log(""||"default");
// console.log("user" || "guest");

// && aur || hamesha sirf true ya false return nhi krate ye actual oprened values bhi retun kr sakte hai


//#region ternary opretor
//Q10 
// let age = Number(prompt(" Enter a age "))
//  const  status = age >= 18 ? "adult" : "minor";
// console.log(status);
