import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.8rem 0;
    position: relative;

    & .header__logo--md {
        display: none;
    }

    // Medium devices (tablets, less than 992px)
    @media (max-width: 991.98px) {
        & .header__logo--md {
            display: block;
        }
        
    }
`

export const HeaderMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2.5rem;

    & .header__menu {
        display: none;
    }

    // Medium devices (tablets, less than 992px)
    @media (max-width: 991.98px) {
        & .header__logo--lg {
            display: none;
        }

        & .header__menu.header__menu--md {
            display: inline-block;
        }

        // & .header__nav {
        //     display: none;
        // }
    }
`

export const HeaderAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${props => props.isIconOnly ? "2.8rem" : "1.4rem"};

    & button {
        height: unset;
        padding: 0.8rem 2.8rem;
        font-size: 1.6rem;
        line-height: 2.4rem;
    }

    & button span {
        white-space: nowrap;
    }

    & .header__action-icon {
        cursor: pointer;
    }

    // Medium devices (tablets, less than 992px)
    @media (max-width: 991.98px) {
        & .header__action-tooltip--md {
            display: none;
        }

        & .header__action--hidden {
            display: ${props => props.isIconOnly ? 'initial' : 'none'};
        }
    }
`