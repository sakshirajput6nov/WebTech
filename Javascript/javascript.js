// internal js script tag in body tag at last 
// can use script tag in head tag but this load js then html 
// no specific order of internal r external js first come first serve
//<script src="./javascript.js"></script>

//comments by // 

//!TYPES OF PRINTING STATEMENTS
//1)console.log() //shortcut is clg
//2)documents.write()<-------deprecate  give no space btw two prints 
//3)document.writeln()<...deprecate. give space btw two prints 
//ln add sapce between words
// console.log("External js");
//!tokens:smallest unit of any programming language
//there are 4 types of tokens 
//1).keywords : reserved words ,should be lowerCase ex:for,if,class etc.
//2).identifiers:name given to variable,methods,class,function.
//3).literals:values that are stored in a variable
//4).operators: symbols used to perform some specific task
//5) comment:/* */multiline // singleline

/*
Data types: which type of data we store in a variable
there are two types data types 
1).primitive :(immutable | call by value) 
we have 7 types
nummber
string "" ''
boolean
undefined
null
bigint //range (-2^53 -1 to 2^53-1)That is actually the safe integer range for Number, not BigInt.
symbol
2).non prirmitive:(mutable | call by reference) 
3 types
Arrays
Object
Function
 */
//! Mutable vs immutable
// var arr=[10,20,30];//mutable arr stores reeference address of [10,20,30]
// arr[0]=100;
// console.log(arr);// give [100,20,30]
// var str="hello";//immutable str stores hello 
// str[0]="x";
// console.log(str);// do not change give hello not xello



//there are 5 types of case
// camel:userName
//pascle:UserName
//snake:user_name
// kabab case:user-name
// upper snake : USER_NAME

// var a1 =8.8 // var LOOSELY TYPE Lang. where no specific data type told in it 
// console.log(a1,typeof a1); //8.8 number

// var a2='Hello'
// console.log(a2, typeof a2);

// var a3=true;
// console.log(a3,typeof a3);

// var a4;
// console.log(a4,typeof a4);//undefined
// //undefined is a primitive data type,without initialisaation variable declared
//  but  not defined is an error with no variable declaration

// var a5=null;
// intentionally put to keep variable empty 
// console.log(a5,typeof a5); //null object
// //why null is having object as data type
// js is OOP's and oject based lang. where js treat everything in it as object
// //diff between undefined and null
// null object type and undefined id undefined type 

// //bigint :(-2^53-1 to 2^53-1) BigInt can represent integers beyond this range
// var a6=999999999999999999999999999999999999;//it will show an exponential value
// var a6=99999999999999999999999999999999999n;//by adding n type casting gives in bigint and read accurately 
// console.log(a6)

// Symbol means put data unique
// var s1=Symbol("Hello");
// var s2=Symbol("Hello");
// console.log(s1)
// console.log(s2, typeof s2)
// console.log(s1==s2)//false because symbol

// console.log(10=='10')//true check only values 
// console.log(10==='10')//false,strict check value and typeOf

// /******************************************/
// //mutable console is object
// console.log()//console is object , log is method 

//! types of variable
//two types of variable local and global

// var
// let
// const

//! difference between  var , let and const
//var example
//  var a;
//  console.log(a);
//   a=10;
//   console.log(a);
//   var b=20;
//   console.log(b);
//   var a;
//   console.log(a);
//    a=100;
//    console.log(a);
//    var b=200

// console.log(b);
//                                  //!var                 //!let            //!const
//declare                            +1                      +1                   -1
// initialize                        +1                      +1                   -1
//declare & initialize               +1                      +1                   +1
// re-declare                        +1                      -1                   -1
//re-initialize                      +1                      +1                   -1
// //re-declare and re-initialize       +1                      -1                   -1

// let x;
// console.log(x);
// x=10;
// console.log(x);
// x=100;
// console.log(x);
// // let x=12;
// console.log(x)//error

//! const example
// const z=100;
// console.log(z);
//! hoisting:Hoisting is JavaScript's default behavior of moving all 
// declarations to the top of the current scope (to the top of the current
//  script or the current function). Variables defined with let and const are hoisted to the top of the block, but not initialized.

//!temporal dead zone
//the period from start odf a block until let / const variable is initialized .During this period accessing variable causes a ReferenceError
// no TDZ in var
//eg
// console.log(a)
// var a=10;

