import styled from "styled-components";

import BannerBiggerLight from "../../assets/images/banner-bigger-light.svg";
import BannerBiggerLightSecond from "../../assets/images/banner-bigger-light-2.svg";
import BannerBiggerLightThird from "../../assets/images/banner-bigger-light-3.svg";
import BannerBiggerLightFourth from "../../assets/images/banner-bigger-light-4.svg";
import BannerBiggerLightFifth from "../../assets/images/banner-bigger-light-5.svg";
import BannerBiggerOpacity from "../../assets/images/banner-bigger-opacity.svg";
import BannerBiggerOpacitySecond from "../../assets/images/banner-bigger-opacity-2.svg";
import BannerBiggerOpacityThird from "../../assets/images/banner-bigger-opacity-3.svg";
import BannerBiggerImage from "../../assets/images/banner-bigger-image.png";

import BannerOneLight from "../../assets/images/banner-one-color-light.svg";
import BannerOneLightSecond from "../../assets/images/banner-one-color-light-2.svg";
import BannerOneOpacity from "../../assets/images/banner-one-color-opacity.svg";
import BannerOneOpacitySecond from "../../assets/images/banner-one-color-opacity-2.svg";
import BannerOneImage from "../../assets/images/banner-one-color-image.png";

import BannerSecondLight from "../../assets/images/banner-second-color-light.svg";
import BannerSecondOpacity from "../../assets/images/banner-second-color-opacity.svg";
import BannerSecondImage from "../../assets/images/banner-second-color-image.png";

import BannerThreeLight from "../../assets/images/banner-three-color-light.svg";
import BannerThreeLightSecond from "../../assets/images/banner-three-color-light-2.svg";
import BannerThreeImage from "../../assets/images/banner-three-color-image.png";

