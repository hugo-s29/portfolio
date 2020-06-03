import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 300;
  font-size: 2.7rem;
  color: ${(p) => p.theme.main};
`;

export const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;
  color: ${(p) => p.theme.sec};
`;
