import React from "react";
import { HeaderText } from "../../ui/components/header-text/HeaderText.component";
import S from "./Header.styles";
import { Burger } from "../../ui/components/burger/Burger.component";
import { BiBasket, BiSearch, BiUser } from "react-icons/bi";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <HeaderText text="Fruits store" color="green" size="large" />
      </S.Header>
      <Burger />
      <S.Icons>
        <BiUser size={30}/>
        <BiSearch size={30}/>
        <BiBasket size={30}/>
      </S.Icons>
    </S.Wrapper>
  );
};
