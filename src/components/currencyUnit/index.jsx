/**
 * Created by Kiennt
 * User: https://github.com/kiennt-coder
 * Date: 26/12/2022
 * Description: Tạo thành phần tiêu đề (Heading Component)
 * Parameters: các thành phần giao diện
 * Return: Phần tử JSX
*/

import React from 'react';
import {CurrencyUnitWrapper, CurrencyUnitIcon} from './styled'
import {Select, Option, Text} from '../index'
import CurrencyUnitVN from '../../assets/images/currency-unit-vn.svg'

const CurrencyUnit = ({className, ...props}) => {
    return (
        <CurrencyUnitWrapper className={className}>
            <Select
                className="currency-unit__select"
                name="currency-unit"
                placeholder="Unit"
                defaultValue="VN"
            >
                <Option key="1" value="VN" className="currency-unit__option">
                    <CurrencyUnitIcon src={CurrencyUnitVN} alt="" />
                    <Text tagName="span">VN</Text>
                </Option>
                <Option key="2" value="USD" className="currency-unit__option">
                    <CurrencyUnitIcon src={CurrencyUnitVN} alt="" />
                    <Text tagName="span">USD</Text>
                </Option>
            </Select>
        </CurrencyUnitWrapper>
    )
}

export default CurrencyUnit;