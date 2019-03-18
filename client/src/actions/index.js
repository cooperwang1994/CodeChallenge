

import {FETCH_USER, FETCH_DATA, FETCH_ALL_USER, FETCH_USER_DATA} from './types';

//make ajax request to the backend API
import axios from 'axios';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    // console.log(res);
    dispatch({ type: FETCH_USER, payload: res.data});
}

export const fetchData = (value) => async dispatch => {
    const res = await axios.get('/server/search/allData', {
        params: {
            userName: value.userName,
            model: value.model
        }
    });
    // console.log(res.data);
    dispatch({
        type: FETCH_DATA,
        payload: res.data
    })
}

export const fetchAllUser = () => async dispatch => {
    const res = await axios.get('/server/search/allUser');

    dispatch({
        type: FETCH_ALL_USER,
        payload: res.data
    })
}

export const addData = async (values) => {
    await axios.post('/api/insertData', values);
}

export const fetchUserData = (value) => async dispatch => {
    const res = await axios.get('/api/userdata', {
        params: {
            userEmail: value
        }
    });
    dispatch({
        type: FETCH_USER_DATA,
        payload: res.data
    })
}

export const remData = (value) => async dispatch => {
    // console.log(value)
    await axios.delete('/api/deleteData', {
        params: {
            id: value
        }
    });
    dispatch({
        type: 'no type'
    })
}