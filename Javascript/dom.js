console.log("DOM");
// // DOM?DOM selectors? diff.?events in DOM,event propagation,DOM manupulation
// //////////////////DATE 19 AUG 2026 ( DOM )
// // DOM document object model
// //         document
// //             |
// //            HTML
// //         |                |
// //       head            body
// // (meta,title,link)    (main(h1,div)script)
// //DOM tree

// // DOM? 
// // it is a tree like representation of our html document.
// // here each tag is known as Node.eg. head,body tag
// // Dom is responsible for making our web page interactive angd dynamic
// console.log(document)
// // DOMselectors:- 5 types:-
// //1 document.getElementById("")
// console.log(document.getElementById("box1"))//<section id="box1">target me using id </section>
// console.log(document.getElementById("box"))// null
// let ele=document.getElementById("box1");
// ele.style.backgroundColor="yellow";// change bgd color 

// //2 document.getElementsByClassName()
// let containers=document.getElementsByClassName("container");
// console.log(containers);//HTMLCollection(3) [article.container, article.container, article.container]
// // HTMLCollection is an impure array
// console.log(Array.isArray(containers));// to check an array is pure or impure // give false

// //3 document.getElementsByTagName()
// let tg=document.getElementsByTagName("div");
// console.log(tg);//HTMLCollection(3) [div, div, div]//HTMLCollection(3) [div.bb, div#q1, div, q1: div#q1]
// console.log(Array.isArray(tg));// to check an array is pure or impure // give false

// //4 document.querySelector()
// // return single element ;can pass class,id,tagname 

// //////////////
// // let tc=document.querySelector("#box1");
// // console.log(tc);

// // let qs1=document.querySelector(".container")//first one same goes for tag name 
// // console.log(qs1);
// // let qs2=document.querySelector("div,.container,#box1")
// // console.log(qs2);
// ////////////////
// // priority  : id > class > tagname 

// //5 document.querySelectorAll() 
// let val=document.querySelectorAll("div");//NodeList(3) [div, div, div]
// console.log(val);
// // NodeList is an impure array 
// console.log(Array.isArray(val));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ////DOM MANIPULATION 
// //createElement to create tag in html
// let mainTag=document.querySelector("#main-container");// yaha error aa raha h 
// console.log(mainTag);
// let h3Tag=document. createElement("h3")//<h3></h3>
// let pTag=document. createElement("p")
// const aTag=document.createElement("a");
// aTag.href="https://www.goggle.com";
// aTag.target="_blank";
// console.log(h3Tag);

// //textContent to add content 
// h3Tag.textContent="hello people";//<h3>hello people</h3>// put everything as a text 
// pTag.innerHTML="p tag?  <h1>bhbb</h1> ";
// aTag.textContent="Google";
// console.log( pTag)
// console.log( aTag)
// mainTag.append(h3Tag,pTag,aTag)// page pr data dalne k liye 

//////////////////////////////////////////////////////////date 20Aug 2026
//!Events :Actionsperformed by the user
// Eg. - click,scroll,dblclick,load,mouseenter,mouseout,movemouse....

//!2 ways to apply event 
//1) using event attribute 
//2) using addEventListener() method <-------Recommended

//1) using event attribute 
function singleClick(){
    console.log("btn clicked once")
}
function doubleClick(){
    console.log("btn clicked twice")
}
//singleClick() call by html files

function hoverBtn(){
    console.log("hiii");
}

// function downbtn(){
//     console.log("down");
// }

//2) using addEventListener() method 

const h3Tag=document.createElement("h3");//html
h3Tag.textContent="click here";//html
h3Tag.addEventListener("click",()=>{
    console.log("hello");
    h3Tag.style.backgroundColor="blue";// css
    h3Tag.style.color="white";//css

})
document.body.append(h3Tag);
const box=document.querySelector("#box");
console.log(box);// in console give html of div

// box.addEventListener("click",()=>{
//     console.log("I Am DIV");
//     box.style.color="aqua";
//     box.style.backgroundColor="yellow";
// })

const t=document.querySelectorAll("section");
console.log(t);
t.forEach((x)=>{
    x.addEventListener("mouseenter",()=>{
        x.style.backgroundColor=x.textContent;
    })
    x.addEventListener("mouseout",()=>{
        x.style.backgroundColor="white";
    })
})
//set up 
// start - search power shell - run as administrator- yes - terminal type hoga -   Get-ExecutionPolicy  - remote signed correct unrestricted right 
// if have restricted - so type 
//Set-ExecutionPolicy RemoteSigned  then enter
//Y then enter
//Get-ExecutionPolicy
// now changed 
// clone kr k lekr aana h 
//revise promises 

