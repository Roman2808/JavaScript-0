function Car(name) {
  this.name = "name";
  this.isTurnOn =false;
  this.speed = 0;
  this.engine = {
    v: 1.8;
    horsesPower: 167,
    isTurnOn: false
  };

  this.start = function() {
    this.isTurnOn = true;
    this.speed = 10;
    this.engine.isTurnOn = true;
  }
};



