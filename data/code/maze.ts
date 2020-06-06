import { light } from "../../components/theme";
import { DefaultTheme } from "styled-components";

const sketch = (p: any) => {
  const w = 30;
  const cells: Cell[] = [];
  let current: Cell;
  const prev: Cell[] = [];
  const sx = 25;
  const sy = 25;
  let theme = light;
  /**
   * 1  => generating
   * 0  => done
   * -1 => going back
   **/
  let state = 1;
  p.myCustomRedrawAccordingToNewPropsHandler = ({
    theme: _theme,
  }: {
    theme: DefaultTheme;
  }) => (theme = _theme);

  p.setup = function () {
    p.createCanvas(w * sx, w * sy);
    for (let j = 0; j < p.floor(p.width / w); j++) {
      for (let i = 0; i < p.floor(p.height / w); i++) {
        const cell = new Cell(i, j);
        cells.push(cell);
      }
    }
    current = cells[0];
  };

  p.draw = function () {
    p.background(0);
    p.frameRate(60);
    for (const cell of cells) {
      cell.show();
    }
    switch (state) {
      case 1:
        maze(current);
        break;
      case -1:
        back();
        break;
      case 0:
      default:
        break;
    }
    if (count >= p.floor(p.width / w) * p.floor(p.height / w) && state !== 0) {
      state = 0;
    }
  };

  let count = 0;

  function back() {
    const lastC = prev[prev.length - 1];
    lastC.highlight("purple");
    const n = lastC.checkNeighbors();
    if (n) {
      state = 1;
      current = lastC;
      count--;
    } else {
      prev.pop();
    }
  }

  function maze(c: Cell) {
    c.highlight("green");
    c.visited = true;
    const newC = c.checkNeighbors();
    count++;
    if (!newC) {
      c.highlight("red");
      state = -1;
    } else {
      removeWalls(c, newC);
      current = newC;
      prev.push(c);
    }
  }

  class Cell {
    walls: [boolean, boolean, boolean, boolean];
    visited: boolean;

    constructor(public i: number, public j: number) {
      this.walls = [true, true, true, true];
      this.visited = false;
    }

    checkNeighbors() {
      const neighbors = [];

      const top = cells[index(this.i, this.j - 1)];
      const right = cells[index(this.i + 1, this.j)];
      const bottom = cells[index(this.i, this.j + 1)];
      const left = cells[index(this.i - 1, this.j)];

      if (top && !top.visited) {
        neighbors.push(top);
      }
      if (right && !right.visited) {
        neighbors.push(right);
      }
      if (bottom && !bottom.visited) {
        neighbors.push(bottom);
      }
      if (left && !left.visited) {
        neighbors.push(left);
      }

      if (neighbors.length > 0) {
        const r = p.floor(p.random(0, neighbors.length));
        return neighbors[r];
      } else {
        return undefined;
      }
    }

    highlight(c: any = [0, 0, 255, 100]) {
      const x = this.i * w;
      const y = this.j * w;
      p.noStroke();
      p.fill(c);
      p.rect(x, y, w, w);
    }

    show() {
      const x = this.i * w;
      const y = this.j * w;
      p.stroke(p.color(theme.bg));
      if (this.walls[0]) {
        p.line(x, y, x + w, y);
      }
      if (this.walls[1]) {
        p.line(x + w, y, x + w, y + w);
      }
      if (this.walls[2]) {
        p.line(x + w, y + w, x, y + w);
      }
      if (this.walls[3]) {
        p.line(x, y + w, x, y);
      }

      if (this.visited) {
        p.noStroke();
        p.fill(p.color(theme.sec));
        p.rect(x, y, w, w);
      } else {
        p.noStroke();
        p.fill(p.color(theme.bg));
        p.rect(x, y, w, w);
      }
    }
  }

  function index(i: number, j: number) {
    if (
      i < 0 ||
      j < 0 ||
      i > p.floor(p.width / w) - 1 ||
      j > p.floor(p.height / w) - 1
    ) {
      return -1;
    }
    return i + j * p.floor(p.width / w);
  }

  function removeWalls(a: Cell, b: Cell) {
    let x = a.i - b.i;
    if (x === 1) {
      a.walls[3] = false;
      b.walls[1] = false;
    } else if (x === -1) {
      a.walls[1] = false;
      b.walls[3] = false;
    }
    let y = a.j - b.j;
    if (y === 1) {
      a.walls[0] = false;
      b.walls[2] = false;
    } else if (y === -1) {
      a.walls[2] = false;
      b.walls[0] = false;
    }
  }
};

export default sketch;
