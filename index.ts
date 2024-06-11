const myName:string = 'rabsun'

// List
const favMovies:string[] = []
favMovies.push("Interstellar")
console.log(favMovies)

// tuples
const user:[number,string] = [1,"Rabsun"]
console.log(user[1])

//Enum
const enum Size{
    Small,
    Regular,
    Medium,
    Large
}

let mysize:Size = Size.Medium
console.log(mysize)

// Function
const calculateTax = (income:number,taxyear=2022):number =>{
    if (taxyear > 2021)
        return income *2
    return income *1.2
}

console.log(calculateTax(1_000))

// Object

let employee:{
    id:number,
    name:string,
    retire:(date:Date) => void
} = {
    id:1,
    name:'Rabsun',
    retire:(date:Date) =>{
        console.log(date)
    }
}
console.log(employee.retire)

// type alias
type Employee={
    readonly id:number,
    name:string,
    retire:(date:Date) => void
}

// Union Type
function poundtokg(weight:number | string):number{
    if(typeof weight == 'number')
        return weight*1.2
    else
        return parseInt(weight)
}
console.log(poundtokg(10))
console.log(poundtokg('10kg'))

// Intersection Type

type Draggle = {
    drag:() => void
}

type Resizeable = {
    resize:() => void
}

type UIwidget = Draggle & Resizeable 

let textBox:UIwidget = {
    drag:()=>{console.log('hello')},
    resize:() => {}
}

// Literals Type
type Quantity = 50 | 100
let lemons:Quantity = 50

type amount = 'kg' | 'dozens'
let banana:amount = "kg"

// Nullable Types
function greet(name:string | null | undefined){
    if (name)
        console.log(name.toUpperCase())
    else
    console.log('ola')
}
greet(null)


type Customers = {
    birthday?:Date
}

function getCustomer(id:number): Customers | null | undefined{
    return id === 0 ? null : {birthday:new Date()};
}

let customer = getCustomer(0)
console.log(customer?.birthday?.getFullYear())