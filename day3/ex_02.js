function findHousing(housingToFind, housingList) {
let tab = 0;
while(tab < housingList.length) {
if(housingList[tab].toLowerCase() === housingToFind.toLowerCase()){
return [tab+1, housingList[tab]];
}
tab++;
}
return null;
}

displayResult(findHousing("Igloo", ["Flat", "House", "Hut", "House", "Igloo"]));