//TDZ in let ,const
// console.log(x)
// let x=12;
// const x=12;

//! var is known as function scope- do not create separate scope for var 
// function test(){
//     var x=10;

//     if(true){
//         var x=12;
//         console.log(x);//12
//     }
//     console.log(x);//12
// }
// test();

// let,const is block scoped 
// function test(){
//     let x=10;

//     if(true){
//         let x=12;
//         console.log(x);//12
//     }
//     console.log(x);//10
// }
// test();


// console.log(m)
// var m=10;
// console.log(m);
// //  console.log(l);
// // let l=20;
// // console.log(l); //!error
// for(let i=0;i<5;i++){
//    console.log("hii",i);
// }
//console.log("hii",i);// give error var don't

// //scope 

// /*!local variable :var:(function/local scope) and local scope (const and let) 
// //! Global variable: var:(global scope) and script scope (var and let) 
// var||let||const

// */
// var a1=10;//global variable - global scope
// let a2=20; //global variable - script scope <---TDZ   
// const a3 = 30; //global -script scope<--- TDz
// console.log(a1,a2,a3);
// if(100>10){
//    var b1=1000;//global variable-global scope
//    let b2=200;//local variable-block scope
//    const b3=300;// local variable-block scope
// }
// console.log(b1);
// function demo(){
//    var c1=1000;//local variable -local scope||function scoped
//    let c2=2000; //local variable -local scope
//    const c3=3000;//local variable -local scope;
// } 
// console.log(demo());




//!functions
//  greet() //due to hoisting function declaration avvaliable throughout its scope ,call function before it appears in code
// function declaration 
// function greet(){
//    console.log("welcome");
// }
// greet();


//!Named Function: function which has name
//note:-function hoisting is only possible in named function \
//!method of dry run in js
/** //!global execution context>=gec
 *  !declaration phase                                         execution phase
 * 
 */
// console.log("start");
// console.log(a);
// student();
// var a=10;
// console.log(10);
// function student(){
//    let b=20;
//    console.log(b);
// }
// student();
// console.log(a);
// console.log("end");

//! anonymous function : dunction without name
// function (){

// }
//eg
// var greet=function(){
//     return 2;
// }
// console.log(greet);

//! funstion expression :used to call anonymous function
// let f1=10;
// console.log(f1);
// let f2=function (){
//    console.log("hii");
// };
// //function expression
// console.log(f2); 

// //! 4) function with argument and parameters
// // undefined + undefined = NaN

// // Missing arguments are assigned undefined
// function sum(n1,n2,...n){//...n used for rest parameter array must be last parameter  in parameter list 
//    console.log(arguments,Array.isArray(arguments))// arguments object (array-like, not a true Array)
//    let n3=n1+n2;
//    console.log(n);
//    console.log(n3);
// }
// sum(12,12,3,4);
// //where is going extra argument

// //GEC padhna h 

// // closure is a temporary which is created whenever chilkd functin tries to access parent function property
// //5)nested function
// function Parent(){
//    let money=50000;
//    console.log(money);
//    function Child(){
//       let saving=5000;
//       console.log(saving);
//       console.log(saving,money);// due to closure,not inheritence but by closure(a temporary space created whe use parent property in child function) when child function call then parent function data stored in closure 

//    }
//    Child();
// }
// Parent();
// //! 6)  return type function
// function sum(n1=0,n2=0){
//    let result=n1+n2
//    console.log(result);
//    return result;
// }
// // let Result1=sum;// to copy function
// let Result=sum(5,10);
// console.log(Result);


// //! 7) higher order function (hof) condition are-
// // a function should return another function or 
// function counter(){// higher order function 
//    let count=0;
//    function child(){
//       count++;
//       console.log("count is",count);

//    }
//    return child;

// }
// let c1=counter()
// c1()
// c1()
// c1()
// //i.e. data hiding 

// // a function should accept another function as argument 

// //array.forEach(function(){})
// // forEach higher order 
// //function(){} is callback
// // callback - a function which passes as an argument 
// ////////
// // function calculate(x){

// // }
// // calculate(function(){});
// ///////

// //! 8 Immediately invoked function expression (IIFE)
// // ek baar call ho or kaam kr k khtm ho jaye 
// // (function declare)(function call)
// // kuch issue h M
// // (function(){console.log("Immediately invoked function expressio")})();

