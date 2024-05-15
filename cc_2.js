// Scott Fennell (U86364709)
// CC_1 Car Class Implementation Challenge

/*1. Implement a car class with constructors that 
initializes the make an speed of car*/

class car {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate(){
        this.speed += 10;
        console.log(this.make, " accelerated. New speed: ", this.speed, " km/h");
    }
}