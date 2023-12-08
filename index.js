// const display=(name,age)=>{
//     return {
//      name,
//      age
//     }
// }
// let bioData=display("Pinaky",23);

// console.log(bioData);


// const object1={
//     name:"Prottoy",
//     age:23,
//     'display1 name'(){
//         return `I am object function`
//     }
// }

// console.log(object1.name);
// console.log(object1.age);
// console.log(object1['display1 name']());

var text="";
const arrayName=["Pinaky","Mehedi","Sakib"];
arrayName.forEach(myFunction);
console.log(arrayName);
function myFunction(value){
//   text= `${index} : ${value}`;
    console.log(value);
}
const numbers=[1,2,3,4,5];
const squarNumbers=[];

numbers.forEach(function(value){
   squarNumbers.push(value*value);
});
console.log(squarNumbers);
