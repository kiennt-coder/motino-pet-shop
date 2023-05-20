/**
 * Created by Kiennt
 * User: https://github.com/kiennt-coder
 * Date: 18/12/2022
 * Description: Tạo thành phần tiêu đề (Heading Component)
 * Parameters: 
 * Return: Phần tử JSX
*/

import React, {useState} from 'react';
import {Text, Message} from '../typography'
import {InputWrapper, InputStyled, InputSearchWrapper} from './styled'
import {EyeOutlined, EyeInvisibleOutlined, SearchOutlined} from '../icon'

export const Input = ({type='text', label, message, typeMessage, icon, ...rest}) => {
    const [isShowPassword, setIsShowPassword] = useState(type)

    const handleClickIcon = () => {
        setIsShowPassword(pre => pre.includes("password") ? "text" : "password")
    }

    const handleChangeIcon = (type) => {
        return type.includes("password") ? 
            <EyeOutlined
                className="input__icon--password"
                color={"neutral-color-40"}
                onClick={handleClickIcon}
            />
        :
            <EyeInvisibleOutlined
                className="input__icon--password"
                color={"neutral-color-40"}
                onClick={handleClickIcon}
            />
    }

    return (
        <InputWrapper className={rest.className}>
            {label && <Text tagName="div" align="left"  className="input__label-wrap">
                <Text tagName="label" htmlFor={rest.name} className="font-weight-normal body--md">
                    {label}
                </Text>
            </Text>}
            <Text tagName="div" className="input__wrap">
                <InputStyled {...rest} type={isShowPassword} id={rest.name}/>
                {
                    type.includes("password") && handleChangeIcon(isShowPassword)
                }
            </Text>
            {message && <Message
                className="font-weight-regular body--sm input__message"
                type={typeMessage}
                icon={icon}
            >
                {message}
            </Message>}
        </InputWrapper>
    )
}

export const InputSearch = ({onClick, className, ...rest}) => {
    return (
        <InputSearchWrapper className={className}>
            <SearchOutlined className="input-search__icon" onClick={onClick}/>
            <InputStyled type="text" {...rest}/>
        </InputSearchWrapper>
    )
}
