import styled from 'styled-components'

export const InputWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    font-size: 1.4rem;
    margin-bottom: 2.4rem;
    width: ${props => props.width || 49.3}rem;

    & .input__label-wrap {
        margin-bottom: 1rem;
    }

    & .input__wrap {
        position: relative;
    }

    & .input__icon--password {
        font-size: 2.8rem;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 4rem;
        vertical-align: center;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        user-select: none;
    }

    & .input__icon--password path {
        transition: all .3s ease-in;
    }

    & .input__icon--password:hover path {
        fill: var(--blue-sea-color);
    }

    & .input__message {
        margin-top: 1rem;
    }
`

export const InputStyled = styled.input`
    outline: none;
    padding: 1.7rem ${props => props.type.includes("password") ? "4rem" : "2.8rem"} 1.4rem 2.8rem;
    border: 0.1rem solid var(--neutral-color-40);
    border-radius: 0.8rem;
    color: var(--neutral-color-80);
    width: 100%;
    height: unset;
    font-family: inherit;
    font-size: 1.4rem;
    font-weight: 500;
    transition: all .3s ease-in;

    &::placeholder {
        color: var(--neutral-color-40);
    }

    &:hover,
    &:focus {
        border-color: var(--blue-sea-color);
    }
`
export const InputSearchWrapper = styled.div`
    position: relative;
    min-width: 28rem;

    & .input-search__icon {
        position: absolute;
        top: 50%;
        left: 1.5rem;
        transform: translateY(-50%);
        cursor: pointer;
    }

    & .input-search__icon path {
        fill: var(--neutral-color-60);
        transition: all .3s ease-in;
    }

    & .input-search__icon:hover path {
        fill: var(--blue-sea-color);
    }

    & input {
        padding-top: 1.5rem;
        padding-bottom: 1.2rem;
        padding: 1.6rem 2rem 1.3rem 4.5rem;
        border-radius: 5.7rem;
        border: none;
        background-color: var(--neutral-color);
    }
`