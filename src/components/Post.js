import React from 'react'

function Post({ title }) {

    return (
        <div className="card mb-2">
            <div className="card-body">
                {title}
            </div>
        </div>
    )
}

export default Post