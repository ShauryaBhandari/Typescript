var character = 'Shaurya';
var age = 30;
console.log(character);
//character = 30;
//character = "Hrushi";
// TS automatically infers type from the value you provide -> no explicit declaration
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
// typecheck during development before it is compiled into JS
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(10));
