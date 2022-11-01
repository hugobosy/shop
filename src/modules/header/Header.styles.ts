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

const Icons = styled.div`
  display: flex;
  column-gap: 30px;
  grid-column: 3/4;
`;

export default { Wrapper, Header, BurgerWrapper, Icons };
