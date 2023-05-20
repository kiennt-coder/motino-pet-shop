import styled from "styled-components";

export const SliderWrapper = styled.div``;

export const SliderBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    transition: all 0.3s linear;
    gap: 1rem;

    scroll-behavior: smooth;

    user-select: none;
`;

export const SliderItem = styled.div`
    flex-shrink: 0;
    flex-grow: 1;
    width: ${({ width }) => width || "20%"};
    scroll-snap-align: start;
    scroll-snap-stop: always;
    padding: 1rem;
`;
