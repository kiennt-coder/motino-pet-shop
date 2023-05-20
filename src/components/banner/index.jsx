import { Button, ButtonOutlined } from "../button";
import { RightCircleOutlined } from "../icon";
import { Text } from "../typography";
import { Link } from "react-router-dom";
import {
    BannerAction,
    BannerContent,
    BannerOverlay,
    BannerWrapper,
} from "./style";

function Banner({
    layout,
    align = "left",
    reverse,
    title,
    subTitle,
    content,
    viewLink,
    explodeLink,
    className,
    color,
    ...props
}) {
    return (
        <>
            <BannerWrapper className={className} {...props} layout={layout}>
                <BannerContent className={color || ""} align={align}>
                    <Text
                        tagName="h4"
                        className={`${
                            layout.includes("banner-bigger")
                                ? "heading--xxxl"
                                : "heading--xxl"
                        } font-weight-bolder text-transform-capitalize banner-content__heading`}
                    >
                        {title}
                    </Text>
                    <Text
                        tagName="h5"
                        className="heading--md font-weight-bold text-transform-capitalize banner-content__sub-heading"
                    >
                        {subTitle}
                    </Text>
                    <Text
                        tagName="p"
                        className="body--xl font-weight-normal neutral-color-80 banner-content__body"
                    >
                        {content}
                    </Text>
                    <BannerAction align={align} reverse={reverse}>
                        <Link to={viewLink}>
                            <ButtonOutlined
                                className="text-transform-capitalize banner-action__btn banner-action__btn--bg-transparent"
                                icon={<RightCircleOutlined />}
                            >
                                view intro
                            </ButtonOutlined>
                        </Link>
                        <Link to={explodeLink}>
                            <Button className="text-transform-capitalize banner-action__btn">
                                explode now
                            </Button>
                        </Link>
                    </BannerAction>
                </BannerContent>

                <BannerOverlay />
            </BannerWrapper>
        </>
    );
}

export default Banner;
