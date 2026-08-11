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
let f1=10;
console.log(f1);
let f2=function (){
   console.log("hii");
};
//function expression
console.log(f2); 

//! 4) function with argument and parameters
// undefined + undefined = NaN

// Missing arguments are assigned undefined
function sum(n1,n2,...n){//...n used for rest parameter array must be last parameter  in parameter list 
   console.log(arguments,Array.isArray(arguments))// arguments object (array-like, not a true Array)
   let n3=n1+n2;
   console.log(n);
   console.log(n3);
}
sum(12,12,3,4);
//where is going extra argument

//GEC padhna h 

// closure is a temporary which is created whenever chilkd functin tries to access parent function property
//5)nested function
function Parent(){
   let money=50000;
   console.log(money);
   function Child(){
      let saving=5000;
      console.log(saving);
      console.log(saving,money);// due to closure,not inheritence but by closure(a temporary space created whe use parent property in child function) when child function call then parent function data stored in closure 
   
   }
   Child();
}
Parent();
//! 6)  return type function
function sum(n1=0,n2=0){
   let result=n1+n2
   console.log(result);
   return result;
}
// let Result1=sum;// to copy function
let Result=sum(5,10);
console.log(Result);


//! 7) higher order function (hof) condition are-
// a function should return another function or 
function counter(){// higher order function 
   let count=0;
   function child(){
      count++;
      console.log("count is",count);
      
   }
   return child;
   
}
let c1=counter()
c1()
c1()
c1()
//i.e. data hiding 

// a function should accept another function as argument 

//array.forEach(function(){})
// forEach higher order 
//function(){} is callback
// callback - a function which passes as an argument 
function calculate(x){

}
calculate(function(){})