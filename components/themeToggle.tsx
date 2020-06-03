import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";
import { SFC } from "react";
import { useOvermind } from "../overmind";

export const Button = styled.button<{ dark: boolean }>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 5;
  font-size: 1rem;
  background: none;
  border: none;
  outline: none;
  width: 1.5rem;
  height: 1.5rem;
  div {
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    & > * {
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      position: absolute;
      width: 1.5rem;
      height: 1.5rem;
    }

    .dark {
      color: ${(p) => p.theme.colors.b1};
      opacity: ${(p) => (!p.dark ? 1 : 0)};
    }
    .light {
      color: ${(p) => p.theme.colors.w1};
      opacity: ${(p) => (p.dark ? 1 : 0)};
    }
  }
`;

const ThemeToggle: SFC = () => {
  const { state, actions } = useOvermind();
  return (
    <Button onClick={() => actions.toggleTheme()} dark={state.dark}>
      <div>
        <FaSun className="light" />
        <FaMoon className="dark" />
      </div>
    </Button>
  );
};

export default ThemeToggle;
