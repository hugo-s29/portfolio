export const pixOp = (p: any) =>
  function pix(x: number, y: number) {
    return (x + y * p.width) * 4;
  };
