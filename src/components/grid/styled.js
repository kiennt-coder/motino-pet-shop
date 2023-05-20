import styled from "styled-components";

export const ContainerStyled = styled.div`
    padding-right: 13rem;
    padding-left: 13rem;
    width: 100%;

    @media only screen and (max-width: 1999.999px) and (min-width: 992px) {
        padding-right: 6rem;
        padding-left: 6rem;
    }

    @media only screen and (max-width: 991.999px) and (min-width: 768px) {
        padding-right: 4rem;
        padding-left: 4rem;
    }

    @media only screen and (max-width: 767.999px) {
        padding-right: 2rem;
        padding-left: 2rem;
    }
`;

export const RowStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: ${(props) => props.wrap || "wrap"};
    margin-right: -1.5rem;
    margin-left: -1.5rem;
`;

export const ColStyled = styled.div`
    padding: 0 1.5rem;
    margin-bottom: 1.5rem;
    // display: flex;
`;
