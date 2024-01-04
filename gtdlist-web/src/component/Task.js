import React from "react";

//import CategoryTableInput from './CategoryTableInput';

import styled from '@emotion/styled';

const Td = styled.td`
    border: 1px solid #eee;
`;

function Task(props) {
    let columnSettings = props.columnSettings;
    let editingCell = props.editingCell;
    let row = props.currentRow;

    const onChangeEditCell = props.onChangeEditCell;
    const onUnFocusCell = () => {
        onChangeEditCell(null, null);
    };

    return(
        <tr key={row.id}>
            <Td
                onClick={(e) => props.onDeleteTask(row.id)}>
                <i className="fa-solid fa-minus"></i>
            </Td>
            {Object.entries(row).map(([col, cellValue]) => columnSettings[col].displayed ? (
            <Td 
                key={`${row.id}-${col}`}
                onClick={() => onChangeEditCell(row, col)}>
                {/* 수정하고자 하는 셀과 일치한다면 수정용 input을 대신 렌더링 */}
                {/*(currentEditCell.rowId === row.id 
                    && currentEditCell.colId === col) 
                    || columnSettings[col].inputAlwaysRendered ? (
                <CategoryTableInput
                    type={columnSettings[col].type}
                    cellValue={cellValue} 
                    onUnFocusCell={onUnFocusCell}
                    row={row.id}
                    col={col}
                />
                ) :*/ cellValue}
            </Td>
            ) : "")}
        </tr>
    );
}

export default Task;