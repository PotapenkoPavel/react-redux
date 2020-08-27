import {CREATE_POST, FETCH_POSTS} from '../actions/posts'
import {hideLoader, showLoader} from "./app";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload:  post
    }
}

export function fetchPosts(post) {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const json = await response.json()
        console.log(json)
        setTimeout(() => {
            dispatch({
                type: FETCH_POSTS,
                payload: json
            })
            dispatch(hideLoader())
        }, 1500)


    }
}