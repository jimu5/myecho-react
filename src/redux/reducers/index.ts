import { combineReducers } from 'redux';

import headerShow from './headerShow';
import mode from './mode';

export default combineReducers({
    headerShow,
    mode
});