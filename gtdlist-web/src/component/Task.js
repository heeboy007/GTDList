import React from "react";

import TableInput from "../container/TableInput";

import styled from '@emotion/styled';

const Td = styled.td`
    border: 1px solid #eee;
`;

function Task(props) {
    let columnSettings = props.columnSettings;
    let editingCell = props.editingCell;
    let row = props.currentRow;

    //console.log(editingCell);
    return(
        <tr key={row.id}>
            <Td
                onClick={(e) => props.onDeleteTask(row.id)}>
                <i className="fa-solid fa-minus"></i>
            </Td>
            {Object.entries(row).map(([col, cellValue]) => columnSettings[col].displayed ? (
            <Td 
                key={`${row.id}-${col}`}
                onClick={(e) => props.onChangeEditCell(row.id, col)}>
                {/* 수정하고자 하는 셀과 일치한다면 수정용 input을 대신 렌더링 */}
                {(editingCell.rowID === row.id 
                    && editingCell.colID === col) 
                    || columnSettings[col].inputAlwaysRendered ? (
                <TableInput
                    type={columnSettings[col].type}
                    category={props.category}
                    cellValue={cellValue} 
                    row={row.id}
                    col={col}
                />
                ) : cellValue}
            </Td>
            ) : "")}
        </tr>
    );
}

export default Task;