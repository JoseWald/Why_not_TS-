"use strict";
//variable declaration
let myName = "Jose";
let myAge = 19;
let isStudent = true;
let value = "string"; //the warning message goes away 
value = 1;
value = true;
let favFood = "rice";
let person = {
    name: "Jose",
    age: 18,
    isStudent: true
};
let Jean = {
    name: "Jose",
    age: 18,
    isStudent: true,
    adress: {
        street: "43",
        city: "Antananarivo",
        country: "Madagascars"
    }
};
function displayInfo(person) {
    console.log(`${person.name} lives at ${person.adress.street} of ${person.adress.city} ${person.adress.country}`);
}
displayInfo(Jean);
//Array declarations
let personList = [Jean];
let people = [Jean];
//Literal types
const myName2 = "Wald";
let gender = "female";
//Function
function getInfo(info) {
    const personFound = personList.find(pers => {
        if (typeof info === "number") {
            pers.age == info;
        }
        else if (typeof info === "string") {
            pers.name.toLowerCase == info.toLowerCase;
        }
    });
    if (personFound) {
        return personFound;
    }
    else {
        return false;
    }
}
let Joe = {
    name: 'Joe',
    id: 1985
};
let Bob = {
    name: 'Bob',
    id: 2313,
    favSubject: "Mathematics"
};
let StudentName = {
    name: "Jean"
};
let Dolph = {
    name: "Dolph",
    favSubject: "Photography"
};
let Gogo = {
    name: "Gogo",
};
//Generics
const item = ["fruits", "vegetable", "junk food"];
//to avoid using any that basically turn off TypeScript ,we use generics
function getLastItem(array) {
    return array[array.length - 1];
}
console.log("kod");
console.log(getLastItem(item));
