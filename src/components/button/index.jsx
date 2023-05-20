/**
 * Created by Kiennt
 * User: https://github.com/kiennt-coder
 * Date: 11/12/2022
 * Description: Tạo thành phần bố cục chính (Layout Main)
 * Parameters: children: phẩn từ con, rest: các tham số còn lại
 * Return: Phần tử JSX
*/

import React from 'react';
import ButtonWrapper, {ButtonOutlinedWrapper} from './styled'
import {Text} from '../typography'

export const Button = ({children, icon, size, iconPosition="right", ...rest}) => {
    return (
        <ButtonWrapper {...rest} isChildren={!!children} size={size}>
            {iconPosition.includes("left") && icon && React.cloneElement(icon, {size: size?.includes("small") ? 1.5 : 1.8})}
            {children && <Text tagName="span" style={icon && {margin: `0 ${iconPosition.includes("right") ? '1.1rem' : 0} 0 ${iconPosition.includes("left") ? '1.1rem' : 0}`}}>{children}</Text>}
            {iconPosition.includes("right") && icon && React.cloneElement(icon, {size: size?.includes("small") ? 1.5 : 1.8})}
        </ButtonWrapper>
    );
}

export const ButtonOutlined = ({children, icon, size, iconPosition="right", ...rest}) => {
    return (
        <ButtonOutlinedWrapper {...rest} isChildren={!!children} size={size}>
            {iconPosition.includes("left") && icon && React.cloneElement(icon, {size: size?.includes("small") ? 1.5 : 1.8})}
            {children && <Text tagName="span" style={icon && {margin: `0 ${iconPosition.includes("right") ? '1.1rem' : 0} 0 ${iconPosition.includes("left") ? '1.1rem' : 0}`}}>{children}</Text>}
            {iconPosition.includes("right") && icon && React.cloneElement(icon, {size: size?.includes("small") ? 1.5 : 1.8})}
        </ButtonOutlinedWrapper>
    );
}