import styled from '@emotion/styled';
import { useState } from 'react';
//import { register } from '../../api/auth';

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

const ErrorSpan = styled.span`
    color: red;
    margin: 20px 0 10px 0;
`;

function RegisterForm() {
    const [ form, setForm ] = useState({
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const error = '';

    const handleFormChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return(
        <StyledForm>
            <Logo src={logo} alt='logo'></Logo>
            Register To FlowForge.
            <StyledDiv>
                <Label>Email Address</Label>
                <Input 
                    type='text' 
                    name='email' 
                    value={form.email}
                    onChange={handleFormChange}></Input>
                <Label>Password</Label>
                <Input 
                    type='password' 
                    name='password' 
                    value={form.password}
                    onChange={handleFormChange}></Input>
                <Label>Confirm Password</Label>
                <Input 
                    type='password' 
                    name='passwordConfirm' 
                    value={form.passwordConfirm}
                    onChange={handleFormChange}></Input>
                <ErrorSpan>{error}</ErrorSpan>
                <MyButton onClick={() => {
                    //TODO do register here
                }}>Register</MyButton>
            </StyledDiv>
        </StyledForm>
    );
}

export default RegisterForm;