// //! 9)arrow function - es6 --> shorter syntax
// const f=()=>{
//    console.log("arrow function");
// };
// f();//fn calll
// console.log(f);

// const g= x =>{
//    console.log("arrow function",x);
// }
// g(10);

// const h=(x,y) =>{
//    console.log("arrow function",x,y);
// }
// h(10,20);

// const i= x =>console.log("arrow function",x);
// i(10);

// //explicit return // {} must be used to return 
// const f4=(n1=0,n2=0)=>{
//    return n1+n2;
// };
// console.log(f4(7,8));

// // implicit return 
// const f5=(n1=0,n2=0)=>n1+n2
// console.log(f5(7));

// let obj={firstname:"sakshi"};
// const f6=()=>({firstname:"sakshi"});
// console.log(f6);
// console.log(f6());

//! OBJECTS{}
//combination of key and value is a property of an object
//create object 
// const obj1 = { name: "sakshi", course: "MCA", section: "D", rollNo: 1234567890 };
// console.log(obj1)

// // obj property read
// console.log(obj1.name)
// console.log(obj1.rollNo)

// // obj property update
// obj1.name="ram"
// console.log(obj1.name)

// // obj add new key or existing key update
// obj1.name="rashi"//update
// console.log(obj1.name)
// obj1.lastName="Kapoor"//add
// console.log(obj1)

// //delete key 
// delete obj1.section
// console.log(obj1)

// //these aare object CRUD operations - create , read, update, delete 
// // loop over an object
// for (let i in obj1){
//    //console.log(i,obj1.i);// give values undefined 
//    console.log(i,obj1[i]);// 
// }

// // iterate array using for loop
// let arr=[10,20,30];
// for(let i=0;i<arr.length;i++){
//    console.log(i,arr[i]);
// }

// // for in // index
// for(let i in arr){
//    console.log(i);
// }

// //for of // element 
// for(let i of arr){
//    console.log(i);
// }

// console.log(obj1);
// let n="name";
// // console.log(obj1.n);//undefined
// console.log(obj1[n]);

// //! nested Object 
// let employee={fullname:{firstName:"sakshi",lastName:"rajput"},age:11,address:{city:"Noida",state:"uttar pradesh",pin:201301,coordinates:{lat:23456,long:12345}}};
// console.log(employee);
// //access value of nested object 
// console.log(employee.address.coordinates.long);
// console.log(employee.fullname.lastName);

// //! destructuring 
// let user={
//    fname:"John",lname:"James",age:20
// }
// let{age,fname:firstname,lname,salary="NA"}=user;//default value salary="NA" // aliasing fname:firstname
// console.log(age,firstname)
// console.log(age,firstname,lname)
// //console.log(age,fname,lname,salary);// error undefined
// console.log(age,firstname,lname,salary)// give default value 

///////////////////////////////////////

//! ARRAYS :-
// let arr1 = [10, 20, 30, 40, 50];
// //           0   1   2   3   4
// console.log(arr1);
// console.log(arr1.length); // 5 <-- is a property not method

//! ARRAY METHODS
// let arr1 = [10, 20, 30, 40, 50];
// console.log(arr1); // [10, 20, 30, 40, 50]

//! push() : adds element at the last of an array
// arr1.push(60, 70, 80);//can add one or multiple elements using push().
// console.log(arr1); // [10, 20, 30, 40, 50, 60, 70, 80]

//! pop() : removes element from last of an array
// arr1.pop();// no argument in it ignore args
// console.log(arr1); // [10, 20, 30, 40, 50, 60, 70]

//! unshift() : adds element at the first of an array
// arr1.unshift(100, 200);
// console.log(arr1); // [100, 200, 10, 20, 30, 40, 50, 60, 70]

//! shift() : removes element from front of an array
// arr1.shift();// no arg arr1.shift(10); ignore args
// console.log(arr1); // [200, 10, 20, 30, 40, 50, 60, 70]

//! splice(position, deleteCount , newElements)// position - index;deleteCount - no. of elements delete; newElements - elements you want to insert
// let arr2 = [100, 200, 300, 400, 500];

//!-- ADD To add without deleting:
// arr2.splice(2, 0, 250);
// console.log(arr2); // [100, 200, 250, 300, 400, 500];

//!-- DELETE
// arr2.splice(1, 3);
// console.log(arr2); // [100, 500]

