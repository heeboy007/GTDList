/** @jsxImportSource @emotion/react */
import { NavLink } from "react-router-dom";
import { css } from "@emotion/react";

import logo from './temp_samples/FlowForge-Longer.svg';

function MainView() {
    return (
        <div 
            className="mainView"
            css={css`
                width: 960px;
                height: 100%;
                max-width: 960px;
                display: flex;
                flex-direction: column;
                padding: 0;
                margin: 0 auto;
                box-sizing: content-box;
                background: white;
                overflow-y: auto;
            `}>
            <div>
                <span><img src={logo} alt="logo"/></span>
                <nav>
                    <NavLink to='/listview'>Main List</NavLink>
                </nav>
                <div>
                    <button>로그인</button>
                    <button>회원가입</button>
                </div>
            </div>
        </div>
    );
}

export default MainView;