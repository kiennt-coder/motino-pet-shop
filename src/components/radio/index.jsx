/**
 * Created by Kiennt
 * User: https://github.com/kiennt-coder
 * Date: 15/12/2022
 * Description: Tạo thành phần hộp lựa chọn (Checkbox)
 * Parameters: 
 * Return: Phần tử JSX
*/

import React, {useState} from 'react';
import {RadioWrapper} from './styled'
import {Text} from '../typography/index'

export const Radio = ({children, name, value, checked, onChange, ...rest}) => {
    const [isChecked, setIsChecked] = useState(checked || false)

    const handleChange = event => {
        onChange && onChange(event)
    }

    const handleClick = () => {
        setIsChecked(true)
    }

    return (
        <RadioWrapper {...rest} isChecked={isChecked} children={children}>
            <Text className="font-weight-normal body--md">
                <input
                    name={name}
                    value={value}
                    type="radio"
                    disabled={rest.disabled}
                    checked={isChecked}
                    onChange={handleChange}
                    onClick={handleClick}
                />
                <Text></Text>
            </Text>
            {children && <Text className="font-weight-normal body--md">{children}</Text>}
        </RadioWrapper>
    )
}