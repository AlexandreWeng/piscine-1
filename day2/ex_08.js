fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];


function whoisthatpokemon(poke) {
    if (poke === -1) {
        return fruits[fruits.length - 1];
    }
    
    if (poke >= 0 && poke < fruits.length) {
        return fruits[poke];
    }
    return null;
}



function whatisthatpokemon(poke){ 
if (poke === "Blackberries"){displayResult(0)}
if (poke === "Apples"){displayResult(1)}
if (poke === "Mango"){displayResult(2)}
if (poke === "Mango"){displayResult(3)}
if (poke === "Peaches"){displayResult(4)}
if (poke === "Kiwi"){displayResult(5)}
}


let ind=getFruit(3)
displayResult(ind)

function getFruit(wtfisthat) {
    if (typeof wtfisthat === "number") {
    let result = whoisthatpokemon(wtfisthat)
    displayResult(result) 
return whoisthatpokemon(wtfisthat)
    }
    if (typeof wtfisthat === "string") {
        return whatisthatpokemon(wtfisthat)
        } else {
            return null; 
        }
    }
