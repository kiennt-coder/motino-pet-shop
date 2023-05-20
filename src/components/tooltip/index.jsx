/**
 * Created by Kiennt
 * User: https://github.com/kiennt-coder
 * Date: 01/12/2022
 * Description: Tạo thành phần tiêu đề (Heading Component)
 * Parameters: các thành phần giao diện
 * Return: Phần tử JSX
*/

import React from 'react';
import {TooltipWrapper, TooltipTitle} from './styled'

const Tooltip = ({children, title="Tooltip", className, placement='top', ...rest}) => {
    const placements = {
        top: {
            top: 'unset',
            right: 'unset',
            left: '50%',
            bottom: '150%',
            transform: 'translateX(-50%)',
            arrow: {
                borderColor: 'var(--neutral-color-80) transparent transparent',
                top: '100%',
                left: '50%',
                right: 'unset',
                bottom: 'unset',
                transform: 'translateX(-50%)',
            }
        },
        bottom: {
            top: '150%',
            right: 'unset',
            left: '50%',
            bottom: 'unset',
            transform: 'translateX(-50%)',
            arrow: {
                borderColor: 'transparent transparent var(--neutral-color-80)',
                bottom: '100%',
                left: '50%',
                right: 'unset',
                top: 'unset',
                transform: 'translateX(-50%)',
            }
        },
        left: {
            top: '50%',
            right: '150%',
            left: 'unset',
            bottom: 'unset',
            transform: 'translateY(-50%)',
            arrow: {
                borderColor: ' transparent transparent transparent var(--neutral-color-80)',
                top: '50%',
                right: 'unset',
                bottom: 'uset',
                left: '100%',
                transform: 'translateY(-50%)',
            }
        },
        right: {
            top: '50%',
            right: 'unset',
            left: '150%',
            bottom: 'unset',
            transform: 'translateY(-50%)',
            arrow: {
                borderColor: 'transparent var(--neutral-color-80) transparent transparent',
                top: '50%',
                right: '100%',
                bottom: 'uset',
                left: 'unset',
                transform: 'translateY(-50%)',
            }
        },
    }
    return (
        <TooltipWrapper className={className}>
            {children}
            <TooltipTitle placement={placements[placement]} {...rest} className="body--md font-weight-normal tooltip__title">
                {title}
            </TooltipTitle>
        </TooltipWrapper>
    )
}

export default Tooltip;