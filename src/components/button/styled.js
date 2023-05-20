import styled from 'styled-components'

const ButtonWrapper = styled.button`
    font-family: inherit;
    border-radius: 5.7rem;
    padding: ${props => props.isChildren ? "1.2rem 2.8rem 1.2rem" : "1.2rem"};
    height: ${props => props.size?.includes("small") ? "4.4rem" : "4.8rem"};
    min-width: ${props => props.isChildren ? "16.3rem" : "4.8rem"};
    width: 100%;
    background-color: var(--primary-color);
    border: 1.5px solid var(--primary-color);
    color: var(--neutral-color);
    transition: all .3s ease-in;
    font-size: ${props => props.size?.includes("small") ? "1.4rem" : "1.6rem"};
    line-height: 1;

    &:hover {
        background-color: var(--primary-color-light);
        border-color: var(--primary-color-light);
    }

    &:focus {
        background-color: var(--primary-color-normal);
        border-color: var(--primary-color-light);
    }

    &.active {
        background-color: var(--primary-color-dark);
        border-color: var(--primary-color-dark);
    }

    &.disable {
        background-color: var(--neutral-color-20);
        border-color: var(--neutral-color-20);
        color: var(--neutral-color-60);
        cursor: not-allowed;
        pointer-events: all !important;
    }
    
    &.disable path {
        fill: var(--neutral-color-60);
        // stroke: var(--neutral-color-60);
    }
`

export const ButtonOutlinedWrapper = styled(ButtonWrapper)`
    background-color: var(--neutral-color);
    border-color: var(--primary-color);
    color: var(--primary-color);

    & path {
        fill: var(--primary-color);
        // stroke: var(--primary-color);
        transition: all .3s ease-in;
    }

    &:hover , &:focus, &.active {
        color: var(--neutral-color);
    }

    &:hover path, &:focus path, &.active path {
        fill: var(--neutral-color);
        // stroke: var(--neutral-color);
    }

    &.disable {
        color: var(--neutral-color-60);
    }

    &.disable path {
        fill: var(--neutral-color-60);
        // stroke: var(--neutral-color-60);
    }
`

export default ButtonWrapper;