const handleBackground = (layout, breakpoint = "") => {
    let background = "";
    switch (layout) {
        case "banner-one": {
            if (breakpoint.includes("md")) {
                background = `
                    url(${BannerOneImage}) -25% 100% / 65% no-repeat,
                    url(${BannerOneLight}) 100% 0% / 60% 100% no-repeat,
                    url(${BannerOneOpacity}) 0% 100% / 60% 90% no-repeat,
                    var(--primary-color);
                `;
            } else if (breakpoint.includes("sm")) {
                background = `
                    url(${BannerOneImage}) 0% 100% / contain no-repeat,
                    url(${BannerOneLightSecond}) 0% 0% / 100% 68% no-repeat,
                    url(${BannerOneOpacitySecond}) 0% 100% / contain no-repeat,
                    var(--primary-color);
                `;
            } else {
                background = `
                    url(${BannerOneImage}) 0% 50% / contain no-repeat,
                    url(${BannerOneLight}) 100% 0% / 60% 100% no-repeat,
                    url(${BannerOneOpacity}) 0% 100% / 60% 90% no-repeat,
                    var(--primary-color);
                `;
            }
            return background;
        }
        case "banner-two": {
            if (breakpoint.includes("md")) {
                background = `
                    url(${BannerSecondImage}) 130% 0% / contain no-repeat,
                    url(${BannerSecondLight}) -4% 0% / 60% 100% no-repeat,
                    url(${BannerSecondOpacity}) 100% 100% / 60% 90% no-repeat,
                    var(--second-color-dark-2);
                `;
            } else if (breakpoint.includes("sm")) {
                background = `
                    url(${BannerSecondImage}) 100% 100% / contain no-repeat,
                    url(${BannerSecondLight}) 0% 0% / 135% 58% no-repeat,
                    url(${BannerSecondOpacity}) 100% 100% / 110% 55% no-repeat,
                    var(--second-color-dark-2);
                `;
            } else {
                background = `
                    url(${BannerSecondImage}) 100% 50% / contain no-repeat,
                    url(${BannerSecondLight}) -4% 0% / 60% 100% no-repeat,
                    url(${BannerSecondOpacity}) 100% 100% / 60% 90% no-repeat,
                    var(--second-color-dark-2);
                `;
            }
            return background;
        }
        case "banner-three": {
            if (breakpoint.includes("md")) {
                background = `
                    url(${BannerThreeImage}) 0% 100% / 45% no-repeat,
                    url(${BannerThreeLight}) 100% 0% / 70% 100% no-repeat,
                    linear-gradient(102.87deg,
                    var(--second-color-light) 6.43%,
                    var(--second-color-light) 78.33%,
                    var(--second-color-light-2) 104.24%);

                `;
            } else if (breakpoint.includes("sm")) {
                background = `
                    url(${BannerThreeImage}) 50% 100% / 100% no-repeat,
                    url(${BannerThreeLightSecond}) 0% 110% / contain no-repeat,
                    linear-gradient(102.87deg,
                    var(--second-color-light) 6.43%,
                    var(--second-color-light) 78.33%,
                    var(--second-color-light-2) 104.24%);

                `;
            } else {
                background = `
                    url(${BannerThreeImage}) 10% 100% / 50% no-repeat,
                    url(${BannerThreeLight}) 100% 0% / 70% 110% no-repeat,
                    linear-gradient(102.87deg,
                    var(--second-color-light) 6.43%,
                    var(--second-color-light) 78.33%,
                    var(--second-color-light-2) 104.24%);

                `;
            }
            return background;
        }
        case "banner-bigger": {
            if (breakpoint.includes("md")) {
                background = `
                url(${BannerBiggerImage}) 130% 100% / 66% no-repeat,
                url(${BannerBiggerLight}) 102% 150% / 50% 85% no-repeat,
                url(${BannerBiggerLightSecond}) 0% 0% / 31% no-repeat,
                url(${BannerBiggerLightThird}) 8.5% 29.5% / 5% no-repeat,
                url(${BannerBiggerOpacityThird}) 50% 35% / 2.5% no-repeat,
                url(${BannerBiggerLightFourth}) 50.5% 33% / 3% no-repeat,
                url(${BannerBiggerLightFifth}) 54% 20% / 1.5% no-repeat,
                url(${BannerBiggerOpacity}) 92% 200% / 50% 85% no-repeat,
                url(${BannerBiggerOpacitySecond}) 0% 100% / 50% no-repeat,
                linear-gradient(102.87deg, var(--second-color-light) 6.43%,
                var(--second-color-light) 78.33%,
                var(--second-color-light-2) 104.24%);
            `;
            } else if (breakpoint.includes("sm")) {
                background = `
                    url(${BannerBiggerImage}) 50% 100% / 130% no-repeat,
                    url(${BannerBiggerLight}) -82% 172% / 120% 80% no-repeat,
                    url(${BannerBiggerLightSecond}) 0% 0% / 120% 13% no-repeat,
                    url(${BannerBiggerLightThird})  90% 23% / 5% no-repeat,
                    url(${BannerBiggerOpacityThird}) 66% 26% / 3.5% no-repeat,
                    url(${BannerBiggerLightFourth}) 67.5% 25% / 4% no-repeat,
                    url(${BannerBiggerLightFifth}) 54% 20% / 1.5% no-repeat,
                    url(${BannerBiggerOpacity}) 392% 244% / 98% 85% no-repeat,
                    url(${BannerBiggerOpacitySecond}) 0% 100% / 50% no-repeat,
                    linear-gradient(102.87deg, var(--second-color-light) 6.43%,
                    var(--second-color-light) 78.33%,
                    var(--second-color-light-2) 104.24%);
                `;
            } else {
                background = `
                    url(${BannerBiggerImage}) 85% 100% / 55% no-repeat,
                    url(${BannerBiggerLight}) 95% 150% / 55% 80% no-repeat,
                    url(${BannerBiggerLightSecond}) 0% 0% / 31% no-repeat,
                    url(${BannerBiggerLightThird}) 8.5% 29.5% / 5% no-repeat,
                    url(${BannerBiggerOpacityThird}) 50% 35% / 2.5% no-repeat,
                    url(${BannerBiggerLightFourth}) 50.5% 33% / 3% no-repeat,
                    url(${BannerBiggerLightFifth}) 54% 20% / 1.5% no-repeat,
                    url(${BannerBiggerOpacity}) 85% 200% / 55% 80% no-repeat,
                    url(${BannerBiggerOpacitySecond}) 0% 100% / 50% no-repeat,
                    linear-gradient(102.87deg, var(--second-color-light) 6.43%,
                    var(--second-color-light) 78.33%,
                    var(--second-color-light-2) 104.24%);
                `;
            }
            return background;
        }
        default:
            return `
                url(${BannerSecondImage}) 100% 50% / contain no-repeat,
                url(${BannerSecondLight}) -4% 0% / 60% 100% no-repeat,
                url(${BannerSecondOpacity}) 100% 100% / 60% 90% no-repeat,
                var(--second-color-dark-2);
            `;
    }
};

