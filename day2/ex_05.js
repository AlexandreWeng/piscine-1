// Write your function here ...
function getBasketContent()
{
let fruits = [
    "strawberry",
    "strawberry",
    "strawberry",
    "apple",
    "apple",
    "lime",
    "lime",
    "peach",
    "pear",
    "pear"
];
console.log(fruits.length+ " fruit(s) selected") ;
return fruits;

}


// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
	const fruits = getBasketContent()
	showMyBasket(fruits)
}
