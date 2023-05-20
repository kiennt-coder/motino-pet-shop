import styled from "styled-components";
import { Text } from "../typography";

export const TagWrapper = styled.div`
    padding: 0.2rem 1rem;
    border-radius: 2.8rem;
    background-color: var(--blue-sea-color);
    color: var(--neutral-color);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    user-select: none;
`;

export const TagText = styled(Text)`
    color: inherit;
`;
