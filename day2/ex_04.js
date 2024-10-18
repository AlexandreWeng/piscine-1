// Your code here...
let a= 2
let b= 4
let action = "sub"

function calculator( ){
if (action ===('add')){
return addition(a, b)
}
else if (action === ("sub"))
return substracthon(a, b)
}

function addition (){
return a + b
}

function substracthon(){
return a - b
}
displayResult(calculator)



// DO NOT TOUCH - This line will call calculator and display the result for you
if (typeof calculator === "function" && typeof a === "number" &&
		typeof b === "number" && typeof action === "string") {
	displayResult(calculator, a, b, action);
} else {
	console.error("Missing/bad variables or calculator function");
}
