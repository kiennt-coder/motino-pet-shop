import styled from 'styled-components'

export const MessageWrapper = styled.span`
    text-align: ${props => props.align || "left"};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 0.55rem;


    & path {
        fill: var(--${props => {
            switch(props.type) {
                case "primary":
                    return "primary-color"
                case "warning":
                    return "orange-shine-color"
                case "error":
                    return "pink-red-color"
                case "success":
                    return "green-light-color"
                default:
                    return "neutral-color-80"
            }
        }});
    }
`

export const MessageStyled = styled.span`
    color: var(--${props => {
        switch(props.type) {
            case "primary":
                return "primary-color"
            case "warning":
                return "orange-shine-color"
            case "error":
                return "pink-red-color"
            case "success":
                return "green-light-color"
            default:
                return "neutral-color-80"
        }
    }});
`