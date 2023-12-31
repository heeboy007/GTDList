import React from "react";

import CategoryTableInput from './CategoryTableInput';

function CategoryTableTask(props) {
    let columnSettings = props.columnSettings;
    let currentEditCell = props.currentEditCell;
    let row = props.currentRow;

    const onChangeCellValue = props.onChangeCellValue;
    const onUnFocusCell = props.onUnFocusCell;
    const onChangeEditCell = props.onChangeEditCell;
    const onDeleteTask = props.onDeleteTask;

    return(
        <tr key={row.id}>
            <td
                onClick={(e) => onDeleteTask(row.id)}>
                <i className="fa-solid fa-minus"></i>
            </td>
            {Object.entries(row).map(([col, cellValue]) => columnSettings[col].displayed ? (
            <td 
                key={`${row.id}-${col}`}
                onClick={() => onChangeEditCell(row, col)}>
                {/* 수정하고자 하는 셀과 일치한다면 수정용 input을 대신 렌더링 */}
                {(currentEditCell.rowId === row.id 
                    && currentEditCell.colId === col) 
                    || columnSettings[col].inputAlwaysRendered ? (
                <CategoryTableInput
                    type={columnSettings[col].type}
                    cellValue={cellValue} 
                    onChangeCellValue={onChangeCellValue}
                    onUnFocusCell={onUnFocusCell}
                    row={row.id}
                    col={col}
                />
                ) : cellValue}
            </td>
            ) : "")}
        </tr>
    );
}

export default CategoryTableTask;