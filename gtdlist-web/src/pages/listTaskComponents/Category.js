import React, { useState } from "react";

import CategoryBar from "./CategoryBar";
import CategoryTableHeader from "./CategoryTableHeader";
import CategoryTableTask from "./CategoryTableTask";

import './Category.css';

const columnSettings = {
    name: {
        displayed: true,
        type: "text"
    },
    time: {
        displayed: true,
        type: "datetime"
    },
    id: {
        displayed: false, 
        type: "integer"
    },
    order: {
        displayed: false,
        type: "integer"
    },
    memo: {
        displayed: true,
        type: "text"
    },
    difficulty: {
        displayed: true,
        type: "difficulty"
    },
    check: {
        displayed: true,
        type: "check"
    }
};

function Category(props) {
    const category = props.category;
    const editCell = props.editCell;
    const tasks = props.tasks;
    const handleEditCellChange = props.onEditCellChange;

    const [hideTable, setHideTable] = useState(false);

    const handleChangeCellValue = (changedValue, rowId, colId) => {
        props.onChangeCellValue(category, changedValue, rowId, colId);
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
            onUnFocusCell={() => {
                handleEditCellChange(null, null);
            }}/>
    ));

    return (
        <section className={category}>
            <CategoryBar 
                hideTable={hideTable}
                category={category}
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
        </section>
    );
}

export default Category;