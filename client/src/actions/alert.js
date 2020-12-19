/* eslint-disable no-undef */
import { v4 as uuidv4 } from 'uuid';

import { SET_ALERT, REMOVE_ALERT } from './index';


export default function setAlert (msg, alertType) {
    const id = uuidv4();

    dispatch ({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000)
} 


 