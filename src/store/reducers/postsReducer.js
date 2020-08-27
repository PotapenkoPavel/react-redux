import {CREATE_POST} from '../actions/posts'

const initialState = {
    syncPosts: [],
    asyncPosts: []
}

function postsReducer(state = initialState, action) {
    switch (action.type) {
        case(CREATE_POST):
            return {...state, syncPosts: [...state.syncPosts, action.payload]}

        default: return state
    }
}

export default postsReducer