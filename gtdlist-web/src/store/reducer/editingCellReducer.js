const defaultEditingCell = {
    rowID: null,
    colID: null
};


const editingCellReducer = ( state = { editingCell: defaultEditingCell }, action ) => {
    if(action.type === 'UPDATE_EDIT_CELL'){
        return {
            ...state,
            editingCell: {
                rowID: action.rowID,
                colID: action.colID
            }
        };
    }
    return state;
};

export default editingCellReducer;