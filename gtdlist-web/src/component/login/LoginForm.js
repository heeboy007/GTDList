import styled from '@emotion/styled';

import logo from '../../resources/FlowForge.svg';
import MyButton from '../../common/MyButton';

const StyledForm = styled.form`
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 2px solid #aaa;
    border-radius: 12px;
    font-family: 'SCDream';
`;

const StyledDiv = styled.div`
    width: 60%;
    padding: 5%;
    margin: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
    border: 2px solid #aaa;
    border-radius: 12px;
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

const Input = styled.input`
    width: 100%;
    margin: 6px;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 12px;
    border: 2px solid #bbb;
`;

const Label = styled.label`
    width: 100%;
    padding: 12px 0;
`;

function LoginForm(props) {
    return(
        <StyledForm>
            <Logo src={logo} alt='logo'></Logo>
            Sign In To FlowForge.
            <StyledDiv>
                <Label>Username or Email Address</Label>
                <Input type='username' name='username'></Input>
                <Label>Password</Label>
                <Input type='password' name='password'></Input>
                <MyButton>Sign In</MyButton>
            </StyledDiv>
        </StyledForm>
    );
}

export default LoginForm;