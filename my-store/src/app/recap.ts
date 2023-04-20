import { last } from "rxjs";

const username: string = 'jprom'
const usuario: string | number  = 1234

const sum = (a:number, b: number) => {
    return a + b;
}

sum(1, 4);


//clase
class Person {
    // private age: number;
    // private lastName: string;

    //constructor
    // constructor(age: number, lastName: string){
    //     this.age = age;
    //     this.lastName = lastName;
    // }

    //Constructor abbreviation 
    //Declare variables to be used in the class as well    
    constructor(private age: number, public lastName: string){}
}

const pablo = new Person(15, "Rosales");
//pablo.age;//Private attribute
console.log(pablo.lastName);


//String Interpolation -> Permite utilizar las variables desde el template del componente
// {{ 1 + 1 }}
// {{ myVar }}
// {{ myFunction() }}

//Property Binding
/**
 * Permite enviar asignar valores a los atributos de los elementos HTML
 */