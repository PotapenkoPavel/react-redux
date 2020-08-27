import React from 'react'
import PostForm from './components/PostForm'
import SyncPosts from './components/SyncPosts'
import AsyncPosts from './components/AsyncPosts'
import Alert from './components/Alert'
import {useSelector} from 'react-redux'

function App() {
    const alert = useSelector(state => state.app.alert)

    return(
        <div className='container p-3'>
            {alert ? <Alert message={alert} /> : null}
            <div className='row'>
                <div className='col'>
                    <PostForm />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <h2>Посты, созданные вами</h2>
                    <SyncPosts />
                </div>
                <div className='col'>
                    <h2>Наши посты</h2>
                    <AsyncPosts posts={[]}/>
                </div>
            </div>
        </div>
    )
}

export default App