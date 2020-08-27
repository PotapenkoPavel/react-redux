import React, {useState, useRef} from 'react'
import {useDispatch} from 'react-redux'
import {createPost} from '../store/actionCreators/posts'
import {alertTimeoutId, showAlert} from "../store/actionCreators/app"

function PostForm() {
    const [title, setTitle] = useState('')
    const postsCount = useRef(0)
    const dispatch = useDispatch()

    function onSubmitHandler(e) {
        e.preventDefault()

        if (title.trim() === '') {
            if (!alertTimeoutId) dispatch(showAlert('Вы не заполнили поле заголовка'))
            console.log('Алерт уже весит над головой')
            return
        }

        const newPost = {
            title,
            id: postsCount.current + 1
        }

        dispatch(createPost(newPost))
        postsCount.current += 1
        setTitle('')
    }

    function onChangeHandler(e) {
        switch (e.target.name) {
            case('title'):
                setTitle(e.target.value)
        }
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label htmlFor="title">Заголовок поста</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name='title'
                    value={title}
                    onChange={onChangeHandler}
                />
            </div>
            <button className='btn btn-success' type='submit'>Создать</button>
        </form>
    )
}

export default PostForm