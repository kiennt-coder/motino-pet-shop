import { Text, Input, Button } from '../index'
import { RegisterEmailWrapper, FormRegisterWrapper } from './styled'

function RegisterEmail() {
    return (
        <RegisterEmailWrapper>
            <Text tagName="div" className="heading--xs neutral-color text-align-left text-transform-capitalize font-weight-bold registerEmail__text">
                <Text>
                    Register now so you don't miss our programs
                </Text>
            </Text>
            <FormRegisterWrapper>
                <Input className="formRegister__input" type='email' name="email" placeholder='Enter your Email' />
                <Button className="formRegister__button">
                    Subcribe Now
                </Button>
            </FormRegisterWrapper>
        </RegisterEmailWrapper>
    );
}

export default RegisterEmail;