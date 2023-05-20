import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { CloseOutlined } from '../icon'

export const NavWrapper = styled.div`
    width: 100%;

    // Medium devices (tablets, less than 992px)
    @media (max-width: 991.98px) {
        &.nav--md {
            position: fixed;
            top: 0;
            bottom: 0;
            left: -40%;
            width: 40%;
            background-color: var(--neutral-color);
            z-index: 1000;
            padding: 3rem 0;
            transition: all .3s ease-in-out;
            overflow-x: hidden;
            overflow-y: auto;

            & .nav__search {
                display: block;
                width: 100%;
                padding: 2rem;
                border-bottom: 0.1rem solid var(--neutral-color-20);

                &  .nav__input-search {
                    min-width: 100%;
                    border: 0.1rem solid rgba(0, 0, 0, 0.5);
                }
            }

            & .nav__socials {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: flex-start;
                gap: 1.8rem;
                padding: 1.5rem 2rem;
            }
        }

        &.nav--md.active {
            left: 0;

            & ~ .nav__close-icon {
                opacity: 1;
                visibility: visible;
                z-index: 1000;
            }

            & ~ .nav__overlay {
                opacity: 1;
                visibility: visible;
                z-index: 999;
            }
        }
        
        &.nav--md nav {
            flex-direction: column;
            flex-wrap: nowrap;
            gap: 0;
        }

        &.nav--md nav a {
            width: 100%;
            text-align: left;
            padding: 1.5rem 0 1.5rem 2rem;
            border-bottom: 0.1rem solid var(--neutral-color-20);
            text-transform: uppercase;

            & span {
                font-weight: 600;
            }
        }
    }

    // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) and (min-width: 576px) {
        &.nav--md {
            width: 50%;
            left: -50%;
        }
    }

    // X-Small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        &.nav--md {
            width: 70%;
            left: -70%;
        }
    }
    
    
`

export const NavSearch = styled.div`
    display: none;
`

export const NavSocials = styled.div`
    display: none;
`

export const NavListDefault = styled.a`

`

export const NavOverlay = styled.div`
    opacity: 0;
    visibility: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    transition: all .3s linear;
`

export const CloseButton = styled(CloseOutlined)`
    position: fixed;
    top: 3%;
    right: 6%;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
    transition: all .3s linear;
`

export const NavStyled = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem 4.8rem;

    // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) {
        & {
            width: 100%;
            justify-content: ${props => props.isMenuFooter ? 'center' : 'flex-start'};
            gap: 1rem 4rem;
        }
    }
`

export const NavItemStyled = styled(Link)`
    text-transform: capitalize;
`

export const NavItemDefaultStyled = styled.span`
    text-transform: capitalize;
    // cursor: pointer;

    & .nav-dropdown__item {
        position: relative;
    }

    & .nav-dropdown__item::after {
        content: "";
        position: absolute;
        opacity: 0;
        visibility: hidden;
        top: 100%;
        left: 0%;
        width: 7.5rem;
        height: 5rem;
        background: transparent;
    }

    &:hover .nav-dropdown__item {
        cursor: pointer;
    }

    &:hover .nav-dropdown__item::after,
    &:hover .nav__dropdown {
        opacity: 1;
        visibility: visible;
    }

    &:hover .nav__dropdown.hidden {
        opacity: 0;
        visibility: hidden;
    }

    
`

export const NavDropdownWrapper = styled.div`
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background-color: var(--neutral-color);
    padding: 3.4rem 4rem;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
    border-radius: 1.2rem;
    z-index: 1;
    transition: all .3s ease-in;
`
export const NavListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.8rem;
`

export const NavListHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
`

export const NavHeaderLink = styled(Link)`
    display: inline-block;
`

export const NavListBody = styled.div`
    & .nav-dropdown__list-nav {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.8rem;
    }

    & .nav-dropdown__list-item {
        text-align: left;
        width: 100%;
        flex: 0 0 100%;
        transform: translateX(0);
        transition: all .3s ease-in;
    }

    & .nav-dropdown__list-item:hover {
        transform: translateX(1rem);
    }

    &.nav-dropdown__list-body--large .nav-dropdown__list-nav {
        flex-direction: row;
        flex-wrap: wrap;
    }

    &.nav-dropdown__list-body--large .nav-dropdown__list-item {
        --width: calc(50% - 0.4rem);
        max-width: var(--width);
        flex: 0 0 var(--width);
        text-align: left;
    }
`
