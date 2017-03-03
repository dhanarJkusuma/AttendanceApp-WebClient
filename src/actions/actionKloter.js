/**
 * Created by Dhanar J Kusuma on 27/02/2017.
 */
import { API_GET_KLOTER, API_UPDATE_KLOTER, API_DELETE_KLOTER } from '../utils/apis';
import axios from 'axios';

export const DO_REQUEST_KLOTER = 'DO_REQUEST_KLOTER';
export const DONE_REQUEST_KLOTER = 'DONE_REQUEST_KLOTER';
export const FAILURE_REQUEST_KLOTER = 'FAILURE_REQUEST_KLOTER';

export const DO_POST_KLOTER = 'DO_POST_KLOTER';
export const DONE_POST_KLOTER = 'DONE_POST_KLOTER';
export const FAILURE_POST_KLOTER = 'FAILURE_POST_KLOTER';

export const DO_UPDATE_KLOTER = 'DO_UPDATE_KLOTER';
export const DONE_UPDATE_KLOTER = 'DONE_UPDATE_KLOTER';
export const FAILURE_UPDATE_KLOTER = 'FAILURE_UPDATE_KLOTER';
export const FINISH_UPDATE_KLOTER = 'FINISH_UPDATE_KLOTER';

export const DO_DELETE_KLOTER = 'DO_DELETE_KLOTER';
export const DONE_DELETE_KLOTER = 'DONE_DELETE_KLOTER';
export const FAILURE_DELETE_KLOTER = 'FAILURE_DELETE_KLOTER';
export const FINISH_DELETE_KLOTER = 'FINISH_DELETE_KLOTER';

var config = {
    headers: { 'Authorization': localStorage.getItem('absen-token') },
};


export function processRequest(){
    return {
        type : DO_REQUEST_KLOTER
    }
}

export function doneRequest(data){
    return {
        type : DONE_REQUEST_KLOTER,
        payload : {
            data : data
        }
    }
}

export function failureRequest(err){
    return {
        type : FAILURE_REQUEST_KLOTER,
        payload : {
            error : err
        }
    }
}


export function processPost(){
    return {
        type : DO_POST_KLOTER
    }
}

export function donePost(data){
    return {
        type : DONE_POST_KLOTER,
        payload : {
            data : data
        }
    }
}

export function failurePost(err){
    return {
        type : FAILURE_POST_KLOTER,
        payload : {
            error : err
        }
    }
}


export function processUpdate(){
    return {
        type : DO_UPDATE_KLOTER
    }
}

export function doneUpdate(message){
    return {
        type : DONE_UPDATE_KLOTER,
        payload : {
            message : message
        }
    }
}

export function failureUpdate(err){
    return {
        type : FAILURE_UPDATE_KLOTER,
        payload : {
            err
        }
    }
}

export function finishUpdate() {
    return {
        type : FINISH_UPDATE_KLOTER
    }
}


export function processDelete(){
    return {
        type : DO_DELETE_KLOTER
    }
}

export function doneDelete(message){
    return {
        type : DONE_DELETE_KLOTER,
        payload : {
            message
        }
    }
}

export function failureDelete(err){
    return {
        type : FAILURE_DELETE_KLOTER
    }
}

export function finsihDelete(){
    return {
        type : FINISH_DELETE_KLOTER
    }
}

export function getData(){
    return dispatch => {
        dispatch(processRequest());
        axios.get(API_GET_KLOTER, config)
            .then(function(res){
                dispatch(doneRequest(res.data.data));
            })
            .catch(err => console.log(err));
    };
}

export function insertData(kloter){
    return dispatch => {
        dispatch(processPost());
        axios.post(API_GET_KLOTER, {name: kloter}, config)
            .then(function(res){
                dispatch(donePost(res.data.data));
                dispatch(getData());
            })
            .catch(err => console.log(err));
    }
}

export function updateData(id, kloter){
    return dispatch => {
        dispatch(processUpdate());
        axios.post(API_UPDATE_KLOTER + id, {name:kloter}, config)
            .then(function(res){
                dispatch(doneUpdate(res.data.message));
                setTimeout(function() {
                    dispatch(finishUpdate())
                },5000);
            })
            .catch(err => console.log(err));
    }
}

export function deleteData(id){
    return dispatch => {
        dispatch(processDelete());
        axios.post(API_DELETE_KLOTER + id, {}, config)
            .then(function(res){
                console.log(res);
                dispatch(doneDelete(res.data.message));
                dispatch(getData());
            })
            .catch(err => console.log(err));
    }
}