import styled, { css } from "styled-components";
import { HeaderTextTypes } from "./HeaderText.types";

const colors = {
  green: css`
    color: ${({ theme }) => theme.colors.accent};
  `,
  black: css`
    color: ${({ theme }) => theme.colors.dark};
  `,
};

const sizes = {
  small: css`
    font-size: ${({ theme }) => theme.font.size.xxs};
    
    ${({theme}) => theme.media.md} {
      font-size: ${({ theme }) => theme.font.size.xs}; 
    }

    ${({theme}) => theme.media.lg} {
      font-size: ${({ theme }) => theme.font.size.s};
    }
  `,

  medium: css`
    font-size: ${({ theme }) => theme.font.size.s};
    
    ${({theme}) => theme.media.md} {
      font-size: ${({ theme }) => theme.font.size.m}; 
    }

    ${({theme}) => theme.media.lg} {
      font-size: ${({ theme }) => theme.font.size.l};
    }
  `,

  large: css`
    font-size: ${({ theme }) => theme.font.size.l};
    
    ${({theme}) => theme.media.md} {
      font-size: ${({ theme }) => theme.font.size.xl}; 
    }

    ${({theme}) => theme.media.lg} {
      font-size: ${({ theme }) => theme.font.size.xxl};
    }
  `,
};
const Header = styled.h2<Partial<HeaderTextTypes>>`
  ${({ color }) => color && colors[color]};
  ${({size}) => size && sizes[size]};
`;

export default { Header };