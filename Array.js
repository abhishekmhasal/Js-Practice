// //  1 ) var languages = [ "Javascripts","Python",'Java',"c++"]

// // languages [2]="Typescripts"
// // console.log(languages)

// // Q 2)  let cities =["BHOPAL","INDORE","DELHI","BENGALURU","PUNE"]

// // console.log(cities[cities.length-1] )
// // console.log(cities.at(-1))

// // Q3) let numbers =[ 10, 20 ,30, 40,50];

// // console.log( numbers.length);
// // console.log(numbers.length-1);
// // numbers.length =3;
// // console.log(numbers)

// //  Q4) let queue = ["Aman", "Riya"];
// // queue.push("Karan");
// // queue.unshift("Sarthak");
// // console.log(queue);

// // let serverdPerson = queue.shift();
// // let canclelledPerson= queue.pop();
// // console.log(queue)
// // console.log(serverdPerson)
// // console.log(canclelledPerson)

// //#region Q5 )
// // let topics = ["html", "css", " JavaScripts", "React", " Node js"];
// // topics.splice(2, 2);
// // console.log(topics);
// //#endregion

// //  Q6)

// // let roadmap = [ "Html ", "Css","React"];

// // roadmap.splice(2,0," Javscripts")
// // console.log(roadmap);
// // roadmap.splice(1,1,"typescripts")
// // console.log(roadmap)

// //#region Q7)

// // let prices = [499, 99, 1299, 299, 999];
// // let accending = [...prices].sort((a, b) => a - b);
// // console.log(accending);
// // let decending = [...prices].sort((a, b) => b - a);
// // console.log(decending);
// // console.log(prices);

// //#region Q8
// // let arr = [10, 20, 30, 40,50]
// //  var newArr = arr.slice(1,4)
// // console.log(newArr);[20,30,40]
// // console.log(arr) [10,20,30,40,50]
// //  let removed = arr.splice(1,3)
// // console.log(removed)
// //console.log(arr); [10,50];

// //#region Q9
// // let skills = ["Html", "css", "js", "React"];

// // let arr = skills.includes("js");
// // console.log(arr);
// // console.log (skills.includes('js'))

// // let arr2 = skills.indexOf("React");
// // console.log(skills.indexOf('React'));
// // console.log(arr2);

// // let arr3 = skills.indexOf("Node js");
// // console.log(arr3);
// // console.log(skills.indexOf("node js"))

// // console.log(skills.join("->"));

// //#region Q 10)

// // let marks = [ 45 ,67,89,32,76];
// // let student = marks.forEach(( elem ,idx)=>{
// //  console.log(` student ${idx + 1} : ${elem} `)
// // })
// // console.log(student);

// //#region
// //Q 11)

// // let prices = [ 100 ,250 ,500 ,1000];
// //  let addGst = prices.map((elem)=>{
// //   return elem * 1.18
// // })
// // console.log(addGst);

// //#region
// //Q12
// // let scores = [ 23,45,67,34,89,90,12]
// // let newScores = scores. filter((elem)=>elem >=40 )
// // console.log(newScores);

// // let new1 = scores.filter((elem)=> elem >= 80)
// // console.log(new1);

// //#region
// // Q13
// // let users = [
// //   {
// //     name: " Aman",
// //     age: 17,
// //   },
// //   {
// //     name: " riya",
// //     age: 19,
// //   },

// //   {
// //     name: "Karan ",
// //     age: 22,
// //   },
// // ];
// //   let newUSer = users.find((users)=>users.age>18)
// //   console.log(newUSer);

// //#region
// // Q14
// // let prices = [ 199, 499 , 799,1299,299]
// //  let newPrices = prices.findIndex((prices)=>prices>500)5000
// // console.log(newPrices);

// //#region

// //Q 15

// // let ages = [19, 22, 17, 24, 30];

// // console.log(ages.some((ages) => ages < 18));
// // console.log(ages.every((ages) => ages >= 18));
// // console.log(ages.every((ages) => ages > 0));

// //#region
// //reduce
// //Q 16

// // let cart =[ 499 , 1299 , 299 , 799];
// //  let NewCart = cart.reduce((acc , curr)=>{
// //       return acc+ curr;

// //  },0)
// //    console.log(NewCart);
// //   let total = NewCart - 500
// //   console.log( total)

// // let numbers  = [ 10,20,5 ,9 ,15]
// //  let max = numbers.reduce((acc , curr)=>{
// //       if(acc > curr){
// //         return acc
// //       }
// //     else {
// //       return curr
// //     }
// // },0)
// // console.log(max);
// // let numbers = [ 10 ,20 ,30,40 ,50];
// // let average = numbers.reduce ((acc,curr)=>{
// //     return  acc + curr
// // },0)/numbers .length

// // console.log(average);

// // let numbers = [ 10 ,15,25,35,40,45,50];
// //  let evenNum =numbers.reduce((acc , curr)=>{
// //  if(curr % 2 === 0)
// //  {
// //   acc.push(curr)
// //  }
// //  return  acc
// //  },[])

