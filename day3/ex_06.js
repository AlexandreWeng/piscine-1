function findAddreses(yes) {

addresses = [["45 avenue des tulipes", "92130 Issy-les-Moulineaux"], ["95 avenue parmentier", "75011 Paris"], ["24 Rue Pasteur", "92400 Courbevoie"], ["Champ de Mars, 5 Av. Anatole France", "75007 Paris"], ["Pl. Louis-Armand", "75571 Paris"]];

addresses.forEach(address => {
const entier = address[0] + ', ' + address[1]

if (entier.includes(yes)) {
console.log(entier)
}
})
}

findAddreses("Paris")
