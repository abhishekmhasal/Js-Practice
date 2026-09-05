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

// let arr = [1, 2, 3, 4, 5];
// let res = arr.forEach((e) => e > 3);
// console.log(res);

// const obj ={
// pqr : 100,
// abc:200,
// xyz:{
//   pqr:300,
//   abc:400,
// }
// }
// const{
//   pqr,abc,xyz:{pqr:p}}=obj
//   console.log(pqr,abc,p);
// let x =[100,200,300]
// let y =[100,200,300]
// let z = y;
// console.log(x==y);
// console.log(y==z);
// console.log(z==x)

//#region
// let x = 10
// if(function slove(){}){
//   x=x-typeof(slove)
// }
// console.log(x);

// let arr = [ 1,2,3,4,5,6,7,8,9,10]
// let res = arr .map ((e)=>e*2)//map true false bhetete
// console.log(res);

// const str1="xyz"
// const str2 ="123"
// let  res ='';
// for(let i =0;i<str1.length;i++){
// res += str1[i]+str2[i]
// }
// console.log(res);
//#region
//Q11
// let text = " JavaScript God Mode "
// const trimmed = text.trim();

// console.log("Original length :",text.length);
// console.log("Trimmed :",trimmed);
// console.log("trimmed :", trimmed.length);
// console.log("UpperCase : " ,trimmed.toUpperCase());
// console.log("LowerCase:",trimmed.toLowerCase());

//#region
//Q12

// let text = "JavaScript is Powerful";

// console.log(text.includes("Script"));//true
// console.log (text.indexOf("is"))//12
// console.log(text.slice(0,10));//JavaScript
// console.log(text.substring(13, 22));
// console.log(text.replace("Powerful","aewsome"));//done
// console.log(text.startsWith("java"));//false
// console.log(text.endsWith("Powerful"));//true
// console.log(text.charAt());//j
// console.log(text[0]);//j

//#region
//Q 13
// let price =" 499px"
// let rating ="4.8starts"
// let invalidValue = "hello"

// console.log(parseInt(price));
// console.log(parseFloat(rating));
// console.log(parseInt(invalidValue));
// console.log(Number.isNaN(parseInt(invalidValue)));

// console.log(Number.isInteger(499));//true
// console.log(Number.isInteger(4.8)); //false

//#region math methds
//Q-14
// let value = -4.7;
// console.log(Math.abs(value));//4.7
// console.log(Math.round(value));//-5
// console.log(Math.floor(value));//-5
// console.log(Math.ceil(value));//-4
// console.log(Math.max(12,45,7,8));//45
// console.log(Math.min(22,45,76,33,78))//22;
// console.log(Math.sqrt(144));//12
// console.log(Math.pow(2,10));//1024

//#region  random integer genrator
//Q15
// const dice = Math.floor(Math.random()*6)+1;
//  let min =20;
//  let max = 30;

// const randomNumber = Math.floor(Math.random()*(max-min+1))+min
// console.log(randomNumber);

//#region
//Q16  pass or fail
// let number = Number(prompt(" Enter a number"));

//  if(number<= 0  || number > 100){
//   console.log( 'invalid marks');
//  }
//  else if(number>=90){
//   console.log(" A");
// }
// else if( number >=80 && number <=89){
//   console.log("b");
// }
// else if(number >=70 && number<=79){
//   console.log("c");

// }
// else if( number>=60 && number<=69){
//   console.log("d");

// }
// else {
//   console.log('f');}

//#region check eligibility
//Q18
//  const age = Number(prompt("Enter a  Age"))
// const  haslicence = prompt("Do you have  a driving licence? yse /no").toLocaleLowerCase()==="yes";
// if(age>=18){
//   if(haslicence){
//     console.log(" you can drive");
//   }
//   else{
//     console.log("you needd a licencs");

//   }
// }
// else{
//   console.log("not eligible to drive");
// }

//#region  loop practice
//Q19
// let number = Number(prompt("Enter a Number"));

// for(let i = 1;i<=10;i++){
//   console.log(`${number} x ${i} = ${number*i}`);
// }

//#region
//Q20
// let day = Number(prompt("Enter day from  1 to 7 : "));
// switch (day) {
//   case 1:
//     console.log("Mnday");
//     console.log("weekday");
//     break;

//   case 2:
//     console.log(" tuesday");
//     console.log("weeday");
//     break;

//   case 3:
//     console.log("wednesday");
//     console.log("weekday");

//     break;
//   case 4:
//     console.log("thursday");
//     console.log(" weekday");
//     break;
//   case 5:
//     console.log("friday");
//     console.log("weekday");
//     break;
//   case 6:
//     console.log("saterday");
//     console.log("weekend");
//     break;
//   case 7:
//     console.log("sunday");
//     console.log("weekend");
//     break;

//   default:
//     console.log("invalid day");
// }
//#region for ...off 
//Q21
// let i=0;
// while(i<10){
//   i++;
//   console.log(i);

// }

// let x=10;
// do {
//   console.log(x);
//   x++;
// }
// while(x<5);

// let word = "JavaScripts"
// for(let char of word){
//   console.log(char);

// } direct char deta hai str[i aur str.length lihane ka kam nhi]

// for (let i = 1; i <= 20; i++) {
//   if (i == 3) {
//     continue;
//   }
//    if(i == 17){
//       break;
      
//     }
  
//   console.log(i);
  
// }

