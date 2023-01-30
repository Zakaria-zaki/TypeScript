interface Fruit {
    name: string,
    price: number,
}

interface Car {
    speed: number
}

function addItemToCollection<T>(item: T, collection: T[]): T[] {
    return [...collection, item];
}

interface AddItemFunction {
    <T>(item: T, collection: T[]): T[]
}

const addItemTo: AddItemFunction = <T>(
    item: T, 
    collection: T[]
    ): T[] => {
    return [...collection, item]
}



const newFruit: Fruit = {
    name: 'banane',
    price: 1
}

const newCar: Car = {
    speed: 44
}

const myFruits = addItemToCollection(newFruit, [])
const myCars = addItemToCollection(newCar, [])
// console.log(myFruits[0].price)
// console.log(myCars[0].speed)


class Stack<T> {
    items: T[] = [];


    push(item: T): void {
        this.items.push(item);
    }

    pop(): T {
        return this.items.pop();
    }

    display(): void{
        console.log(this.items);
    }
}

const newStack = new Stack<number>();
newStack.push(1);
newStack.display();

interface Name {
    name: string
}

function displayName<T extends Name>(object: T) {
    console.log(object.name)
}

function displayProps<T, U extends keyof T>(object: T, props: U) {
    console.log(object[props])
}


interface Person {
    username: string;
    age: number;
}

type partialType = { [P in keyof Person]?: Person[P] };

type MyPartial<T> = { [P in keyof T]?: T[P] };


const user: partialType = {
    username: 'zakaria'
}

const user2: MyPartial<Person> = {
    username: 'abdou'
}

// interface Lenghty {
//     lenght: number
// }

// function func<T extends Lenghty>(x: T) {
//     return x.lenght;
// } 


declare function f<T>(x: T): T extends string ? string: boolean;

type MyType = Exclude<'a' | 'b', 'a'>;

type MyExcludeType<T, U> = T extends U ? never: T;

type MyExtracttype<T, U> = T extends U ? T: never;


// ReturnType<test> he will return the type of test 
function ComponentFactory({template, selector}: {template: string, selector: string}) {
    return ((target) => {
        const elem = document.querySelector(selector);
        if(elem) elem.innerHTML = template;
    })
}


@ComponentFactory({
    template: '<h1>Hello Component</h1>',
    selector: 'app'
})
class Car {
    public speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }
}

const audi = new Car(300);
const renault = new Car(120);