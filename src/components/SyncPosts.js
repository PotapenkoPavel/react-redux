import React from 'react'
import Post from './Post'
import {useSelector} from 'react-redux'

function SyncPosts() {
    const posts = useSelector(state => state.posts.syncPosts)

    return posts.map(post => <Post key={post.id} title={post.title}/>)
}

export default SyncPosts