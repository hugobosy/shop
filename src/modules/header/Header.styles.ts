import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 30px;

  ${({ theme }) => theme.media.lg} {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 1400px;
  }
`;

const Header = styled.div`
  grid-column: 1/4;
  max-width: 300px;
  margin: 0 auto;

  ${({ theme }) => theme.media.lg} {
    width: 100%;
  }
`;

const BurgerWrapper = styled.div`
  ${({ theme }) => theme.media.lg} {
    display: none;
  }
`;

const BasketWrapper = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -10%;
    left: 50%;
    translate: -50% 0;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
const Icons = styled.div`
  display: flex;
  column-gap: 30px;
  grid-column: 3/4;
  max-width: 200px;

  ${({ theme }) => theme.media.lg} {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const Count = styled.div`
  position: absolute;
  top: -10%;
  left: 50%;
  z-index: 1;
  translate: -50% 0;
  color: ${({ theme }) => theme.colors.light};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

const MenuDesktop = styled.ul`
  display: none;
  width: 100%;
  column-gap: 60px;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.lg} {
    display: flex;
  }
`;

const MenuItem = styled.a`
  display: block;
  font-size: ${({ theme }) => theme.font.size.xxs};
  font-family: ${({ theme }) => theme.font.family.primary};
  color: ${({ theme }) => theme.colors.dark};
`;

const MenuMobile = styled.div `
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${({theme}) => theme.colors.accent};
  z-index: 999;
`

export default {
  Wrapper,
  Header,
  BurgerWrapper,
  Icons,
  BasketWrapper,
  Count,
  MenuDesktop,
  MenuItem,
  MenuMobile,
};
