import styled from "styled-components";

export const CheckboxWrapper = styled.label`
    user-select: none;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(
        --${(props) => (props.disabled ? "neutral-color-60" : props.isChecked ? "primary-color-dark" : "neutral-color-40")}
    );
    transition: all 0.3s ease-in;

    & > span {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & span input {
        position: absolute;
        opacity: 0;
        cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
        height: 0;
        width: 0;
    }

    & span input ~ span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.6rem;
        height: 1.6rem;
        background: var(
            --${(props) => (props.disabled ? "neutral-color-20" : "neutral-color")}
        );
        border: 0.1rem solid
            var(
                --${(props) => (props.disabled ? "neutral-color-40" : "neutral-color-60")}
            );
        border-radius: 0.4rem;
        transition: all 0.3s ease-in;
    }

    & span input:checked ~ span {
        background: var(
            --${(props) => (props.disabled ? "neutral-color-20" : "primary-color")}
        );
        border-color: var(
            --${(props) => (props.disabled ? "neutral-color-40" : "primary-color")}
        );
    }

    & path {
        fill: var(
            --${(props) => (props.disabled ? "neutral-color-20" : "neutral-color")}
        );
    }

    & > span:last-child {
        margin-left: ${(props) =>
            props.children[1] !== undefined ? "1.2rem" : "unset"};
    }
`;

export const CheckboxLabel = styled.div`
    line-height: unset;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
`;
