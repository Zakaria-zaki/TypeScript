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

