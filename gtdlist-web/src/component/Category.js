import React from "react";

import Task from "../container/Task";
import TaskTableHeader from "../container/TaskTableHeader";
import DropTable from "../container/DropTable";

import styled from '@emotion/styled';

const Section = styled.section`
    display: flex;
    flex-direction: column;

table {
    overflow-x: auto;
    border-collapse: collapse;
}
`;

function Category(props) {
    const category = props.category;
    
    //각각의 task에 대한 Component를 생성
    let taskRows = props.tasks.map((row) => (
        <Task
            key={row.id}
            currentRow={row}/>
    ));

    return (
        <Section className={category}>
            <DropTable category={category}/>
            { props.hideTa ? "" : <table>
                <TaskTableHeader />
                {/* 누르면 바로 수정 / 저장이 가능한 테이블을 작성 */}
                <tbody>
                    { taskRows }
                </tbody>
            </table> }
        </Section>
    );
}

export default Category;