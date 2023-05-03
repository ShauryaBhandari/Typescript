let character = 'Shaurya';
let age = 30;
console.log(character);

//character = 30;
//character = "Hrushi";
// TS automatically infers type from the value you provide -> no explicit declaration

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});

// typecheck during development before it is compiled into JS
const circ = (diameter: number)=>{
  return diameter * Math.PI;
}
console.log(circ(10));