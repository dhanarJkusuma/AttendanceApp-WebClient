/**
 * Created by Dhanar J Kusuma on 26/02/2017.
 */
import axios from 'axios';
import { API_LOGIN, API_VERIFIED } from '../utils/apis';

export const DO_AUTH = 'DO_AUTH';
export const SUCCESS_AUTH = 'SUCCESS_AUTH';
export const FAILURE_AUTH = 'FAILURE_AUTH';

export const DONE_LOGOUT = 'DONE_LOGOUT';

export function successLogin(token, user){
    localStorage.setItem('absen-token', token);
    localStorage.setItem('absen-auth', JSON.stringify(user));
    return {
        type : SUCCESS_AUTH,
        payload : {
            token : token,
            user : user
        }
    }
}

export function failureLogin(message){
    return {
        type : FAILURE_AUTH,
        payload : {
            message : message
        }
    }
}

export function processLogin(){
    return {
        type : DO_AUTH
    }
}

export function doneLogout(){
    return {
        type : DONE_LOGOUT
    }
}

export function getAuth(){
    return JSON.parse(localStorage.getItem('absen-auth'));
}


export function doLogout(){
    return dispatch => {
        localStorage.removeItem('absen-token');
        localStorage.removeItem('absen-auth');
        dispatch(doneLogout());
    }
}

export function doLogin(username, password){
    return dispatch => {
        dispatch(processLogin());
        axios.post(API_LOGIN, { username, password })
            .then(function(res){
                dispatch(successLogin(res.data.token, res.data.user));
            })
            .catch(err => {
                dispatch(failureLogin(err));
            });
    };
}

export function verifiedToken(){
    var config = {
        headers: { 'Authorization': localStorage.getItem('absen-token') },
    };
    return dispatch => {
        dispatch(processLogin());
        axios.get(API_VERIFIED, config)
            .then(res => {
                dispatch(successLogin(res.data.token, res.data.user));
            })
            .catch(err => {
                dispatch(failureLogin(err))
            });
    }
}