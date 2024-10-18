function addHousing(housingList, newHouse, quantity) {
if (housingList.has(newHouse)) {
let now = housingList.get(newHouse)
housingList.set(newHouse, now + quantity)
} else {
housingList.set(newHouse, quantity)
}
}

let housingList = new Map();
addHousing(housingList, "Flat", 2)
addHousing(housingList, "Log", 3)
addHousing(housingList, "Flat", 3)
addHousing(housingList, "Hutch", 2)
