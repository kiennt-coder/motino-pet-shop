import styled from "styled-components";
import { Heading } from "../typography";

export const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0.8rem;
    border-radius: 1.2rem;
    gap: 0.5rem;
`;

export const PostBanner = styled.div`
    width: 100%;
    padding-top: 65%;
    background: ${({ src }) => `url('${src}') center / cover no-repeat`};
    border-radius: 1rem;
    overflow: hidden;
    flex-shrink: 0;
`;

export const PostContent = styled.div`
    flex-shrink: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 0.5rem;
`;

export const PostCategory = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
    flex-wrap: wrap;
`;

export const PostTitle = styled(Heading)`
    flex: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
`;

export const PostSummary = styled.div`
    margin-top: auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    margin-bottom: 0.5rem;
`;
