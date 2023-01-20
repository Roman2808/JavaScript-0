var car1 = {
  name: "Toyota Wish",
  isTurnOn:false,
  speed: 0,
  engine: {
    v: 1.8,
    horsesPower: 167,
    isTurnOn: false
  },
  start: function() {
    this.isTurnOn = true;
    this.speed = 10;
    this.engine.isTurnOn = true;
  }
};



