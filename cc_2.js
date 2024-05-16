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
        console.log("${this.make} accelerated. New speed: ${this.speed} km/h");
    }
    //3.)Create a method for braking
    brake(){
        this.speed -= 5;
        console.log("${this.make} braked. New speed: ${this.speed} km/h");
    }
}