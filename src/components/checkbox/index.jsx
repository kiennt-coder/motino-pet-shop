/**
 * Created by Kiennt
 * User: https://github.com/kiennt-coder
 * Date: 14/12/2022
 * Description: Tạo thành phần hộp lựa chọn (Checkbox)
 * Parameters:
 * Return: Phần tử JSX
 */

import React, { useState } from "react";
import { CheckboxLabel, CheckboxWrapper } from "./styled";
import { Text } from "../typography";
import { CheckOutlined } from "../icon";

export const Checkbox = ({
    children,
    name,
    checked,
    onChange,
    icon,
    ...rest
}) => {
    const [isChecked, setIsChecked] = useState(checked || false);

    const handleChange = (event) => {
        onChange && onChange(event);
        setIsChecked(!isChecked);
    };

    return (
        <CheckboxWrapper {...rest} isChecked={isChecked} children={children}>
            <Text className="font-weight-normal body--md">
                <input
                    name={name}
                    type="checkbox"
                    disabled={rest.disabled}
                    checked={isChecked}
                    onChange={handleChange}
                />
                <Text>
                    <CheckOutlined size={1.6} />
                </Text>
            </Text>
            {/* {children && <Text className="font-weight-normal body--md">{children}</Text>} */}
            <CheckboxLabel className="font-weight-normal body--md ml-1">
                {icon && (
                    <Text
                        className="mr-1"
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        {icon}
                    </Text>
                )}
                {children}
            </CheckboxLabel>
        </CheckboxWrapper>
    );
};
