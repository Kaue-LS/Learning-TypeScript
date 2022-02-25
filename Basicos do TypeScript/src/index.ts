// Basic Types
var id:number = 5
let company:string='Traversy Media'
let isPublished:boolean = true
let x :any = 'Hello'

let ids:number[]= [1,2,3,4,5]

// ids.push(true)

let arr: any[]= [1,true,'Hello']


// Tuple

let person: [number,string,boolean] = [1,'Brad',true]

let employee: [number,string][]

employee =[
    [1,'Brad'],
    [2,'john'],
    [3,'jill']
]

// Unions
let pid:string | number=22

pid='22'

// Enum
// Vai enumerar como 0,1,2,3....
enum Direction1{
    Up=1,
    Dowm,
    Left,
    Right
}

// console.log(Direction1.Up)
// 0


// Object

// const user:{
//     id:number,
//     name:string
// }={
//     id:1,
//     name:'john'
// }
type User={
    id:number,
    name:string
}
const user:User={
    id:1,
    name:'john'
}

// Type Assertion

let cid: any=1
// let customerId=<number>cid
let customerId=cid as number

// Funtions

function addNum(X:number,Y:number):number{
    return X+Y
}

function log(message:string|number):void{
    console.log(message)
}





// Interfaces

interface UserInterface{
   readonly id:number,
    name:string
    age?:number
    // ? optional
}
const user1:UserInterface={
    id:1,
    name:'john'
}

// user1.id=5

// interface Point=number|string
// const p1:Point=1

interface MathFunc{
    (x:number,y:number):number
}
const add:MathFunc=(x:number,y:number):number=>x+y
const sub:MathFunc=(x:number,y:number):number=>x+y



// Classes


class Person{
//    id:number
   private id:number

    public name:string

    constructor(id:number,name:string){
        this.id=id,
        this.name=name
    }
    register(){
        return `${this.name} is now registered`
    }
}

const brad=new Person(1,'Brad Traversy')
const mike=new Person(2,'Mike Jordam')

// // brad.id=5
// brad.name='Michael'

// console.log(brad,mike)
// console.log(brad.register())


// =====================
interface PersonInterface{
     id:number,
     name:string
     register():string
 }
 class Persona implements PersonInterface{
     id:number
     name:string

     constructor(id:number,name:string){
         this.id=id,
         this.name=name
     }

     register(){
        return `${this.name} is now registered`
     }
 }
 

//  ========================================



// SUbclass
class Employee extends Persona {
    position:string
    constructor(id:number,name:string,position:string){
        super(id,name)
        this.position = position;
    }
}
const emp=new Employee(3,'Shawn','Developer')

// console.log(emp.register())


// Generics
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}

let numArray= getArray<number>([1,2,3,4])
let strArray= getArray<string>(['Brad','John','Roger'])

numArray.push(1)