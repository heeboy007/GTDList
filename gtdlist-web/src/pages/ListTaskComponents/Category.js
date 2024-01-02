import React, { useState } from "react";

import CategoryBar from "./CategoryBar";
import CategoryTableHeader from "./CategoryTableHeader";
import CategoryTableTask from "./CategoryTableTask";

import styled from '@emotion/styled';

const Section = styled.section`
display: flex;
flex-direction: column;

table {
    overflow-x: auto;
    border-collapse: collapse;
}

td {
    border: 1px solid #eee;
}
`;

const columnSettings = {
    name: {
        displayed: true,
        type: "text",
        inputAlwaysRendered: false
    },
    time: {
        displayed: true,
        type: "datetime",
        inputAlwaysRendered: true
    },
    id: {
        displayed: false, 
        type: "integer",
        inputAlwaysRendered: false
    },
    order: {
        displayed: false,
        type: "integer",
        inputAlwaysRendered: false
    },
    memo: {
        displayed: true,
        type: "text",
        inputAlwaysRendered: false
    },
    difficulty: {
        displayed: true,
        type: "difficulty",
        inputAlwaysRendered: false
    },
    check: {
        displayed: true,
        type: "check",
        inputAlwaysRendered: true
    }
};

function Category(props) {
    const category = props.category;
    const editCell = props.editCell;
    const tasks = props.tasks;
    const handleEditCellChange = props.onEditCellChange;

    const [hideTable, setHideTable] = useState(false);

    const handleAddTask = () => {
        props.onAddTask(category);
    };

    const handleChangeCellValue = (changedValue, rowId, colId) => {
        props.onChangeCellValue(category, changedValue, rowId, colId);
    };

    const handleDeleteTask = (row) => {
        props.onDeleteTask(category, row);
    };
    
    //각각의 task에 대한 Component를 생성
    let taskRows = tasks.map((row) => (
        <CategoryTableTask
            key={row.id}
            currentRow={row}
            currentEditCell={editCell}
            columnSettings={columnSettings}
            onChangeEditCell={handleEditCellChange}
            onChangeCellValue={handleChangeCellValue}
            onDeleteTask={handleDeleteTask}
            onUnFocusCell={() => {
                handleEditCellChange(null, null);
            }}/>
    ));

    return (
        <Section className={category}>
            <CategoryBar 
                hideTable={hideTable}
                category={category}
                onAddTask={handleAddTask}
                onHideTableChange={(e) => {
                    setHideTable(!hideTable);
                }}/>
            { hideTable ? "" : <table>
                <CategoryTableHeader columnSettings={columnSettings}/>
                {/* 누르면 바로 수정 / 저장이 가능한 테이블을 작성 */}
                <tbody>
                    { taskRows }
                </tbody>
            </table> }
        </Section>
    );
}

export default Category;