import {SHOW_ALERT, HIDE_ALERT, SHOW_LOADER, HIDE_LOADER} from '../actions/app'

const initialState = {
    alert: '',
    loader: false
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case(SHOW_ALERT):
            return {...state, alert: action.payload}
        case(HIDE_ALERT):
            return {...state, alert: ''}
        case(SHOW_LOADER):
            return {...state, loader: true}
        case(HIDE_LOADER):
            return {...state, loader: false}
        default: return state
    }
}

export default appReducer