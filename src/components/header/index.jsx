/**
 * Created by Kiennt
 * User: https://github.com/kiennt-coder
 * Date: 26/12/2022
 * Description: Tạo thành phần tiêu đề (Heading Component)
 * Parameters: các thành phần giao diện
 * Return: Phần tử JSX
 */

import React, { useState, useEffect, useRef } from "react";
import { InputSearch } from "../input";
import { Button } from "../button";
import CurrencyUnit from "../currencyUnit";
import Tooltip from "../tooltip";
import Logo from "../logo";
import Navigate from "../navigate";
import { Container } from "../grid";
import { Link, useLocation } from "react-router-dom";
import {
    SearchOutlined,
    HeartOutlined,
    CartOutlined,
    HambugerOutlined,
} from "../icon";
import { HeaderWrapper, HeaderMain, HeaderAction } from "./styled";
import useScrollDocument from "../../utils/events/useScrollDocument";

const Header = ({ isIconOnly = false, ...rest }) => {
    const headerRef = useRef();
    const location = useLocation();

    const [isSeachInputShow, setIsSearchInputShow] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [widthWindow, setWidthWindow] = useState(window.innerWidth);
    const [scrollValue] = useScrollDocument("y");

    const breakpoints = {
        xs: 540,
        sm: 750,
        md: 992,
        lg: 1024,
        xl: 2048,
        xxl: 4060,
    };

    useEffect(() => {
        window.addEventListener("resize", handleEventResizeWindow);

        return () =>
            window.removeEventListener("resize", handleEventResizeWindow);
    }, []);

    useEffect(() => {
        let headerEl = headerRef.current;

        if (
            headerEl.classList.contains("header--fixed") ||
            headerEl.classList.contains("header--sticky")
        )
            if (scrollValue > 480) {
                headerEl.style.backgroundColor = "white";
                headerEl.classList.add("box-shadow");
            } else {
                headerEl.style.backgroundColor = "transparent";
                headerEl.classList.remove("box-shadow");
            }
    }, [scrollValue, location]);

    const handleEventResizeWindow = () => {
        setWidthWindow(window.innerWidth);
    };

    const handleToggleMenu = (isActive) => {
        setIsMenuActive((pre) => pre !== isActive && isActive);
    };

    const handleSeachClick = () => {
        setIsSearchInputShow((pre) => !pre);
    };

    return (
        <Container ref={headerRef} {...rest}>
            <HeaderWrapper>
                <HeaderMain>
                    <Logo className="header__logo header__logo--lg" />
                    <HambugerOutlined
                        onClick={handleToggleMenu}
                        className="header__menu header__menu--md"
                        color="neutral-color-100"
                    />
                    <Navigate
                        className="header__nav nav--md"
                        isMenuFooter={widthWindow < breakpoints.md}
                        isMenuActive={isMenuActive}
                        onClose={handleToggleMenu}
                    />
                </HeaderMain>

                <Logo className="header__logo header__logo--md" />

                <HeaderAction isIconOnly={isIconOnly}>
                    {isIconOnly ? (
                        <>
                            {isSeachInputShow &&
                                widthWindow >= breakpoints.md && (
                                    <InputSearch
                                        name="search"
                                        placeholder="Search something here!"
                                        onClick={handleSeachClick}
                                    />
                                )}
                            {isSeachInputShow !== true && (
                                <Tooltip
                                    className="header__action-tooltip--md"
                                    title="Tìm kiếm"
                                >
                                    {/* <Link to=""> */}
                                    <SearchOutlined
                                        className="header__action-icon"
                                        color="primary-color"
                                        onClick={handleSeachClick}
                                    />
                                    {/* </Link> */}
                                </Tooltip>
                            )}
                            <Tooltip
                                className="header__action-tooltip--md"
                                title="Yêu thích"
                            >
                                <Link to="/favorite">
                                    <HeartOutlined
                                        className="header__action-icon"
                                        color="primary-color"
                                    />
                                </Link>
                            </Tooltip>
                            <Tooltip
                                placement={
                                    widthWindow >= breakpoints.md
                                        ? "top"
                                        : "left"
                                }
                                title="Giỏ hàng"
                            >
                                <Link to="/cart">
                                    <CartOutlined
                                        className="header__action-icon"
                                        color="primary-color"
                                    />
                                </Link>
                            </Tooltip>
                        </>
                    ) : (
                        <>
                            <InputSearch
                                className="header__action--hidden"
                                name="search"
                                placeholder="Search something here!"
                            />
                            <Button
                                size="small"
                                className="font-weight-bold body--xl header__action--hidden"
                            >
                                Join the community
                            </Button>
                            <CurrencyUnit className="header__action--hidden" />
                            <Tooltip
                                placement={
                                    widthWindow >= breakpoints.md
                                        ? "top"
                                        : "left"
                                }
                                title="Giỏ hàng"
                            >
                                <Link to="/cart">
                                    <CartOutlined
                                        className="header__action-icon"
                                        color="primary-color"
                                    />
                                </Link>
                            </Tooltip>
                        </>
                    )}
                </HeaderAction>
            </HeaderWrapper>
        </Container>
    );
};

export default Header;
