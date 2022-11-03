import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 30px;
`;

const Header = styled.div`
  grid-column: 1/4;
  margin: 0 auto;
`;

const BurgerWrapper = styled.div`
  grid-column: 1/2;
`;

const BasketWrapper = styled.div`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: -10%;
    left: 50%;
    translate: -50% 0;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.accent};
  }
`
const Icons = styled.div`
  display: flex;
  column-gap: 30px;
  grid-column: 3/4;
`;

const Count = styled.div `
  position: absolute;
  top: -10%;
  left: 50%;
  z-index: 1;
  translate: -50% 0;
  color: ${({theme}) => theme.colors.light};
  font-weight: ${({theme}) => theme.font.weight.bold};
`

export default { Wrapper, Header, BurgerWrapper, Icons, BasketWrapper, Count };
