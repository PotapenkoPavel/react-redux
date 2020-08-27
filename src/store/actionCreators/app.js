import {SHOW_ALERT, HIDE_ALERT} from '../actions/app'

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