export const BannerWrapper = styled.div`
    width: 100%;
    position: relative;
    padding: ${({ layout }) =>
        layout.includes("banner-bigger")
            ? "18rem 13rem 20.8rem"
            : "6.4rem 8.5rem 5.6rem"};
    border-radius: ${({ layout }) =>
        layout.includes("banner-bigger") ? "unset" : "2rem"};
    overflow: hidden;
    background: ${({ layout }) => handleBackground(layout)};

    @media only screen and (max-width: 1999.999px) and (min-width: 992px) {
        ${({ layout }) =>
            layout.includes("banner-bigger")
                ? `
                padding-right: 6rem;
                padding-left: 6rem;
            `
                : `
                padding-right: 6rem;
                padding-left: 6rem;
            `}
    }

    @media only screen and (max-width: 991.999px) and (min-width: 768px) {
        background: ${({ layout }) => handleBackground(layout, "md")};
        ${({ layout }) =>
            layout.includes("banner-bigger")
                ? `
                padding-top: 12rem;
                padding-bottom: 8rem;
                padding-right: 4rem;
                padding-left: 4rem;
            `
                : `
                padding-right: 4rem;
                padding-left: 4rem;
            `}
    }

    @media only screen and (max-width: 767.999px) {
        background: ${({ layout }) => handleBackground(layout, "sm")};
        ${({ layout }) => {
            if (layout.includes("banner-bigger"))
                return `
                    padding-right: 2rem;
                    padding-left: 2rem;
                    padding-top: 14rem;
                    padding-bottom: 39.5rem;
                `;
            else if (layout.includes("banner-three"))
                return `
                    padding-right: 2rem;
                    padding-left: 2rem;
                    padding-bottom: 15rem;
                `;
            else
                return `
                    padding-right: 2rem;
                    padding-left: 2rem;
                    padding-bottom: 30rem;
                `;
        }}
    }
`;

export const BannerContent = styled.div`
    max-width: 48rem;
    width: 100%;
    text-align: ${(props) => props.align || "left"};
    margin-left: ${(props) =>
        props.align.includes("right") ? "auto" : "unset"};

    & .banner-content__heading,
    & .banner-content__sub-heading,
    & .banner-content__body {
        text-align: justify;
        text-align-last: ${(props) => props.align || "left"};
    }

    & .banner__icon {
        vertical-align: 0;
        margin-left: 1.6rem;
    }

    &.text-white {
        color: var(--neutral-color);

        & .banner-content__body {
            color: inherit;
        }

        & .banner-action__btn {
            color: var(--neutral-color);
            border-color: var(--neutral-color);

            & path {
                fill: var(--neutral-color);
            }

            &:not(.banner-action__btn--bg-transparent) {
                color: var(--primary-color);
                background-color: var(--neutral-color);

                &:hover {
                    background-color: var(--primary-color-light);
                    color: var(--neutral-color);
                }

                &:focus {
                    background-color: var(--primary-color-normal);
                    color: var(--neutral-color);
                }
            }

            &:hover {
                border-color: var(--primary-color-light);
            }

            &:focus {
                border-color: var(--primary-color-normal);
            }
        }
    }

    @media only screen and (max-width: 991.999px) and (min-width: 768px) {
        & {
            max-width: 36rem;
        }
    }

    @media only screen and (max-width: 767.999px) {
        & {
            max-width: 100%;
        }

        & .banner-content__heading,
        & .banner-content__sub-heading,
        & .banner-content__body {
            text-align: justify;
            text-align-last: center;
        }

        & .banner-content__heading,
        & .banner-content__sub-heading {
            text-align: center;
        }

        &.text-white {
            color: var(--primary-color);

            & .banner-content__body {
                color: inherit;
            }

            & .banner-action__btn {
                color: var(--primary-color);
                border-color: var(--primary-color);

                & path {
                    fill: var(--primary-color);
                }

                &:hover {
                    background-color: var(--primary-color-light);
                    color: var(--neutral-color);

                    & path {
                        fill: var(--neutral-color);
                    }
                }

                &:focus {
                    background-color: var(--primary-color-normal);
                    color: var(--neutral-color);

                    & path {
                        fill: var(--neutral-color);
                    }
                }

                &:not(.banner-action__btn--bg-transparent) {
                    color: var(--neutral-color);
                    background-color: var(--primary-color);

                    &:hover {
                        background-color: var(--primary-color-light);
                        color: var(--neutral-color);
                    }

                    &:focus {
                        background-color: var(--primary-color-normal);
                        color: var(--neutral-color);
                    }
                }

                &:hover {
                    border-color: inherit;
                }

                &:focus {
                    border-color: inherit;
                }
            }
        }
    }
`;

export const BannerOverlay = styled.div``;

export const BannerAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${(props) =>
        props.align.includes("right") || props.reverse
            ? "flex-end"
            : "flex-start"};
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
    margin-top: 2rem;
    gap: 2rem;

    & button {
        width: 16.4rem;
        user-select: none;

        &.banner-action__btn--bg-transparent {
            background-color: transparent;

            &:hover {
                background-color: var(--primary-color-light);
            }

            &:focus {
                background-color: var(--primary-color-normal);
            }
        }
    }

    @media only screen and (max-width: 767.999px) {
        & {
            gap: 0.5rem;
            justify-content: center;
        }
    }
`;
