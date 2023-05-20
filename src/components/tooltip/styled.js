import styled from 'styled-components'

export const TooltipWrapper = styled.div`
    display: inline-block;
    position: relative;

    &:hover .tooltip__title {
        opacity: 1;
        visibility: initial;
    }
`

export const TooltipTitle = styled.span`
    opacity: 0;
    visibility: hidden;
    display: block;
    position: absolute;
    top: ${props => props.placement.top};
    right: ${props => props.placement.right};
    left: ${props => props.placement.left};
    bottom: ${props => props.placement.bottom};
    transform: ${props => props.placement.transform};
    padding: 0.6rem 1rem 0.4rem;
    color: var(--neutral-color);
    background-color: var(--neutral-color-80);
    white-space: nowrap;
    border-radius: 0.6rem;
    transition: all .3s ease-in;
    z-index: 1;

    &::after {
        content: '';
        position: absolute;
        border-width: 0.5rem;
        border-style: solid;
        border-color: ${props => props.placement.arrow.borderColor};
        top: ${props => props.placement.arrow.top};
        right: ${props => props.placement.arrow.right};
        bottom: ${props => props.placement.arrow.bottom};
        left: ${props => props.placement.arrow.left};
        transform: ${props => props.placement.arrow.transform};
    }
`