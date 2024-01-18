import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducer/taskReducer';
import columnSettingsReducer from './reducer/columnSettingsReducer';
import hiddenTablesReducer from './reducer/hiddenTableReducer';
import editingCellReducer from './reducer/editingCellReducer';

const store = configureStore({
    reducer: {
        tasksReducer,
        columnSettingsReducer,
        hiddenTablesReducer,
        editingCellReducer
    }
});

export default store;
