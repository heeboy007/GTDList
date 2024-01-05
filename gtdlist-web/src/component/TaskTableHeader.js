import styled from '@emotion/styled';

const Td = styled.td`
    border: 1px solid #eee;
`;

function capitalize(str) {
    if(!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/* Table 위쪽에 Column 명을 뿌리는 역할*/
function TaskTableHeader (props) {
    const columnsList = Object.entries(props.columnSettings).map(([col, settings]) => {
        let capCol = capitalize(col);
        return settings.displayed ? <Td key={capCol}>{capCol}</Td> : "";
    });

    return (
        <thead>
            <tr>
                <Td><i className="fa-solid fa-minus"></i></Td>
                { columnsList }
            </tr>
        </thead>
    );
}

export default TaskTableHeader;