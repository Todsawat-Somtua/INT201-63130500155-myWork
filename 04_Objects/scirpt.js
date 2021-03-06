let player1 = { id: 1, name: "Adam" };
console.log(Object.prototype.isPrototypeOf(player1));
class Dice {
  constructor(gameTitle) {
    console.log("constructor is working");
    this._faceValue = 0;
    if (gameTitle === undefined) {
      this._diceName = "Unknown";
    } else {
      this._diceName = gameTitle;
    }
  }

  roll() {
    this._faceValue = Math.floor(Math.random() * 6) + 1;
    return this._faceValue;
  }

  get faceValue() {
    console.log("getter working");
    return this._faceValue;
  }

  set faceValue(faceValue) {
    console.log("setter working");
    this._faceValue = faceValue;
  }

  toString() {
    return `game = ${this._diceName},faceValue = ${this._faceValue}`;
  }
}

//#1
let dice1 = new Dice("Hilo");
//   let dice2 = new Dice();

Dice.prototype.toString = function () {
  return `game = ${this._diceName},faceValue = ${this._faceValue}`;
};

console.log(dice1.toString());
