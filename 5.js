class Device {
    constructor(name){
      this.devicetype = 'appliances';
      this.name = name;
    }
  
    plugIn() {
      this.isPlugged = true;
      console.log(`${this.name} is plugged`)
    } 

    getCapacity(){
      console.log(this.name + " is " + this.capacity +"W")
    }
  
    getPowerUsed(){
      return this.isPlugged ? this.capacity : 0;
    }
}


class Lamp extends Device {
  constructor(name, capacity, lightflux){
  super(name);
  this.capacity = capacity;
  this.lightflux = lightflux;
  }
}


class Computer extends Device {
  constructor(name, capacity, core){
  super(name);
  this.capacity = capacity;
  this.core = core;
  }
}

class Toster extends Device {
  constructor(name, capacity){
  super(name);
  this.capacity = capacity;
  }
}

const lamp = new Lamp ('Lamp', 55, 1500, false);
const computer = new Computer ('Computer', 700, "Intel Core i7");
const toster = new Toster ('Toster', 1000);

lamp.plugIn()
computer.plugIn()
toster.plugIn()

lamp.getCapacity()
computer.getCapacity()
toster.getCapacity()

let totalCapacity = lamp.getPowerUsed() + computer.getPowerUsed() + toster.getPowerUsed()

console.log("Total capacity of plugged appliances is " + totalCapacity + "W")