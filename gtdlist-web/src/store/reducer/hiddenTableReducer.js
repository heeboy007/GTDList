
const defaultHiddenTables = {
    action: false,
    defered: false
};

const hiddenTablesReducer = ( state = { hiddenTables : defaultHiddenTables }, action ) => {
    if(action.type === 'TOGGLE_HIDDEN_TABLE'){
        const newHiddenTable = { ...state.hiddenTables, [action.category]: !state.hiddenTables[action.category] };
        return { hiddenTables: newHiddenTable };
    }
    return state;
}

export default hiddenTablesReducer;