// //  console.log(evenNum)

// // let num = [ 2,3,4,5]
// // let mul = num.reduce(( acc , curr)=>{
// //      return acc * curr
// // },1)
// // console.log(mul);
// // let num = [ 10, 20, 10, 30, 20, 10, 40]
// // let count = num. reduce ((acc , curr)=>{
// //    if(curr === 10){
// //     return acc +1
// //    }
// //   else {
// //     return acc
// //   }
// // },0)
// // console.log(count);

// // filter method

// // let num  = [ 10,20,10,30, 10]

// // let count = num.filter((e)=>e === 10 )
// // console.log(count.length);

// //  let num =[ 45 , 12, 78 ,5 ,34 ,19]
// //  let mim = num. reduce((acc,curr)=>{
// //    if(acc<curr){
// //     return acc
// //    }
// //    else{
// //     return curr
// //    }
// //  },)
// // console.log(mim);

// // let num = [ 10,20,10,30,20,40,30]
// // let duplicate = num.reduce((acc , curr)=>{
// //   if(!acc.includes(curr)){
// //     acc.push(curr)
// //   }
// //   return acc
// // },[])
// // console.log(duplicate);

// // let user = [
// //   {
// //     name: "Abhi",
// //     salary: 25000,
// //   },
// //   {
// //     name: "tushar",
// //     salary: 30000,
// //   },
// //   {
// //     name: " chetan",
// //     salary: 20000,
// //   },
// //   {
// //     name: "dinesh",
// //     salary: 35000,
// //   },
// // ];
// //  let totalSalary = user.reduce((acc,curr)=>{
// //   return acc + curr.salary;
// // },0);
// // console.log(totalSalary);

// //#region
// //destructiring practice

// // let profile = ["Sarthak", 23, "Devloper", "Bhopal"];

// // let [ name ,age ,profession , city] = profile
// // console.log(name);
// // console.log(profession);
// // console.log(city);
// //#region
// //Q 17
// // let a = 12;
// // let b = 13;
// // let temp = a;
// // a = b;
// // b = temp;
// // console.log(a);
// // console.log(b);

// // let c = "frontend";
// // let d = " backend";
// // [c, d] = [d, c];
// // console.log(d);
// // console.log(c);

// //#region
// //Q18

// // let frontend = ["Html", "css", "Js"];
// // let backend = ["Node js", "Express"];
// // let frontendCopy = [...frontend];
// // frontendCopy.push("react");
// // let fullStack = [...frontend, ...backend];

// // console.log(frontendCopy);

// // console.log(fullStack);

// //#region
// //Q19 // shallow copy

// // let original = [[1,2],[3,4]]

// // let copy =[ ...original]
// //  copy[0].push(99)

// //  console.log( original);

// // console.log(copy);

// //#region
// //Q20

// // function average(...numbers){
// // let total= numbers.reduce((acc,curr)=>{
// //     return acc + curr;
// // },0)
// //      return total / numbers.length
// // }
// // console.log(average(10,20,30));
// // console.log(average(5,10,15,20));

// //#region
// //Q21

// // let matrix = [
// //   [10, 20, 30],
// //   [40, 50, 60],
// //   [70, 80, 90],
// // ];
// // console.log(matrix[1][1]);
// // console.log(matrix[2][2]);
// // for (let i = 0; i < matrix.length; i++) {
// //   for (let j = 0; j < matrix[i].length; j++) console.log(matrix[i][j]);
// // }
// //#region
// //Q22
// // let matrix = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9],
// // ];
// // let sum = 0;
// // for (let i = 0; i < matrix.length; i++) {
// //   for (let j = 0; j < matrix[i].length; j++) {
// //     sum = sum + matrix[i][j];
// //   }
// // }
// // console.log(sum);

// // let total = matrix.reduce((acc, curr) => {
// //   return (
// //     acc +
// //     curr.reduce((a, b) => {
// //       return a + b;
// //     }, 0)
// //   );
// // }, 0);
// // console.log(total);
// //#region
// //Q23

// // let arr1 = [ 1,2,3];
// // let arr2 = arr1; // refrence copy
// // let arr3 = [...arr1] //shallow copy
// // arr2.push(4) // chnages update in arr2 and arr1
// // arr3.push(5)// only changes in arr3

// // console.log(arr1);
// // console.log(arr2);
// // console.log(arr3);
// // console.log(arr1===arr2);
// // console.log(arr1===arr3);

// //#region
// // 24

// // function arrayaEqual(a,b){

// // }
// // console.log(arrayaEqual([1,2,3],[1,2,3,]));

// let scores = [72, 91, 38, 88, 45, 99, 67, 83, 29]; 

//  let passed = scores.filter((elem)=>{
//   return elem >= 40
//  })

// console.log(passed);

// let update = scores.map((elem)=>{
//   if(elem +5 >100){
//    return 100
//   }
//   else{
//      return elem + 5
//   }
// })
// console.log(update);

// let Sorts = update.sort((a,b)=>b-a)
// console.log(Sorts);

//  let tc= update.slice(0,3)
// console.log(tc);
