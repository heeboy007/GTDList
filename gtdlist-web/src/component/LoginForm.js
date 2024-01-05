import styled from '@emotion/styled';

import logo from '../resources/FlowForge.svg';

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
    padding: 6px;
    font-size: 1.5rem;
    border-radius: 12px;
    border: 1px solid #ccc;
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

            </StyledDiv>
        </StyledForm>
    );
}

export default LoginForm;