import { light } from "../../components/theme";
import { DefaultTheme } from "styled-components";
import { Vector } from "p5";

const sketch = (p: any) => {
  let theme = light;
  let pen: Pendulum;
  let τ = Math.PI * 2;
  let gravity = 0.4;
  let playing = false;
  let sθ: any;
  let sg: any;
  let sl: any;

  p.myCustomRedrawAccordingToNewPropsHandler = function ({
    theme: _t,
  }: {
    theme: DefaultTheme;
  }) {
    theme = _t;
  };

  p.setup = () => {
    p.createCanvas(800, 800);
    τ = p.TAU;

    p.rectMode(p.CENTER);
    const playBtn = p.createButton("start / stop");
    playBtn.mousePressed(() => (playing = !playing));
    p.createP("angle");
    sθ = p.createSlider(-τ / 2, τ / 2, τ / 3, τ / 100);
    p.createP("gravity");
    sg = p.createSlider(-1, 2, 0.4, 0.1);
    p.createP("length");
    sl = p.createSlider(50, 500, 350, 10);
    sθ.input(() => start("θ"));
    sg.input(() => start("g"));
    sl.input(() => start("l"));

    start("s");
  };

  function start(mode: "s" | "θ" | "g" | "l") {
    switch (mode) {
      case "g":
        gravity = sg.value();
        break;
      case "θ":
        if (!pen) break;
        pen.θ = sθ.value();
        break;
      case "l":
        if (!pen) break;
        pen.l = sl.value();
        break;

      case "s":
      default:
        pen = new Pendulum(p.width / 2 - 20, sθ.value(), p.createVector(0, 0));
        break;
    }
  }

  p.draw = () => {
    p.background(p.color(theme.bg));
    p.stroke(p.color(theme.main));
    p.fill(p.color(theme.main));

    p.translate(p.width / 2, p.height / 2);
    p.rotate(τ / 4);

    if (playing) pen.update();
    pen.show();
  };

  class Pendulum {
    θ: number;
    acc: number;
    vel: number;
    end: Vector;
    g: number;

    constructor(public l: number, θ0: number, public start: Vector) {
      this.θ = θ0;
      this.acc = 0;
      this.vel = 0;
      this.start = start;
      this.end = Vector.fromAngle(this.θ, this.l);
      this.g = gravity;
    }

    update() {
      this.acc = (-this.g * p.sin(this.θ)) / this.l;
      this.vel += this.acc;
      this.θ += this.vel;
    }

    show() {
      this.end = Vector.fromAngle(this.θ, this.l);
      p.square(0, 0, 10);
      p.line(0, 0, this.end.x, this.end.y);
      p.circle(this.end.x, this.end.y, 30);
    }
  }
};

export default sketch;
