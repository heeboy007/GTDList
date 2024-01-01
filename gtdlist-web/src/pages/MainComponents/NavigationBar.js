/** @jsxImportSource @emotion/react */
import { NavLink } from "react-router-dom";
import { css } from "@emotion/react";

import logo from '../../resources/FlowForge-Longer.svg';

function NaviGationBar() {
    return (
        <div 
            css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0 2%;
            height: 70px;
        `}>
            <img 
                src={logo} 
                alt="logo"
                css={css`
                    height: 100%;
                `}/>
            <div className="headerButtons" css={css`
                display: flex;
                align-items: center;
                a {
                    text-decoration: none;
                    font-family: 'SCDream';
                    font-size: 20px;
                    margin: 10px;
                    padding: 10px 15px;
                    border-radius: 15px;
                }
            `}>
                <NavLink to='/login' css={css`
                    background-color: #eee;
                    color: black;
                `}>로그인</NavLink>
                <NavLink to='/register' css={css`
                    background-color: #ff1744;
                    color: white;
                `}>회원가입</NavLink>
            </div>
        </div>
    );
}

export default NaviGationBar;