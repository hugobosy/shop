import React from "react";
import { HeaderText } from "../../ui/components/header-text/HeaderText.component";
import S from './Header.styles';

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Header>
          <HeaderText text="Fruits store" color="green" size="large" />
      </S.Header>
    </S.Wrapper>
  );
};