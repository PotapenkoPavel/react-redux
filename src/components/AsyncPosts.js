import React from 'react'
import Post from './Post'

function AsyncPosts({ posts }) {

    if (!posts.length) return <button className='btn btn-primary'>Загрузить</button>


    return posts.map((post, index) => <Post key={index} title={post}/>)
}

export default AsyncPosts