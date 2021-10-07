import React from 'react'

//API URL
//export const API_URL = 'http://localhost:5000'
export const API_URL = 'http://10.0.2.2:5000'
//'https://mesannodejsapiwithverification.herokuapp.com/api';

//API End Points
export const REGISTER = `${API_URL}/auth/register`
export const LOGIN = `${API_URL}/login`
export const UPDATE_PROFILE = `${API_URL}/user`
export const UPLOAD_IMAGE = `${API_URL}/user/upload`
export const FORGOT_PASSWORD = `${API_URL}/auth/recover`
