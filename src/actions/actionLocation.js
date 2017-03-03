/**
 * Created by Dhanar J Kusuma on 02/03/2017.
 */
import { API_GET_LOCATION, API_UPDATE_LOCATION, API_DELETE_LOCATION } from '../utils/apis';
import axios from 'axios';

export const DO_REQUEST_LOCATION = 'DO_REQUEST_LOCATION';
export const DONE_REQUEST_LOCATION = 'DONE_REQUEST_LOCATION';
export const FAILURE_REQUEST_LOCATION = 'FAILURE_REQUEST_LOCATION';

export const DO_POST_LOCATION = 'DO_POST_LOCATION';
export const DONE_POST_LOCATION = 'DONE_POST_LOCATION';
export const FAILURE_POST_LOCATION = 'FAILURE_POST_LOCATION';

export const DO_UPDATE_LOCATION = 'DO_UPDATE_LOCATION';
export const DONE_UPDATE_LOCATION = 'DONE_UPDATE_LOCATION';
export const FAILURE_UPDATE_LOCATION = 'FAILURE_UPDATE_LOCATION';
export const FINISH_UPDATE_LOCATION = 'FINISH_UPDATE_LOCATION';

export const DO_DELETE_LOCATION = 'DO_DELETE_LOCATION';
export const DONE_DELETE_LOCATION = 'DONE_DELETE_LOCATION';
export const FAILURE_DELETE_LOCATION = 'FAILURE_DELETE_LOCATION';
export const FINISH_DELETE_LOCATION = 'FINISH_DELETE_LOCATION';

var config = {
    headers: { 'Authorization': localStorage.getItem('absen-token') },
};


export function processRequest(){
    return {
        type : DO_REQUEST_LOCATION
    }
}

export function doneRequest(data){
    return {
        type : DONE_REQUEST_LOCATION,
        payload : {
            data : data
        }
    }
}

export function failureRequest(err){
    return {
        type : FAILURE_REQUEST_LOCATION,
        payload : {
            error : err
        }
    }
}


export function processPost(){
    return {
        type : DO_POST_LOCATION
    }
}

export function donePost(data){
    return {
        type : DONE_POST_LOCATION,
        payload : {
            data : data
        }
    }
}

export function failurePost(err){
    return {
        type : FAILURE_POST_LOCATION,
        payload : {
            error : err
        }
    }
}


export function processUpdate(){
    return {
        type : DO_UPDATE_LOCATION
    }
}

export function doneUpdate(message){
    return {
        type : DONE_UPDATE_LOCATION,
        payload : {
            message : message
        }
    }
}

export function failureUpdate(err){
    return {
        type : FAILURE_UPDATE_LOCATION,
        payload : {
            err
        }
    }
}

export function finishUpdate() {
    return {
        type : FINISH_UPDATE_LOCATION
    }
}


export function processDelete(){
    return {
        type : DO_DELETE_LOCATION
    }
}

export function doneDelete(message){
    return {
        type : DONE_DELETE_LOCATION,
        payload : {
            message
        }
    }
}

export function failureDelete(err){
    return {
        type : FAILURE_DELETE_LOCATION
    }
}

export function finsihDelete(){
    return {
        type : FINISH_DELETE_LOCATION
    }
}

export function getData(){
    return dispatch => {
        dispatch(processRequest());
        axios.get(API_GET_LOCATION, config)
            .then(function(res){
                dispatch(doneRequest(res.data.data));
            })
            .catch(err => console.log(err));
    };
}

export function insertData(location){
    return dispatch => {
        dispatch(processPost());
        axios.post(API_GET_LOCATION, {name: location}, config)
            .then(function(res){
                dispatch(donePost(res.data.data));
                dispatch(getData());
            })
            .catch(err => console.log(err));
    }
}

export function updateData(id, location){
    return dispatch => {
        dispatch(processUpdate());
        axios.post(API_UPDATE_LOCATION + id, {name:location}, config)
            .then(function(res){
                dispatch(doneUpdate(res.data.message));
                setTimeout(function(){
                    dispatch(finishUpdate())
                },5000);
            })
            .catch(err => console.log(err));
    }
}

export function deleteData(id){
    return dispatch => {
        dispatch(processDelete());
        axios.post(API_DELETE_LOCATION + id, {}, config)
            .then(function(res){
                console.log(res);
                dispatch(doneDelete(res.data.message));
                dispatch(getData());
            })
            .catch(err => console.log(err));
    }
}