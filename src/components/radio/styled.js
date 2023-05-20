import styled from 'styled-components'

export const RadioWrapper = styled.label`
user-select: none;
cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
display: inline-flex;
justify-content: space-between;
align-items: center;
height: 2rem;
color: var(--${props => props.disabled ? "neutral-color-60" : (props.isChecked ? "primary-color-dark" : "neutral-color-40")});
transition: all .3s ease-in;

& span input {
    position: absolute;
    opacity: 0;
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    height: 0;
    width: 0;
}

& span input ~ span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background: var(--${props => props.disabled ? "neutral-color-20" : "neutral-color"});
    border: 0.1rem solid var(--${props => props.disabled ? "neutral-color-40" : "neutral-color-60"});
    border-radius: 4.2rem;
    transition: all .3s ease-in;
    position: relative;
}

& span input ~ span:after {
    content: "";
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 4.2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background-color: transparent;
    transition: all .3s ease-in;
}

& span input:checked ~ span {
    background: var(--${props => props.disabled ? "neutral-color-20" : "primary-color"});
    border-color: var(--${props => props.disabled ? "neutral-color-40" : "primary-color"});
}

& span input:checked ~ span:after {
    transform: translate(-50%, -50%) scale(1);
    background-color: var(--${props => props.disabled ? "neutral-color-20" : "neutral-color"});
}

& > span:last-child {
    margin-left: ${props => props.children[1] !== undefined ? "1.2rem" : "unset"};
}
`