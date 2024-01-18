const defaultColumnSettings = {
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

const columnSettingsReducer = ( state = { columnSettings: defaultColumnSettings }, action ) => {
    return state;
};

export default columnSettingsReducer;