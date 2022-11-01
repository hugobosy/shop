import styled from "styled-components";

const BurgerButton = styled.div`
  position: relative;
  width: 40px;
  height: 30px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: black;
    translate: 0 -50%;
  }
`;

export default { BurgerButton };
