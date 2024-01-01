/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import NaviGationBar from "./MainComponents/NavigationBar";
import Impression from "./MainComponents/Impression";

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
            <NaviGationBar />
            <Impression />
        </div>
    );
}

export default MainView;