import React, { useState } from "react";
import { HeaderText } from "../../ui/components/header-text/HeaderText.component";
import S from "./Header.styles";
import { Burger } from "../../ui/components/burger/Burger.component";
import { BiBasket, BiSearch, BiUser } from "react-icons/bi";

export const Header = () => {
  const [countItemBasket, setCountBasketItem] = useState(0);
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <S.Wrapper>
      <S.Header>
        <HeaderText text="Fruits store" color="green" size="large" />
      </S.Header>
      <S.BurgerWrapper>
        <Burger />
      </S.BurgerWrapper>
      <S.MenuDesktop>
        <li>
          <S.MenuItem href="#">Home</S.MenuItem>
        </li>
        <li>
          <S.MenuItem href="#">Shop</S.MenuItem>
        </li>
        <li>
          <S.MenuItem href="#">Blog</S.MenuItem>
        </li>
        <li>
          <S.MenuItem href="#">Vendors</S.MenuItem>
        </li>
        <li>
          <S.MenuItem href="#">Pages</S.MenuItem>
        </li>
      </S.MenuDesktop>
      <S.MenuMobile>
        <li>
          <S.MenuItem href="#">Home</S.MenuItem>
        </li>
        <li>
          <S.MenuItem href="#">Shop</S.MenuItem>
        </li>
        <li>
          <S.MenuItem href="#">Blog</S.MenuItem>
        </li>
        <li>
          <S.MenuItem href="#">Vendors</S.MenuItem>
        </li>
        <li>
          <S.MenuItem href="#">Pages</S.MenuItem>
        </li>
      </S.MenuMobile>
      <S.Icons>
        <BiUser size={30} />
        <BiSearch size={30} />
        <S.BasketWrapper>
          <S.Count>{countItemBasket}</S.Count>
          <BiBasket size={30} />
        </S.BasketWrapper>
      </S.Icons>
    </S.Wrapper>
  );
};
