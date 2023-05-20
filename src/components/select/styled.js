import styled from "styled-components";

export const SelectWrapper = styled.div`
    width: ${(props) => props.width || 20}rem;
    border: 0.1rem solid var(--neutral-color-20);
    border-radius: 2rem;
    padding: 1rem 2rem 0.8rem;
    background-color: var(--neutral-color);
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    color: var(--neutral-color-60);
    cursor: pointer;
    transition: all 0.3s ease-in;
    position: relative;
    user-select: none;

    &:hover,
    &.active {
        border-color: var(--blue-sea-color);
    }

    & .select__search {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    & input {
        width: 0;
        height: 0;
        opacity: 0;
        visibility: hidden;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        cursor: pointer;
        appearance: none;
    }

    & .select__icon {
        transform: rotate(0);
        transform-origin: center;
        transition: all 0.3s ease-in;
    }

    &.active .select__icon {
        transform: rotate(-180deg);
        transition: all 0.3s ease-in;
    }

    & .select__icon path {
        fill: var(--neutral-color-60);
    }

    &.active .select__dropdown {
        opacity: 1;
        visibility: visible;
        max-height: 20rem;
        height: auto;
        z-index: 1;
    }
`;

export const OptionWrapper = styled.div`
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: calc(100% + 0.6rem);
    left: 0;
    min-width: 100%;
    max-width: 200%;
    height: 0;
    border: 0.1rem solid var(--neutral-color-20);
    border-radius: 2rem;
    background-color: var(--neutral-color);
    padding: 1rem 0;
    overflow: auto;
    box-shadow: 0 0.4rem 2.4rem -0.2rem rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in;

    &::-webkit-scrollbar {
        width: 0rem;
    }

    & > div {
        padding: 1.2rem 2rem 0.8rem;
        transition: all 0.3s ease-in;
    }

    & > div:hover {
        background-color: var(--neutral-color-10);
        color: var(--neutral-color-100);
    }

    & > div.active {
        background-color: var(--primary-color);
        color: var(--neutral-color);
    }

    & .option__text {
        // white-space: nowrap;
        // text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
`;
