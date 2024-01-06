/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-family: 'SCDream';
    font-size: 20px;
    padding: 10px 30px;
    border-radius: 15px;

    &.mybutton-red {
        color: white;
        background-color: #ff1744;
    }

    &.mybutton-gray {
        background-color: #eee;
    }
`;

function MyButton(props) {
    const color = props.color || 'red';
    const mapColorToStyle = {
        "red": 'mybutton-red',
        "gray": 'mybutton-gray'
    };

    return (
        <StyledNavLink
            className={mapColorToStyle[color]}
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