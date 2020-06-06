import { light } from "../../components/theme";
import { DefaultTheme } from "styled-components";

const sketch = (p: any) => {
  const w = 16;
  const cells: Cell[][] = [];
  let playing = false;
  let gen = 0;
  let hadChange = true;
  let out: any;
  let theme = light;

  p.myCustomRedrawAccordingToNewPropsHandler = function ({
    theme: _t,
  }: {
    theme: DefaultTheme;
  }) {
    theme = _t;
  };

  p.setup = () => {
    p.createCanvas(800, 800);

    let rndBtn = p.createButton("random");
    rndBtn.mousePressed(() => {
      for (const row of cells) {
        for (const c of row) {
          c.alive = p.random() > 0.5;
        }
      }
    });
    let clrBtn = p.createButton("clear");
    clrBtn.mousePressed(() => {
      for (const row of cells) {
        for (const c of row) {
          c.alive = false;
          gen = 0;
        }
      }
    });
    let playBtn = p.createButton("start / stop");
    playBtn.mousePressed(() => (playing = !playing));
    out = p.createP("");

    for (let i = 0; i < p.round(p.width / w); i++) {
      cells[i] = [];
      for (let j = 0; j < p.round(p.height / w); j++) {
        cells[i].push(new Cell(i, j));
      }
    }
  };

  p.draw = function () {
    p.background(p.color(theme.bg));
    if (hadChange) {
      out.html(`Generation ${gen}`);
      hadChange = false;
    }
    if (playing) {
      gen++;
      hadChange = true;
      cells.forEach((r) => r.forEach((c) => (c.prev = c.alive)));
    }

    for (const row of cells) {
      for (const c of row) {
        if (playing) {
          c.prev = c.alive;
          c.update();
        }
        c.show();
      }
    }
  };

  p.mousePressed = function () {
    addCell();
  };

  function addCell() {
    const i = p.floor(p.map(p.mouseX, 0, p.width, 0, p.round(p.width / w)));
    const j = p.floor(p.map(p.mouseY, 0, p.height, 0, p.round(p.height / w)));
    let k = index(i, j);
    if (k) k.toggle();
  }

  class Cell {
    alive: boolean;
    prev: boolean;
    constructor(public i: number, public j: number) {
      this.alive = false;
      this.prev = false;
    }

    checkNeighbors() {
      const top = index(this.i, this.j - 1);
      const right = index(this.i + 1, this.j);
      const bottom = index(this.i, this.j + 1);
      const left = index(this.i - 1, this.j);
      const tl = index(this.i - 1, this.j - 1);
      const tr = index(this.i + 1, this.j - 1);
      const bl = index(this.i - 1, this.j + 1);
      const br = index(this.i + 1, this.j + 1);

      return [top, right, bottom, left, tl, tr, bl, br].filter(
        (c) => c && c.prev
      );
    }

    show() {
      const x = this.i * w;
      const y = this.j * w;
      p.stroke(p.color(theme.main));
      p.fill(!this.alive ? p.color(theme.bg) : p.color(theme.main));
      // console.log(this.i, this.j, this.alive, this.checkNeighbors().length)
      // fill(map(this.checkNeighbors().length, 0 , 8, 0,255))
      p.rect(x, y, w, w);
    }

    update() {
      const n = this.checkNeighbors().length;

      if (n < 2) this.alive = false;
      else if (n > 3) this.alive = false;
      else if (n === 3) this.alive = true;
    }

    toggle() {
      this.alive = !this.alive;
    }
  }

  function index(i: number, j: number) {
    if (i < 0 || j < 0 || i > p.width / w - 1 || j > p.height / w - 1) {
      return undefined;
    }
    return cells[i][j];
  }
};

export default sketch;
