function Device (name, capacity) {
    this.devicetype = 'appliances',
    this.name = name,
    this.capacity = capacity
}

Device.prototype.plugIn = function(isPlugged){
        switch (isPlugged) {
          case "on":
            this.isPlugged = true;
            console.log(`${this.name} is plugged`)
          break;
          case "off":
            this.isPlugged = false;
            console.log(`${this.name} is unplugged`)
          break;
          default:
            console.log('We dont know');
            break;
}
}

Device.prototype.getCapacity = function(capacity){
    console.log(`${this.name} is ${this.capacity}W`)
}

function Lamp(name, capacity, lightflux, isPlugged){
  this.name = name,
  this.capacity = capacity,
  this.lightflux = lightflux,
  this.isPlugged = isPlugged
}

function Computer(name, capacity, core){
  this.name = name,
  this.capacity = capacity,
  this.core = core
}

Device.prototype.getPowerUsed = function() {
  if (this.isPlugged){ 
      return  this.capacity} 
  else return  0;
}

Lamp.prototype = new Device()
Computer.prototype = new Device()

const lamp = new Lamp ('Lamp', 55, 1500, false);
const computer = new Computer ('Computer', 700, "Intel Core i7");
const toster = new Device ('Toster', 1000);

lamp.plugIn("off")
lamp.getCapacity()

computer.plugIn("on")
computer.getCapacity()

toster.plugIn("on")
toster.getCapacity()

let totalCapacity = lamp.getPowerUsed() + computer.getPowerUsed() + toster.getPowerUsed()

console.log("Total capacity of plugged appliances is " + totalCapacity + "W")