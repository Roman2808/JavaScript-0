function Dog(name) {

  this.myname = name;
  this.voice = function() {
    console.log("Hey, my name is " + this.myname );
  }
}

var chauchau = new Dog("Laika");
var buldog = new Dog("Laika2");

chauchau.voice();
buldog.voice();