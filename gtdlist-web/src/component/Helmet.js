import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';

import sample_thumbnail from '../temp_samples/member1.jpg';
import logo from '../resources/FlowForge-Longer.svg';

const Nav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px;
box-shadow: 2px -2px 5px 0px;
margin-bottom: 10px;

img {
    height: 50px;
}

a.logoLink {
    font-size: 2rem;
    font-weight: bold;
    padding: 0;
    color: black;
    text-decoration: none;
}

div {
    display: flex;
    flex-direction: row;
    align-items: center;
}

a.menu i {
    width: 20px;
    height: 20px;
    color: black;
    margin-right: 20px;
}

a.thumbnail img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
}
`;

function Helmet() {
    return (
        <Nav className="header">
            <NavLink className="logoLink" to="/"><img src={logo} alt="logo"></img></NavLink>
            <div>
                <NavLink className="menu" to="/menu"><i className="fa-solid fa-bars"></i></NavLink>
                <NavLink className="thumbnail" to="/profile"><img src={sample_thumbnail} alt="thumbnail"></img></NavLink>
            </div>
        </Nav>
    );
}

export default Helmet;