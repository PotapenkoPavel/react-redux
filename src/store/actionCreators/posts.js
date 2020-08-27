import {CREATE_POST} from '../actions/posts'

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload:  post
    }
}