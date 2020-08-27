import React from 'react'
import Post from './Post'
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../store/actionCreators/posts";
import Loader from "./Loader";

function AsyncPosts() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.asyncPosts)
    const loader = useSelector(state => state.app.loader)

    if (loader) {
        return <Loader />
    }

    if (!posts.length){
        return <button className='btn btn-primary' onClick={() => dispatch(fetchPosts())}>Загрузить</button>
    }


    return posts.map((post) => <Post key={post.id} title={post.title}/>)
}

export default AsyncPosts