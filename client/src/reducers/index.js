import {combineReducers} from 'redux';
import authReducer from './authReducer';
import allDataReducer from './allDataReducer';
import userListReducer from './userListReducer'
import userDataReducer from './userDataReducer';

import {reducer as search} from 'redux-form';
import {reducer as dataFormReducer} from 'redux-form'

export default combineReducers({
    auth: authReducer,
    allData: allDataReducer,
    userList: userListReducer,
    form: search,
    dataForm: dataFormReducer,
    userData: userDataReducer
});