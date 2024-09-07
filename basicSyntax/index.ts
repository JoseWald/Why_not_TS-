//variable declaration
let myName: string = "Jose" 
let myAge : number = 19
let isStudent : boolean = true

//custom types
type Food = string
let favFood: Food = "rice"

type Person={
    name: string,
    age : number,
    isStudent: boolean
}

let person  :  Person={
    name:"Jose",
    age:18,
    isStudent:true
}

//Nested Object types
type Person1={
    name: string,
    age : number,
    isStudent: boolean
    adress:{
        street:string,
        city:string,
        country:string
    }

}

let Jean :Person1={
    name:"Jose",
    age:18,
    isStudent:true,
    adress:{
        street:"43",
        city:"Antananarivo",
        country:"Madagascars"
    }

}

function displayInfo(person : Person1){
    console.log(`${person.name} lives at ${person.adress.street} of ${person.adress.city} ${person.adress.country}`)
}

displayInfo(Jean)

//Array declarations
let personList :Person1[] =[Jean]
let people: Array<Person1>=[Jean]

//Literal types
const myName2="Wald"