import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { SFC } from "react";
import { useOvermind } from "../overmind";
import { useRouter } from "next/dist/client/router";

export const Button = styled.button<{ dark: boolean }>`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 5;
  font-size: 1.5rem;
  background: none;
  border: none;
  outline: none;
  width: 1.5rem;
  height: 1.5rem;
  color: ${(p) => p.theme.main};
`;

const HomeBtn: SFC = () => {
  const { state } = useOvermind();
  const { push } = useRouter();
  return (
    <Button onClick={() => push("/")} dark={state.dark}>
      <FaHome />
    </Button>
  );
};

export default HomeBtn;
