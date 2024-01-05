import styled from '@emotion/styled';

const AuthTemplateDiv = styled.div`
    width: 100%;
    height: 100%;
    background: #f3e5f5;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function AuthTemplate(props) {
    return(
        <AuthTemplateDiv>
            {props.children}
        </AuthTemplateDiv>
    );
}

export default AuthTemplate;