// Description: Observer pattern implementation.
// The Observer pattern is a behavioral design pattern. Remember these types of patters facilitate the communication between objects.
// Dependency between objects so that when one object changes state, all its dependents are notified and updated automatically

import { Subject } from "rxjs";

// Observer interface
class EvenNumbers {

    evens: Subject<number> = new Subject<number>();

    constructor() { 
        setInterval(() => {
            const number = Math.floor(Math.random() * 100);
            if (number % 2 === 0) {
                this.evens.next(number);
            }
        }, 1000);
    }
}


class NumberObserver {

    evenNumbers: EvenNumbers = new EvenNumbers();

    constructor() {
        this.evenNumbers.evens.subscribe((number) => {
            console.log(`Even number: ${number}`);
        });
    }
}