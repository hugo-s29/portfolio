import { pixOp } from "./assets/pixels";
import Complex from "./assets/complex";

const sketch = (p: any) => {
  const pix = pixOp(p);

  let max = 100;
  let n = 2;

  let cminX = -2.5;
  let cmaxX = 2;
  let cminY = -2.5;
  let cmaxY = 2;
  let change = 2;

  p.myCustomRedrawAccordingToNewPropsHandler = function () {};

  p.setup = () => {
    p.createCanvas(800, 800);
    p.colorMode(p.HSB);
  };

  p.draw = () => {
    if (change > 0) {
      p.loadPixels();
      for (let x = 0; x < p.width; x++) {
        for (let y = p.frameCount % n; y < p.height; y += n) {
          const i = p.map(x, 0, p.width, cminX, cmaxX);
          const j = p.map(y, 0, p.height, cminY, cmaxY);
          const idx = pix(x, y);
          const c = new Complex(i, j);
          let z = Complex.ZERO();
          let k = 0;
          while (k < max && z.sq().r <= 4) {
            k++;
            z = z.sq().add(c);
          }
          const clr = colorize(k);
          p.pixels[idx + 0] = p.red(clr);
          p.pixels[idx + 1] = p.green(clr);
          p.pixels[idx + 2] = p.blue(clr);
          p.pixels[idx + 3] = 255;
        }
      }

      p.updatePixels();
      change--;
    }
  };

  p.mousePressed = () => {
    if (
      p.mouseX >= p.width ||
      p.mouseX <= 0 ||
      p.mouseY >= p.height ||
      p.mouseY <= 0
    )
      return;

    const i = p.map(p.mouseX, 0, p.width, cminX, cmaxX);
    const j = p.map(p.mouseY, 0, p.height, cminY, cmaxY);
    cminX = (cminX + i) / 2;
    cmaxX = (cmaxX + i) / 2;
    cminY = (cminY + j) / 2;
    cmaxY = (cmaxY + j) / 2;
    change = 2;
  };

  function colorize(k: number) {
    if (k === max) return p.color(0);
    return p.color(p.map(k, 0, max, 0, 255), 100, 255);
  }
};

export default sketch;
