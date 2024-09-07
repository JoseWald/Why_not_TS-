//variable declaration
let myName: string = "Jose" 
let myAge : number = 19
let isStudent : boolean = true
let value :any = "string"//the warning message goes away 
value = 1
value=true


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

//Unions
type Sex= "male" | "female"
let gender:Sex = "female"


//Function
function getInfo(info : string | number):Person1 | boolean{
    const personFound=personList.find(pers=>{
        if(typeof info === "number"){
            pers.age==info
        }else if(typeof info === "string"){
            pers.name.toLowerCase==info.toLowerCase
        }
    })

    if(personFound){
        return personFound
    }else{
        return false
    }
}

//Utility types
type Student={
    name:string,
    id:number,
    favSubject?:string,//indicate that it's optional
}

let Joe :Student = {
    name: 'Joe',
    id:1985
}

let Bob:Student = {
    name: 'Bob',
    id:2313,
    favSubject:"Mathematics"
}

//Partial types
type StudentInfo= Partial<Student>
let StudentName : StudentInfo= {
    name:"Jean"
}

//Omit type 
type ReleasedStudent=Omit<Student , "id">//released student no longer have an id , i hope you will understand
let Dolph: ReleasedStudent= {
    name:"Dolph",
    favSubject:"Photography"
}

type DumbStudent=Omit<Student , "id" | "favSubject">
let Gogo:DumbStudent={
    name:"Gogo",
}

//Generics
const item : string []=["fruits","vegetable","junk food"]
//to avoid using any that basically turn off TypeScript ,we use generics
function getLastItem<Type>(array : Type[]): Type | undefined {
    return array[array.length-1]
}
console.log("ko")
console.log(getLastItem(item))