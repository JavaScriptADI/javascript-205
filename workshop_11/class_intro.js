const car = {
    "type": "Mercedes",
    "wheels": 4

};

const car2 = {
    "tpye": "BMW",
    "wheel": 5
}


class Car {
    constructor(name, wheel) {
        this.name = name;
        if (wheel > 4) {
            throw Error("Wheel count should not be more than 4!");
        }
        this.wheel = wheel;
    }


    start_engine() {
        console.log(`${this.name} vrom vrom`);
    }
}

const mercedes = new Car("Mercedes", 4);
const bmw = new Car("BMW", 6);

console.log(mercedes.name, mercedes.wheel);
console.log(mercedes);

mercedes.start_engine();
bmw.start_engine();