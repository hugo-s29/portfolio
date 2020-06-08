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
    sliderGen = p.createSlider(1, 8, 1, 1);
    sliderGen.input(() => (newData = true));
  };

  p.draw = () => {
    if (newData) {
      p.background(p.color(theme.bg));
      p.stroke(p.color(theme.main));
      p.translate(p.width / 2, p.height / 2 + 50);
      p.rotate((p.TAU * 3) / 4);
      p.noFill();
      let main = new Triangle(p.width, p.createVector(0, 0));
      main.show();
      newData = false;
    }
  };

  class Triangle {
    next: Triangle[];
    points: Vector[];
    constructor(public size: number, public mid: Vector, public gen = 1) {
      this.next =
        gen < sliderGen.value()
          ? [
              new Triangle(
                size / 2,
                p5.Vector.add(
                  p5.Vector.fromAngle((p.TAU * 1) / 3, size / 4),
                  mid
                ),
                gen + 1
              ),
              new Triangle(
                size / 2,
                p5.Vector.add(
                  p5.Vector.fromAngle((p.TAU * 2) / 3, size / 4),
                  mid
                ),
                gen + 1
              ),
              new Triangle(
                size / 2,
                p5.Vector.add(
                  p5.Vector.fromAngle((p.TAU * 3) / 3, size / 4),
                  mid
                ),
                gen + 1
              ),
            ]
          : [];

      this.points = [
        p5.Vector.add(p5.Vector.fromAngle((p.TAU * 1) / 3, size / 2), mid),
        p5.Vector.add(p5.Vector.fromAngle((p.TAU * 2) / 3, size / 2), mid),
        p5.Vector.add(p5.Vector.fromAngle((p.TAU * 3) / 3, size / 2), mid),
      ];
    }

    show() {
      p.beginShape();

      for (const pt of this.points) {
        p.vertex(pt.x, pt.y);
      }

      p.endShape(p.CLOSE);

      for (const t of this.next) {
        t.show();
      }
    }
  }
};

export default sketch;
