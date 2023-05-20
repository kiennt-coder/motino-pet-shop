import styled, { css } from "styled-components";
import { Button } from "../button";

const onShowBtn = (isShow) => {
    return isShow
        ? css`
              opacity: 1;
              visibility: visible;
          `
        : css`
              opacity: 0;
              visibility: hidden;
          `;
};

export const ScrollTopWrapper = styled(Button)`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: unset;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ isShow }) => onShowBtn(isShow)}
    transition: all 0.3s linear;
`;
