import { useEffect } from "react";
import styled from "@emotion/styled";

import Category from "../container/Category";

const TaskViewDiv = styled.div`
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
`;

function TaskView() {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 's') {
                event.preventDefault();
                //future "save function" must be here.
            }
        };

        const handleContextMenu = (event) => {
            event.preventDefault();
        };

        window.addEventListener('contextmenu', handleContextMenu);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    return (
        <TaskViewDiv>
            <Category category={"action"}/>
            <Category category={"defered"}/>
        </TaskViewDiv>
    );
}

export default TaskView;