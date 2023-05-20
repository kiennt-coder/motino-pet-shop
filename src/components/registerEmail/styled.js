import styled from "styled-components";

export const RegisterEmailWrapper = styled.div`
    background: var(--primary-color);
    border-radius: 1.6rem;
    padding: 3.2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    & .registerEmail__text {
        max-width: 37.9rem;
    }

    // Medium devices (tablets, less than 992px)
    @media (max-width: 991.98px) { 
        flex-direction: column;

        & .registerEmail__text {
            text-align: center;
            max-width: 37.9rem;
        }
    }

    // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) and (min-width: 576px) {
        & .registerEmail__text {
            font-size: 2rem;
            line-height: 3.2rem;
        }
    }

    // X-Small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        & .registerEmail__text {
            font-size: 1.8rem;
            line-height: 3rem;
        }
    }
`

export const FormRegisterWrapper = styled.form`
    flex: 1 1 auto;
    background: var(--neutral-color);
    border-radius: 1.4rem;
    user-select: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.2rem;
    gap: 1.2rem;

    & .formRegister__input,
    & .formRegister__button {
        border-radius: 0.8rem;
    }

    & .formRegister__input {
        margin: 0;
        flex: 1 1 auto;
    }

    & .formRegister__button {
        width: 16.3rem;
    }

    // Large devices (desktops, less than 1200px)
    @media (max-width: 1199.98px) and (min-width: 992px) {
        & .formRegister__input {
            width: 34rem;

            & input {
                width: 100%;
            }
        }
    }

    // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) { 
        & {
            flex-direction: column;
            width: 100%;
        }

        & .formRegister__input {
            width: 100%;
        }

        & .formRegister__button {
            width: 100%;
        }
    }
`