/**
 * Created by Kiennt
 * User: https://github.com/kiennt-coder
 * Date: 11/12/2022
 * Description: Tạo thành phần bố cục chính (Layout Main)
 * Parameters: children: phẩn từ con, rest: các tham số còn lại
 * Return: Phần tử JSX
 */

import React, { memo, Suspense, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import LayoutMainWrapper from "./styled";
import routes from "../../pages/routes";
import scrollTo from "../../utils/events/scrollTo";
import ScrollTop from "../../components/scrollTop";

function Index({ ...rest }) {
    const location = useLocation();
    const homeRegex = /((^\/$)|(^\/home$))/gm;
    const isHomePage = !!location.pathname.match(homeRegex);

    useLayoutEffect(() => {
        scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    return (
        <LayoutMainWrapper {...rest}>
            <div className="App primary-color">
                <Header
                    className={isHomePage ? "header--fixed" : "header--sticky"}
                    isIconOnly={false}
                />

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="*" element={<h1>404-Not Found</h1>} />
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                element={<route.component />}
                            />
                        ))}
                    </Routes>
                </Suspense>
                <Footer />
            </div>
            <ScrollTop />
        </LayoutMainWrapper>
    );
}

export default memo(Index);
