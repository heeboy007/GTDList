
function capitalize(str) {
    if(!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/* Table 위쪽에 Column 명을 뿌리는 역할*/
function CategoryTableHeader (props) {
    const columnsList = Object.entries(props.columnDisplaySettings).map(([col, settings]) => {
        let capCol = capitalize(col);
        return settings.displayed ? <td key={capCol}>{capCol}</td> : "";
    });

    return (
        <thead>
            <tr>
                {columnsList}
            </tr>
        </thead>
    );
}

export default CategoryTableHeader;