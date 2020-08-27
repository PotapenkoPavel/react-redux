import {SHOW_ALERT, HIDE_ALERT, SHOW_LOADER, HIDE_LOADER} from '../actions/app'

export let alertTimeoutId = null

export function showAlert(text) {
    if (alertTimeoutId) return false

    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })
        const promise = new Promise((resolve, reject) => {
            alertTimeoutId = setTimeout( () => {
               dispatch(hideAlert())
               resolve()
           }, 3000)
        }).then(() => alertTimeoutId = null)

    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT,
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}