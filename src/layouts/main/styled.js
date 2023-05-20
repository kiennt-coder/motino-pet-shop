/**
 * Created by Kiennt
 * User: https://github.com/kiennt-coder
 * Date: 11/12/2022
 * Description: Tạo thành phần bọc bố cục chính (Layout Main wrapper)
 * Parameters:
 * Return: Phần tử JSX được tạo với styled
 */

import styled from "styled-components";

const LayoutMainWrapper = styled.div`
    max-width: 144rem;
    width: 100%;
    margin: 0 auto;

    & .header--sticky {
        position: sticky;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1;
        background-color: var(--neutral-color) !important;
    }

    & .header--fixed {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1;
        background-color: transparent;

        transition: all 0.3s ease;
    }
`;

export default LayoutMainWrapper;
