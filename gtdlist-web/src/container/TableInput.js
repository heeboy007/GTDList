import TableInput from '../component/TableInput';
import { connect } from 'react-redux';
import { UPDATE_EDIT_CELL, UPDATE_TASK } from '../store/actions/taskActions';

function mapReduxDispatchToReactProps(dispatch, passedProps) {
    return {
        onChangeCellValue: function(changedValue, rowID, colID){
            dispatch({
                type: UPDATE_TASK,
                category: passedProps.category,
                changedValue: changedValue,
                rowID: rowID,
                colID: colID
            });
        },
        onUnFocusCell: function(){
            dispatch({
                type: UPDATE_EDIT_CELL,
                rowID: null,
                colID: null
            });
        }
    };
}

export default connect(null, mapReduxDispatchToReactProps)(TableInput);