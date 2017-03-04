/**
 * Created by Dhanar J Kusuma on 04/03/2017.
 */
import {
    API_GET_USER,
    API_UPDATE_USER,
    API_DELETE_USER,
    API_GET_LOCATION
} from '../utils/apis';
import axios from 'axios';

export const DO_REQUEST_MUSER = 'DO_REQUEST_MUSER';
export const DONE_REQUEST_MUSER = 'DONE_REQUEST_MUSER';
export const FAILURE_REQUEST_MUSER = 'FAILURE_REQUEST_MUSER';

export const DO_POST_MUSER = 'DO_POST_MUSER';
export const DONE_POST_MUSER = 'DONE_POST_MUSER';
export const FAILURE_POST_MUSER = 'FAILURE_POST_MUSER';

export const DO_UPDATE_MUSER = 'DO_UPDATE_MUSER';
export const DONE_UPDATE_MUSER = 'DONE_UPDATE_MUSER';
export const FAILURE_UPDATE_MUSER = 'FAILURE_UPDATE_MUSER';
export const FINISH_UPDATE_MUSER = 'FINISH_UPDATE_MUSER';

export const DO_DELETE_MUSER = 'DO_DELETE_MUSER';
export const DONE_DELETE_MUSER = 'DONE_DELETE_MUSER';
export const FAILURE_DELETE_MUSER = 'FAILURE_DELETE_MUSER';
export const FINISH_DELETE_MUSER = 'FINISH_DELETE_MUSER';

export const DO_PREPARE_FORM_USER = 'DO_PREPARE_FORM_USER';
export const DONE_PREPARE_FORM_USER = 'DONE_PREPARE_FORM_USER';
export const FAILURE_PREPARE_FORM_USER = 'FAILURE_PREPARE_FORM_USER';

export function getConfig(){
    return {
        headers: { 'Authorization': localStorage.getItem('absen-token') },
    };
}

export function processRequest(){
    return {
        type : DO_REQUEST_MUSER
    }
}

export function doneRequest(data){
    return {
        type : DONE_REQUEST_MUSER,
        payload : {
            data
        }
    }
}

export function failureRequest(err){
    return {
        type : FAILURE_REQUEST_MUSER,
        payload : {
            error : err
        }
    }
}


export function processPost(){
    return {
        type : DO_POST_MUSER
    }
}

export function donePost(data){
    return {
        type : DONE_POST_MUSER,
        payload : {
            data : data
        }
    }
}

export function failurePost(err){
    return {
        type : FAILURE_POST_MUSER,
        payload : {
            error : err
        }
    }
}


export function processUpdate(){
    return {
        type : DO_UPDATE_MUSER
    }
}

export function doneUpdate(message){
    return {
        type : DONE_UPDATE_MUSER,
        payload : {
            message : message
        }
    }
}

export function failureUpdate(err){
    return {
        type : FAILURE_UPDATE_MUSER,
        payload : {
            err
        }
    }
}

export function finishUpdate() {
    return {
        type : FINISH_UPDATE_MUSER
    }
}


export function processDelete(){
    return {
        type : DO_DELETE_MUSER
    }
}

export function doneDelete(message){
    return {
        type : DONE_DELETE_MUSER,
        payload : {
            message
        }
    }
}

export function failureDelete(err){
    return {
        type : FAILURE_DELETE_MUSER
    }
}

export function finsihDelete(){
    return {
        type : FINISH_DELETE_MUSER
    }
}


export function processGetForm(){
    return {
        type : DO_PREPARE_FORM_USER
    }
}

export function doneGetForm(data){
    return {
        type : DONE_PREPARE_FORM_USER,
        payload : {
            data
        }
    }
}

export function failureGetForm(err){
    return {
        type : FAILURE_PREPARE_FORM_USER,
        payload : {
            err
        }
    }
}

export function getLocation(){
    return dispatch => {
        dispatch(processGetForm());
        axios.get(API_GET_LOCATION, getConfig())
            .then(function(res){
                var data = {
                    location: res.data.data
                };
                dispatch(doneGetForm(data));
            })
            .catch(err => console.log(err));
    }
}

export function getData(){
    return dispatch => {
        dispatch(processRequest());
        axios.get(API_GET_USER, getConfig())
            .then(function(res){
                dispatch(doneRequest(res.data.data));
            })
            .catch(err => console.log(err));
    };
}

export function insertData(peserta){
    return dispatch => {
        dispatch(processPost());
        axios.post(API_GET_USER, peserta, getConfig())
            .then(function(res){
                dispatch(donePost(res.data.data));
                dispatch(getData());
            })
            .catch(err => console.log(err));
    }
}

export function updateData(id, peserta){
    return dispatch => {
        dispatch(processUpdate());
        axios.post(API_UPDATE_USER + id, peserta, getConfig())
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
        axios.post(API_DELETE_USER + id, {}, getConfig())
            .then(function(res){
                console.log(res);
                dispatch(doneDelete(res.data.message));
                dispatch(getData());
            })
            .catch(err => console.log(err));
    }
}