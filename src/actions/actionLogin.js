/**
 * Created by Dhanar J Kusuma on 26/02/2017.
 */
import axios from 'axios';
import { API_LOGIN, API_VERIFIED } from '../utils/apis';

export const DO_AUTH = 'DO_AUTH';
export const SUCCESS_AUTH = 'SUCCESS_AUTH';
export const FAILURE_AUTH = 'FAILURE_AUTH';



export function successLogin(token){
    localStorage.setItem('absen-token', token);
    return {
        type : SUCCESS_AUTH,
        payload : {
            token : token
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

export function doLogin(username, password){
    return dispatch => {
        dispatch(processLogin());
        axios.post(API_LOGIN, { username, password })
            .then(function(res){
                dispatch(successLogin(res.data.token));
            })
            .catch(err => {
                dispatch(failureLogin("err"));
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
                dispatch(successLogin(res.data.token));
            })
            .catch(err => {
                dispatch(failureLogin(err))
            });
    }
}