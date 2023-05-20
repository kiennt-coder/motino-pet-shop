import styled from 'styled-components'

export const FooterWrapper = styled.div`
    background: linear-gradient(102.87deg, var(--second-color-light) 6.43%, var(--second-color-light) 78.33%, var(--second-color-light-2) 104.24%);
    border-radius: 4rem 4rem 0 0;
    padding: 8rem 0 0;

    // Medium devices (tablets, less than 992px)
    @media (max-width: 991.98px) and (min-width: 768px) {
        padding-top: 6rem;
    }

    // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) {
        padding-top: 4rem;
    }
`

export const FooterBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 0;
    gap: 1rem 5rem;

    // border-bottom: 0.1rem solid var(--neutral-color-20);

    &.footerBox__navigateAndSocials {
        align-items: flex-start;
    }

    // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) {
        & {
            flex-direction: column;
        }

        &.footerBox__navigateAndSocials {
            gap: 2rem 5rem;
        }

        & .footerBox__copyright {
            order: 1;
        }

        & .footerBox__logo {
            margin-bottom: 2.2rem;
        }
    }
`

export const FooterSocials = styled.div`
    flex: 1 1 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 1rem 4rem;

    // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) {
        & {
            flex: 1 1 100%;
            width: 100%;
            justify-content: center;
        }
    }
`

export const ServiceAndPolicy = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem 4rem;
`