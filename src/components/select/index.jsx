/**
 * Created by Kiennt
 * User: https://github.com/kiennt-coder
 * Date: 16/12/2022
 * Description: Tạo thành phần thả xuống (Dropdown)
 * Parameters:
 * Return: Phần tử JSX
 */

import React, {
    useState,
    useRef,
    useEffect,
    useCallback,
    cloneElement,
} from "react";
import { SelectWrapper, OptionWrapper } from "./styled";
import { Text } from "../index";
import { DownOutlined } from "../icon";

export const Select = ({
    children,
    name,
    value,
    onChange,
    placeholder = "Dropdown",
    defaultValue,
    ...rest
}) => {
    const inputRef = useRef();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLeave, setIsLeave] = useState(true);
    const [selectedValue, setSelectedValue] = useState({
        name: "",
        value: 0,
    });

    const handleChangeValue = (value) => {
        setSelectedValue(value);
    };

    const handleClickSelect = useCallback(() => {
        setIsExpanded((pre) => !pre);
    }, []);

    const handleCloseSelect = useCallback(() => {
        isLeave && setIsExpanded(false);
    }, [isLeave]);

    useEffect(() => {
        let item;
        if (children.length) {
            item = children.find((item) => item.props.value === defaultValue);
        } else {
            item = children.props.value === defaultValue && item;
        }

        item &&
            handleChangeValue({
                name: item.props.children,
                value: item.props.value,
            });
    }, [defaultValue, children]);

    useEffect(() => {
        onChange &&
            onChange({
                name,
                value: selectedValue.value,
            });
    }, [selectedValue, onChange, name]);

    useEffect(() => {
        document.addEventListener("click", handleCloseSelect);
        return () => {
            document.removeEventListener("click", handleCloseSelect);
        };
    }, [isLeave, handleCloseSelect]);

    const handleMouseOver = useCallback((e) => {
        setIsLeave(false);
    }, []);

    const handleMouseLeave = useCallback((e) => {
        setIsLeave(true);
    }, []);

    return (
        <SelectWrapper
            {...rest}
            className={isExpanded ? `${rest.className} active` : rest.className}
            onClick={handleClickSelect}
            onMouseLeave={handleMouseLeave}
            onMouseOver={handleMouseOver}
        >
            <Text tagName="span" className="select__search">
                <input ref={inputRef} type="search" name={name} value={value} />
            </Text>
            <Text
                tagName="span"
                className="font-weight-normal body--md text-align-left select__placeholder"
            >
                {selectedValue.name || placeholder}
            </Text>
            <DownOutlined size={1.6} className="select__icon" />
            <OptionWrapper className="select__dropdown">
                {children.length
                    ? children.map((item) =>
                          cloneElement(item, {
                              onChangeValue: handleChangeValue,
                              selectedValue: selectedValue,
                          })
                      )
                    : cloneElement(children, {
                          onChangeValue: handleChangeValue,
                          selectedValue: selectedValue,
                      })}
            </OptionWrapper>
        </SelectWrapper>
    );
};

export const Option = ({
    children,
    value,
    className,
    selectedValue,
    onChangeValue,
    ...rest
}) => {
    const handleClickOption = useCallback(
        (value) => {
            onChangeValue(value);
        },
        [onChangeValue]
    );

    return (
        <Text
            tagName="div"
            {...rest}
            className={`font-weight-normal text-align-left ${
                className ? className : ""
            } ${selectedValue.value === value ? "active" : ""}`}
            value={value}
            onClick={() => handleClickOption({ name: children, value })}
            title={children[children.length - 1]?.props.children}
        >
            <Text tagName="span" className="body--md option__text">
                {children}
            </Text>
        </Text>
    );
};
