// Scott Fennell (U86364709)
// CC_1 Car Class Implementation Challenge

/*1. Implement a car class with constructors that 
initializes the make an speed of car*/

class car {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }
    //2.)Create a method for accelerating the make of vehicle by 10 km/h
    accelerate(){
        this.speed += 10;
        console.log(this.make, "accelerated. New speed: ", this.speed, " km/h");
    }
    //3.)Create a method for braking
    brake(){
        this.speed -= 5;
        console.log(this.make, " braked. New speed: ", this.speed, " km/h");
    }
}
// 4a.) Create two car objects using the test data
const CAR1 = new car('BMW', 120);
const CAR2 = new car('Mercedes', 95);

//4b.) Test accelerate and brake method on each car
console.log("Initial ",CAR1.make, "speed: ", CAR1.speed, " km/h");
console.log("Initial ", CAR2.make, "speed: ", CAR2.speed, " km/h");

//4c.) Test method multiple times for each object
console.log("\nCar 1 accelerating and braking:");
CAR1.accelerate();
CAR1.accelerate();
CAR1.brake();
CAR1.brake();
CAR1.accelerate();

console.log("\nCar 2 accelerating and braking:");
CAR2.accelerate();
CAR2.accelerate();
CAR2.brake();
CAR2.brake();
CAR2.accelerate();

console.log("\nCars last speed check: ");
console.log(CAR1.make, " ", CAR1.speed); 
console.log(CAR2.make, " ", CAR2.speed);