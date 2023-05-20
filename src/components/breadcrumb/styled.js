import { Link } from "react-router-dom";
import styled from "styled-components";
import { Text } from "../typography";

export const BreadcrumbWrapper = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    padding: 0.5rem 0;
`;

export const BreadcrumbItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
        width: 0.6em;
        height: 0.6em;
        & path {
            stroke: ${({ color }) => `var(--${color})` || "inherit"};
        }
    }
`;

export const BreadcrumbText = styled(Text)``;

export const BreadcrumbLink = styled(Link)`
    color: inherit;
    transition: all 0.3s ease;

    &:hover {
        color: var(--primary-color);
    }
`;
