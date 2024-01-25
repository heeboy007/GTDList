import TaskTableHeader from '../component/TaskTableHeader';
import { connect } from 'react-redux';

function mapReduxStateToReactProps(state) {
    return {
        columnSettings: state.taskReducer.columnSettings
    };
};

export default connect(mapReduxStateToReactProps)(TaskTableHeader);
