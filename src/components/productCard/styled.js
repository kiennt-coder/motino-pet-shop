import styled from "styled-components";

export const ProductCard = styled.div`
    display: inline-flex;
    flex-direction: column;
    max-width: ${({ width }) => (width ? `${width}rem` : "100%")};
    width: 100%;
    background-color: var(--neutral-color);
    // box-shadow: 0 0.4rem 2.8rem -0.2rem rgba(0, 0, 0, 0.08);
    border-radius: 1.2rem;
    padding: 0.8rem;
    text-align: ${({ align }) => align || "left"};
`;

export const ProductCardImage = styled.div`
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    padding-top: 100%;
    border-radius: 1rem;
    background: ${({ image }) =>
        image ? `url('${image}') center / cover no-repeat` : ""};
`;

export const ProductCardContent = styled.div`
    margin-top: 0.8rem;
    padding: 0.8rem;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;

    & .product-card__heading {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;

export const ProductCardDescription = styled.div`
    color: var(--neutral-color-60);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    & .product-card__dot {
        font-size: 0.3rem;
        margin: 0 0.8rem;
    }

    & .product-card__dot path {
        fill: var(--neutral-color-60);
    }
`;

export const ProductCardPrice = styled.div`
    margin-top: auto;
`;

export const ProductCardGift = styled.div`
    flex-shrink: 0;
    background-color: var(--second-color-light);
    padding: 0.5rem 1rem;
    border-radius: 0.8rem;
    color: var(--primary-color);
    display: flex;
    align-items: center;
    margin-top: 1rem;

    & .product-card__gift-dot {
        font-size: 0.4rem;
        margin: 0 1rem;
    }

    & .product-card__gift-dot path {
        fill: var(--primary-color);
    }

    & .product-card__gift-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