//!-- DELETE AND ADD
// arr2.splice(1, 2, "HelloWorld");
// console.log(arr2); // [100, 'HelloWorld', 400, 500]

// SLICE slice() does NOT change the original array.
//! slice(startIndex , endIndex)
// slice always ingores endIndex i.e from startIndex  to  endIndex-1

// //          -4   -3   -2   -1//negative indexing.
// let arr3 = [100, 200, 300, 400];

// let val1 = arr3.slice(1, 3);
// console.log(val1); // [200,300]

// let val2 = arr3.slice(-3, -1);
// console.log(val2); // [200,300]

// let val3 = arr3.slice(-3, 3);
// console.log(val3); // [200,300]

//////////////////////////

// let arr4 = [10, 20, 30, 40, 50];

// //! forEach(()=>{}) : returns undefined
// let res1 = arr4.forEach((ele, idx, arr) => {
//   // console.log(ele);
//   return ele + 5;
// });
// console.log("forEach --->", res1);
// //does not return an array.
// //The return only returns from that individual callback execution. forEach() itself still returns undefined.
// // iterate an array 
// arr4.forEach((ele) => {
//     console.log( ele + 5);
// });

// //! map(()=>{}) : returns new array
// //map() is used when you want to transform every element and get a new array.
// let res2 = arr4.map((ele, idx, arr) => {
//   // console.log(ele);
//   return ele + 5;
// });
// console.log("map ---->", res2);

// //! filter(()=>{}) : returns new filtered array
// //filter() is used when you want to select elements based on a condition.
// //filter() returns a new array containing all elements that satisfy the condition.
// let res3 = arr4.filter((ele, idx, arr) => {
//   return ele > 30;
// });
// console.log("filter ---->", res3);

// //! find(()=>{}) : returns single value which satisfy the condition
// // find() is similar to filter(), but there is a very important difference.Gives the first matching element then stop searching but in filter all matching element
// let res4 = arr4.find((ele, idx, arr) => {
//   return ele > 30;
// });
// console.log("find ---->", res4);

// //! findIndex(()=>{})
//    //findIndex() is almost the same as find().
//    // But instead of returning the element, it returns the index of the first matching element.
// let res5 = arr4.findIndex((ele, idx, arr) => {
//   return ele > 30;
// });
// console.log("find ---->", res5);

////////////////////////////rehta h content 
//Promise
//const API="https://dummyjson.com/todos";
// let p1=fetch(API);// return promise
// console.log(p1);

// // p1.then((resp)=>{
// //   // console.log(resp);
// //   console.log(resp.json());
// // });

// // p1.catch((err)=>{
// //   console.log(err)
// // });

// p1.then((resp)=>{
//   let p2=resp.json();//return promise
//   console.log(p2);// gives data 
//   p2.then((data)=>console.log(data.todos));// to take out data
//   p2.catch((err)=>console.log(err));
// });
// p1.catch((err)=>{
//   console.log(err)
// });

////!ASYNC AWAIT uses with function 
// async function fetchTodosData(){
//   try{
//   let resp= await fetch("https://dummyjson.com/todos");
//   let data=resp.json();
//   console.log(data);
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// fetchTodosData();
//////////////////////////////////
// //!timer functions
// //1 set interval (callback_function,intervalTime)
// console.log("start")
// let id=setInterval(()=>{
//   console.log("hii sakshi");
// },1000);// async code 
// // 2 set timeout(callback_function,delay)
// setTimeout(()=>{
//   console.log("byee");
//   clearInterval(id)
// },8000);// async code 
// console.log("end")
// /*start
//  end
// 8 hii sakshi
// bye   e*/
/////////////////////////////////////
// ////!Event Loop - a bgd mechanism that allows js to perform long running tasks(fetching data and setTimeout )
// ////js by default syncronous 
// //// have callstack ,event loop(check callstack empty or not),
// ////  web API(async code is here stored and start count down), and microtask(higher priority i.e promises ) queue and macrotask/task/callback queue like setTimeout,etc
// console.log("start");
// setTimeout(function T1(){
//   console.log("T1!");
// },5000);
// Promise.resolve().then(function P1(){
//   console.log("promise p1");
// })
// console.log("hiii");
// setTimeout(function T2(){
//   console.log("T2!");
// },2000);
// console.log("end");

// // start
// // hiii
// // end
// // promise p1
// // T2!
// // T1!