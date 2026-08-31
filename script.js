// function kuchDerBadhalunga(fn) {
//   setTimeout(fn ,Math.floor(Math.random()*5)*1000);

// }
// kuchDerBadhalunga(function(){
//   console.log(" abhiiii")
// });
// function abcd(fn) {
//   fn(function (fn2) {
//     console.log("tushar");
//     fn2(function (fn4) {
//       console.log("sudip");
//       fn4(function (fn6) {
//         console.log("raksika");
//         fn6((fn8) => {
//           console.log("hina");
//           fn8((fn10) => {
//             console.log("supo maharaj");
//             fn10();
//           });
//         });
//       });
//     });
//   });
// }
// abcd(function (fn1) {
//   console.log("abhi");
//   fn1(function (fn3) {
//     console.log("sahil");
//     fn3(function (fn5) {
//       console.log("mansi");
//       fn5(function (fn7) {
//         console.log("dipesh");
//         fn7((f9) => {
//           console.log("minal");
//           f9(() => {
//             console.log("bhoel baba");
//           });
//         });
//       });
//     });
//   });
// });


//call back function 


// function profileLekarAao(name ,cb){
//  setTimeout(()=>{
//    cb(name)
//  },2000);
// }

// profileLekarAao("abhi",(data)=>{
// console.log(data)
// })

// let pr = new Promise(function (res, rej) {
//   setTimeout(() => {
//     let rn = Math.floor(Math.random() * 10);
//     if (rn >= 5) res("resloved with " + rn);
//     else rej("reject with " + rn);
//   }, 1000);
// });

  // let pr = new Promise(( res, rej)=>{
  //  setTimeout(()=>{
  //   let rn = Math.floor(Math.random()*10);
  //  if(rn>5)res("resloved with " + rn);
  //   else rej(" reject with "+ rn);
  //  },1000);
  // });



// pr.then(function(val){
//   console.log(val);
  
// })
// pr.catch(function(val){
//   console.log(val)
// })
//  async function chalo(){
//   try{
//     let val = await pr;
//   console.log(val);
  
//   }
//   catch(err){
//     console.log(err)
//   }

// }
// chalo();

// let pr = new Promise( (res,rej)=>{
//   let a=20;
//   let b= 10;
//   let sum = a+b;
//   if(sum>=50)res("reslove " + sum)
//     else rej ('reject ' + sum)
// });

// // pr.then((val)=>{
// // console.log(val);

// // })
// // pr.catch((val)=>{
// //   console.log(val)
// // })

//  async function kuchKaro(){
//   try{
//     let val = await pr ;
//     console.log(val);
    
//   }
//   catch(err){
//     console.log(err)
//   }
// }
// kuchKaro();


////  

// es6 with paramitter

// var a= para =>{
// console.log(par);

// }
//  a(12)


// let number = Number (prompt(" enter a number between 1 to 9"))
//  let pr = new Promise((res, rej )=>{
//     if(number>=5) res(" resloved with " + number )
//       else rej ("reject with " + number)
//  })
 
// //  pr.then((val)=>{
// //   console.log(val);
  
// //  })
// //  pr.catch((val)=>{
// //   console.log(val)
// //  })

// let rn =  async()=>{
//    try{
//     let val = await pr
//    console.log(val);
   
//    }
//    catch(err){
//     console.log(err)
//    }
   
// }
//  rn();


let ans = new Promise( (res , rej)=>{
  return  res(" Abhi code Parctice kar ")
})

 let p2 =ans.then((data)=>{
  console.log(data);
  return new Promise((res, rej)=>{
     return res('tuze topic perffect hotil')
    
  })

})

  let p3= p2.then((data)=>{
  console.log(data)
  return new Promise((res,rej)=>{
    return res("tula soft devloper chi job bhetel ")
  })
})
 let p4 = p3.then((data)=>{
  console.log(data)
  return new Promise((res ,rej)=>{
    return res ('Abhi tuzhi life set hoil')
  })
})

 let p5 = p4.then((data)=>{
console.log(data)
return new Promise(( res, rej)=>{
  return res("tu people sathi kahi creative banvu shktos lokanchi help kru shktos tuza software chya knowldge vr")
})
})
p5.then((data)=>{
  console.log(data)
})