/** @jsxImportSource @emotion/react */
import { NavLink } from "react-router-dom";
import { css } from "@emotion/react";

function Impression() {
    return (
        <div 
            className="impression" 
            css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
            `}>
            <p
                className="catchPhrase"
                css={css`
                    font-family: 'SCDream';
                    font-weight: bold;
                    font-size: 40px;
                `}>
                자신만의 흐름을 두드리다.
            </p>
            <NavLink 
                to="/listView"
                css={css`
                    text-decoration: none;
                    font-family: 'SCDream';
                    font-size: 20px;
                    padding: 10px 30px;
                    color: white;
                    background-color: #ff1744;
                    border-radius: 15px;
                `}>
                    시작하기
            </NavLink>
        </div>
    );
}

export default Impression;