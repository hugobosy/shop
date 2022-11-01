import React from "react";
import {HeaderTextTypes} from "./HeaderText.types";
import S from './HeaderText.styles';

export const HeaderText: React.FC<HeaderTextTypes> = ({text, color, size}) => {
    return (
        <S.Header color={color} size={size}>{text}</S.Header>
    )
}