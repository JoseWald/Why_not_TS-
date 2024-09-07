//variable declaration
var myName = "Jose";
var myAge = 19;
var isStudent = true;
var value = "string"; //the warning message goes away 
value = 1;
value = true;
var favFood = "rice";
var person = {
    name: "Jose",
    age: 18,
    isStudent: true
};
var Jean = {
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
    console.log("".concat(person.name, " lives at ").concat(person.adress.street, " of ").concat(person.adress.city, " ").concat(person.adress.country));
}
displayInfo(Jean);
//Array declarations
var personList = [Jean];
var people = [Jean];
//Literal types
var myName2 = "Wald";
var gender = "female";
//Function
function getInfo(info) {
    var personFound = personList.find(function (pers) {
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
var Joe = {
    name: 'Joe',
    id: 1985
};
var Bob = {
    name: 'Bob',
    id: 2313,
    favSubject: "Mathematics"
};
var StudentName = {
    name: "Jean"
};
var Dolph = {
    name: "Dolph",
    favSubject: "Photography"
};
var Gogo = {
    name: "Gogo",
};
//Generics
var item = ["fruits", "vegetable", "junk food"];
//to avoid using any that basically turn off TypeScript ,we use generics
function getLastItem(array) {
    return array[array.length - 1];
}
console.log("ko");
console.log(getLastItem(item));
