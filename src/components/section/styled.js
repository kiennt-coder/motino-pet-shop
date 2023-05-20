import styled from "styled-components";

export const SectionWrapper = styled.div``;

export const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SectionHeaderTitle = styled.h3`
    display: flex;
    align-items: ${({ layout }) =>
        layout && layout.includes("vertical") ? "flex-start" : "center"};
    justify-content: flex-start;
    flex-direction: ${({ layout }) =>
        layout && layout.includes("vertical") ? "column" : "row"};
    gap: ${({ layout }) =>
        layout && layout.includes("vertical") ? "0" : "0.5rem"};
    text-align: left;

    & .section__sub-title {
        text-transform: lowercase;
        &:first-letter {
            text-transform: uppercase;
        }
    }

    & .section__main-title {
        text-transform: capitalize;
    }
`;

export const SecitonAction = styled.div`
    // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) {
        &.section__action-header {
            display: none;
        }
    }
`;

export const SectionBody = styled.div`
    margin-top: 2rem;
`;

export const SectionFooter = styled.div`
    display: none;

    // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) {
        & {
            display: block;
        }
    }
`;
