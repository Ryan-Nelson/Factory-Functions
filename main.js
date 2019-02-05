// // This is a factory function. It returns a new object every time.
// const createAmplifier = function (volume = 11, color = "Black") {
//     return {
//         "type": "Guitar Amplifier",
//         "maximumVolume": volume,
//         "caseColor": color
//     }
// }

// const marshallAmp = createAmplifier(9, "White")
// > { "type": "Guitar Amplifier", "maximumVolume": 9, "caseColor": "White" }

// const blackstarAmp = createAmplifier(10, "Gold")
// > { "type": "Guitar Amplifier", "maximumVolume": 10, "caseColor": "Gold" }
// //No.

// // Not a factory function. Primitive type returned.
// const add = function (first, second) {
//     return first + second
// }
// //Yes.

// // This is a factory function. It returns a new object every time.
// const createLocation = (name, address, type) => ({
//     "businessType": type,
//     "businessName": name,
//     "address": address
// })

// const kennel = createLocation("Bow Wow Kennels", "100 Infinity Way", "Animal Boarding")
// > { "businessType": "Animal Boarding", "businessName": "Bow Wow Kennels", "address": "100 Infinity Way" }
// //No.

// // Not a factory function. Primitive type returned.
// const isLegal = (activity, age) => age >= activity.minimumAge

// const socialActivity = {
//     activity: "Buy alcohol",
//     minimumAge: 21
// }

// const april = {
//     name: "April Atkinson",
//     age: 19
// }

// const canAprilDrink = isLegal(socialActivity, april.age)
// > false


// const metals = [
//     { metal: "Sterling Silver", ppo: 12.42 },
//     { metal: "14K Gold", ppo: 736.4 },
//     { metal: "24K Gold", ppo: 1258.9 },
//     { metal: "Platinum", ppo: 795.45 },
//     { metal: "Palladium", ppo: 1241.0 }
// ]

// const diamonds = [
//     { carets: 0.5, price: 405 },
//     { carets: 0.75, price: 782 },
//     { carets: 1, price: 1470 },
//     { carets: 1.5, price: 1997 },
//     { carets: 2, price: 3638 }
// ]

// const ringStyles = [
//     { style: "Classic", price: 500 },
//     { style: "Modern", price: 710 },
//     { style: "Vintage", price: 965 }
// ]


// {
//     style: "Modern",
//     carets: 1,
//     metal: "24K gold",
//     price: 3438.9
// }

// const createCustomRing = (style, carets, metal) => {
//     return {
//         style: style.style,
//         carets: carets.carets,
//         metal: metal.metal,
//         price: metal.price + style.price + carets.price
//     }
// }

// const newRingOrder = createCustomRing(style[1], carets[2], metals[2])
// // Then add order to customer's shopping cart


// Lightning Exercise 1: 
// Write a factory function that creates an object that represents a doctor. 
// The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

// const createDoctorFunction = (name, specialty, address) => ({
//     "doctorName": name,
//     "doctorSpecialty": specialty,
//     "doctorAddress": address
// })

// const newDoctor = createDoctorFunction("John Smith", "foot Doctor", "007 brick way")


// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. 
// The function should accept two arguments.

// Pet name
// Pet breed

// Invoke the factory function 3 times and place each animal in an array stored 
// in a variable named BowWowKennels

// const createPetFunction = (name, breed) => ({
//     "petName": name,
//     "petBreed": breed

// })

// const newDog1 = createPetFunction("Jordan", "Golden Retever Mix")
// const newDog2 = createPetFunction("Tobi", "Sheperd Mix")
// const newDog3 = createPetFunction("Kemo", "Husky")


// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). 
// Then invoke the appropriate function for each of the following artists and 
// place the resulting object in the corresponding label array.

let jumpStopRecords = []
let chattenRecords = []
let polarRecords = []


const createArtist = (artistName, artistAge, artistGenre) => ({
    "artistName": artistName,
    "artistAge": artistAge,
    "artistGenre": artistGenre
})

const checkTheGenre = (artistGenre, recordCompany) => {
    if (artistGenre === "Funk" || artistGenre === "Rap")
        jumpStopRecords.push(recordCompany)
    else if (artistGenre === "Country" || artistGenre === "Bluegrass")
        chattenRecords.push(recordCompany)
    else
        polarRecords.push(recordCompany)
}


checkTheGenre("Country", createArtist("Bruce Atikins", 23, "Country"))
checkTheGenre("Pop", createArtist("Jensen Brown", 20, "Pop"))
checkTheGenre("Funk", createArtist("Dre Funkz", 25, "Funk"))
checkTheGenre("Rap", createArtist("Dusta Grimes", 21, "Rap"))
checkTheGenre("Bluegrass", createArtist("Bartholomew Danielson", 23))
checkTheGenre("Country", createArtist("Avilee Dallas", 19, "Country"))
checkTheGenre("Pop", createArtist("Austin Kinkaid", 22, "Pop"))
checkTheGenre("Rap", createArtist("Loyoncé Branis", 27, "Rap"))


console.table(jumpStopRecords)
console.table(chattenRecords)
console.table(polarRecords)