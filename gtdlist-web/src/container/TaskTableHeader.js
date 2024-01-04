import TaskTableHeader from '../component/TaskTableHeader';
import { connect } from 'react-redux';

function mapReduxStateToReactProps(state) {
    return {
        columnSettings: state.columnSettingsReducer.columnSettings
    };
};

export default connect(mapReduxStateToReactProps)(TaskTableHeader);
