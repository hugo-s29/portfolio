import { random } from "./random";

const sq = (n: number) => n ** 2;

class Complex {
  constructor(public r: number, public i: number) {}

  toString() {
    return `${this.r} ${this.i}i`;
  }

  sq() {
    const r = sq(this.r) - sq(this.i);
    const i = 2 * this.r * this.i;

    return new Complex(r, i);
  }

  add(c: Complex) {
    const i = this.i + c.i;
    const r = this.r + c.r;

    return new Complex(r, i);
  }
  addR(cr: number) {
    const r = this.r + cr;
    return new Complex(r, this.i);
  }

  addI(ci: number) {
    const i = this.i + ci;
    return new Complex(this.r, i);
  }

  static ZERO() {
    return new Complex(0, 0);
  }

  static RANDOM(min: number, max: number) {
    return new Complex(random(min, max), random(min, max));
  } 
  static from(n: number) {
    return new Complex(n,0);
  }
}

export default Complex;
