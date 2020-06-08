import { light } from "../../components/theme";
import { DefaultTheme } from "styled-components";
import p5, { Vector } from "p5";

const sketch = (p: any) => {
  let theme = light;
  let sliderGen: any;
  let newData = true;

  p.myCustomRedrawAccordingToNewPropsHandler = function ({
    theme: _t,
  }: {
    theme: DefaultTheme;
  }) {
    theme = _t;
    newData = true;
  };

  p.setup = () => {
    p.createCanvas(800, 800);
    sliderGen = p.createSlider(1, 6, 1, 1);
    sliderGen.input(() => (newData = true));
  };

  p.draw = () => {
    if (newData) {
      p.background(p.color(theme.bg));
      p.stroke(p.color(theme.main));
      p.translate(p.width / 2, p.height / 2);
      p.noFill();
      p.rectMode(p.CENTER);
      let main = new Square((p.width * 2) / 3, p.createVector(0, 0));
      main.show();
      newData = false;
    }
  };

  class Square {
    next: Square[];
    constructor(public size: number, public mid: Vector, public gen = 1) {
      this.next =
        gen < sliderGen.value()
          ? [
              new Square(
                size / 3,
                p5.Vector.add(
                  p5.Vector.fromAngle((p.TAU * 1) / 8, (Math.SQRT2 * size) / 3),
                  mid
                ),
                gen + 1
              ),
              new Square(
                size / 3,
                p5.Vector.add(
                  p5.Vector.fromAngle((p.TAU * 2) / 8, size / 3),
                  mid
                ),
                gen + 1
              ),
              new Square(
                size / 3,
                p5.Vector.add(
                  p5.Vector.fromAngle((p.TAU * 3) / 8, (Math.SQRT2 * size) / 3),
                  mid
                ),
                gen + 1
              ),
              new Square(
                size / 3,
                p5.Vector.add(
                  p5.Vector.fromAngle((p.TAU * 4) / 8, size / 3),
                  mid
                ),
                gen + 1
              ),
              new Square(
                size / 3,
                p5.Vector.add(
                  p5.Vector.fromAngle((p.TAU * 5) / 8, (Math.SQRT2 * size) / 3),
                  mid
                ),
                gen + 1
              ),
              new Square(
                size / 3,
                p5.Vector.add(
                  p5.Vector.fromAngle((p.TAU * 6) / 8, size / 3),
                  mid
                ),
                gen + 1
              ),
              new Square(
                size / 3,
                p5.Vector.add(
                  p5.Vector.fromAngle((p.TAU * 7) / 8, (Math.SQRT2 * size) / 3),
                  mid
                ),
                gen + 1
              ),
              new Square(
                size / 3,
                p5.Vector.add(
                  p5.Vector.fromAngle((p.TAU * 8) / 8, size / 3),
                  mid
                ),
                gen + 1
              ),
            ]
          : [];
    }

    show() {
      p.square(this.mid.x, this.mid.y, this.size);

      for (const t of this.next) {
        t.show();
      }
    }
  }
};

export default sketch;
