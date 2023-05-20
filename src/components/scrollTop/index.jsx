import { useLayoutEffect, useState } from "react";
import scrollTo from "../../utils/events/scrollTo";
import useScrollDocument from "../../utils/events/useScrollDocument";
import { TopOutlined } from "../icon";
import { ScrollTopWrapper } from "./styled";

function ScrollTop(props) {
    const [scrollValue] = useScrollDocument("x");
    const [isShowBtn, setIsShowBtn] = useState(false);

    useLayoutEffect(() => {
        setIsShowBtn(scrollValue >= 600);
    }, [scrollValue]);

    return (
        <>
            <ScrollTopWrapper
                {...props}
                isShow={isShowBtn}
                onClick={() => scrollTo()}
                icon={<TopOutlined />}
            />
        </>
    );
}

export default ScrollTop;
