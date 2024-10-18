let hamSandwiches = 0;
let tunaSandwiches = 0;
let vegSandwiches = 0;

while (breadCount >= 2 && hamCount >= 1) {
    hamSandwiches++;
    breadCount -= 2;
    hamCount -= 1;
}
while (breadCount >= 2 && tunaCount >= 1 && saladCount >= 2) {
    tunaSandwiches++;
    breadCount -= 2;
    tunaCount -= 1;
    saladCount -= 2;
}
while (breadCount >= 2 && saladCount >= 1 && tomatoCount >= 2) {
    vegSandwiches++;
    breadCount -= 2;
    saladCount -= 1;
    tomatoCount -= 2;
}
displayThisText("Ham sandwiches: " + hamSandwiches);
displayThisText("Tuna sandwiches: " + tunaSandwiches);
displayThisText("Vegetarian sandwiches: " + vegSandwiches);

displayIngredients(breadCount, hamCount, tunaCount, tomatoCount, saladCount);
