/**
 * Created by Kiennt
 * User: https://github.com/kiennt-coder
 * Date: 11/12/2022
 * Description: Tạo thành phần tiêu đề (Heading Component)
 * Parameters: level: cấp, children: phẩn từ con, rest: các tham số còn lại
 * Return: Phần tử JSX
*/

import React from 'react';
import {MessageWrapper, MessageStyled} from './styled';

// Heading Component
export const Heading = ({level = 1, children, ...rest}) => {

    // Hàm xử lý cấp heading : 1 -> 6 tương ứng với h1 -> h6
    const handleLevelHeading = (level, props, children) => {
        if(typeof level !== "number" || level < 1 || level > 6) level = 1

        let headingTag = `h${level}`

        return React.createElement(headingTag, props, children)
    }

    return (
        <>
            {handleLevelHeading(level, rest, children)}
        </>
    )
}

// Text Component
export const Text = ({tagName="span", children, ...rest}) => {
    return (
        React.createElement(tagName, rest, children)
    )
}

// Message Component
export const Message = ({icon, children, ...rest}) => {
    return (
        <MessageWrapper {...rest}>
            {icon && icon}
            <MessageStyled type={rest.type}>{children}</MessageStyled>
        </MessageWrapper>
    )
}