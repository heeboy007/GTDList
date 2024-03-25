import styled from '@emotion/styled';
import React = require('react');

const AuthTemplateDiv = styled.div`
    width: 100%;
    height: 100%;
    background: #f3e5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

interface HasChildren {
    children: [];
}

const AuthTemplate : React.FC = (props) => {
    return(
        <AuthTemplateDiv>
            {(props as HasChildren).children}
        </AuthTemplateDiv>
    );
}

export default AuthTemplate;