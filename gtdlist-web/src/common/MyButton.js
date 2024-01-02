/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-family: 'SCDream';
    font-size: 20px;
    padding: 10px 30px;
    border-radius: 15px;
`;

const RedButtonStyle = css`
    color: white;
    background-color: #ff1744;
`;

const GrayButtonStyle = css`
    background-color: #eee;
`;

function MyButton(props) {
    const color = props.color || 'red';
    const mapColorToStyle = {
        "red": RedButtonStyle,
        "gray": GrayButtonStyle
    };

    return (
        <StyledNavLink
            css={mapColorToStyle[color]}
            to={props.to}
            onClick={(e) => {
                if(props.onClick !== undefined)
                    e.preventDefault();
                props.onClick();
            }}>
                {props.children}
        </StyledNavLink>
    );
}

export default MyButton;