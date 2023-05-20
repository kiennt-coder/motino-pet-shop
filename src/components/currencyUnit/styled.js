import styled from 'styled-components'

export const CurrencyUnitWrapper = styled.div`
    & .currency-unit__select {
        width: 10.4rem;
        border: none;
        padding: 1.6rem 2rem 0.8rem;
        background-color: unset;
        color: var(--primary-color-dark);
    }

    & .select__placeholder {
        padding-left: 2.5rem;
        position: relative;
    }

    & .select__placeholder img {
        left: 0;
    }

    & .select__placeholder span {
        vertical-align: -0.3rem;
    }

    & .currency-unit__select path {
        fill: var(--primary-color-dark);
    }

    & .select__dropdown {
        border: unset;
        border-radius: 1rem;
        box-shadow: 0px 4px 14px rgb(0 0 0 / 15%);
        z-index: 2;
    }

    & .currency-unit__select.active .select__dropdown {
        height: auto;
    }

    & .currency-unit__option {
        position: relative;
        padding-left: 3.5rem;
    }
`

export const CurrencyUnitIcon = styled.img`
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
`