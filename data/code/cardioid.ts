import { light } from "../../components/theme";
import { DefaultTheme } from "styled-components";

const sketch = (p: any) => {
  let sla: any, slb: any;
  const s = 800;
  const r = (s - 100) / 2;
  const w = 0.25;
  let theme = light;

  p.myCustomRedrawAccordingToNewPropsHandler = function ({
    theme: _t,
  }: {
    theme: DefaultTheme;
  }) {
    theme = _t;
  };
  p.setup = () => {
    p.createCanvas(s, s);
    p.colorMode(p.HSB);

    sla = p.createSlider(0, 15, 2, 0.001);
    slb = p.createSlider(100, 1000, 200, 50);
  };

  p.draw = () => {
    p.background(p.color(theme.bg));

    const a = sla.value();
    const b = slb.value();

    p.translate(p.width / 2, p.height / 2);
    p.rotate((3 / 4) * p.TAU);

    p.noFill();
    p.strokeWeight(1);
    p.stroke(255);
    p.circle(0, 0, 2 * r);

    for (let i = 1; i < slb.value(); i++) {
      const j = a * i;

      const angleI = (p.abs(i) * p.TAU) / (b - 1);
      const iX = r * p.cos(angleI);
      const iY = r * p.sin(angleI);

      const angleJ = (p.abs(j) * p.TAU) / (b - 1);
      const jX = r * p.cos(angleJ);
      const jY = r * p.sin(angleJ);
      p.strokeWeight(w);
      p.stroke(p.map(i % b, 0, b, 0, 360), 100, 100);
      p.line(iX, iY, jX, jY);
      p.strokeWeight(p.map(b, 100, 1000, 10, 3));
      p.point(iX, iY);
    }

    p.noStroke();
    p.fill(p.color(theme.main));
    p.rotate(p.TAU / 4);
    p.textSize(s / 50);
    const ar = p.floor(a * 1000) / 1000;
    const br = p.floor(b * 1000) / 1000;
    p.text(`${ar} mod ${br}`, -p.width / 2 + 10, p.height / 2 - 30);
  };
};

export default sketch;
