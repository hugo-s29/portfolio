import maze from "./maze";
import mandelbrot from "./mandelbrot";
import julia from "./julia";
import gol from "./gol";
import sierpinskiTriangle from "./sierpinskiTriangle";
import sierpinskiCarpet from "./sierpinskiCarpet";
import { FC } from "react";
import { useOvermind } from "../../overmind";
//@ts-ignore
import P5Wrapper from "react-p5-wrapper";
import { light, dark } from "../../components/theme";
import styled from "styled-components";

export const code: { [code_name: string]: (p: any) => any } = {
  maze,
  gol,
  mandelbrot,
  julia,
  sierpinskiTriangle,
  sierpinskiCarpet,
};

const Container = styled.div`
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    * {
      margin: 20px 0;
    }

    button {
      border: none;
      border-radius: 1rem;
      padding: 1rem 4rem;
      background: ${(p) => p.theme.main};
      color: ${(p) => p.theme.bg};
      outline: none;
    }
    color: ${(p) => p.theme.main};
  }
`;

export const CodeWrapper: FC<{
  code_name: keyof typeof code;
  props?: { [key: string]: any };
}> = ({ code_name, props = {} }) => {
  const sketch = code[code_name];
  const { state } = useOvermind();

  return (
    <Container>
      <P5Wrapper
        sketch={sketch}
        theme={state.dark ? dark : light}
        {...props}
      ></P5Wrapper>
    </Container>
  );
};

export default CodeWrapper;
