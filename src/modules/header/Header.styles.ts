import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Header = styled.div `
  grid-column: 1/4;
  margin: 0 auto;
`

export default { Wrapper, Header }