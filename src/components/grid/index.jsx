/**
 * Created by Kiennt
 * User: https://github.com/kiennt-coder
 * Date: 26/12/2022
 * Description: Tạo thành phần lưới (Grid Component)
 * Parameters:
 * Return: Phần tử JSX
 */

import React, { forwardRef } from "react";
import { ContainerStyled, RowStyled, ColStyled } from "./styled";

export const Container = forwardRef(({ children, ...rest }, ref) => {
    return (
        <ContainerStyled ref={ref} {...rest}>
            {children}
        </ContainerStyled>
    );
});

export const Row = ({ children, ...rest }) => {
    return <RowStyled {...rest}>{children}</RowStyled>;
};

export const Col = ({ children, span = 24, className, ...rest }) => {
    return (
        <ColStyled
            {...rest}
            className={
                className ? className + ` col col-${span}` : `col col-${span}`
            }
        >
            {children}
        </ColStyled>
    );
};
