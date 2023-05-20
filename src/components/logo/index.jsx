import {LogoWrapper, LogoStyled, LogoSloganStyled} from './styled'
import LogoImg from '../../assets/images/Logo.svg'

function Logo({className, ...props}) {
    return (
        <LogoWrapper className={className}>
            <LogoStyled src={LogoImg} alt="Motino - Pets for Best" />
            <LogoSloganStyled level="2" className="font-weight-normal body--md" title="Pets for Best">
                Pets for Best
            </LogoSloganStyled>
        </LogoWrapper>
    );
}

export default Logo;