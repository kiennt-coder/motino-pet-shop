import { Container } from '../grid';
import Logo from '../logo';
import Navigate from '../navigate';
import RegisterEmail from '../registerEmail';
import Tooltip from '../tooltip';
import { FacebookFilled, TwitterFilled, InstagramOutlined, YoutubeFilled } from '../icon';
import {FooterWrapper, FooterBox, FooterSocials, ServiceAndPolicy} from './styled'
import { Text } from '../typography';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <FooterWrapper>
            <Container>
                <RegisterEmail />
                <FooterBox className='border-bottom footerBox__navigateAndSocials'>
                    <Navigate isMenuFooter={true}/>
                    
                    <FooterSocials>
                        <a href='/'>
                            <Tooltip title="Facebook">
                                <FacebookFilled color="neutral-color-100" />
                            </Tooltip>
                        </a>
                        <a href='/'>
                            <Tooltip title="Twitter">
                                <TwitterFilled color="neutral-color-100" />
                            </Tooltip>
                        </a>
                        <a href='/'>
                            <Tooltip title="Instagram">
                                <InstagramOutlined color="neutral-color-100" />
                            </Tooltip>
                        </a>
                        <a href='/'>
                            <Tooltip title="Youtube">
                                <YoutubeFilled color="neutral-color-100" />
                            </Tooltip>
                        </a>
                    </FooterSocials>
                </FooterBox>
                <FooterBox>
                    <Text tagName='span' className="font-weight-normal body--md neutral-color-60 footerBox__copyright">© 2022 Monito. All rights reserved.</Text>
                    <Logo className="footerBox__logo"/>
                    <ServiceAndPolicy>
                        <Link to="/service" className="font-weight-normal body--md neutral-color-60 serviceAndPolicy__link">Terms of Service</Link>
                        <Link to="/privacy-policy" className="font-weight-normal body--md neutral-color-60 serviceAndPolicy__link">Privacy Policy</Link>
                    </ServiceAndPolicy>
                </FooterBox>
            </Container>
        </FooterWrapper>
    );
}

export default Footer;