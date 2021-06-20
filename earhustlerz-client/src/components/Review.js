import React from 'react'

const Review = ({review, favorite}) =>{
    return(
        <div>
            
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{review.content}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">says User: {review.user_id}</h6>
                    <p className="card-text"></p>
                <p className="card-link">Likes: {review.likes}</p>
                <p className="card-link">Dislikes: {review.dislikes}</p>
            </div>
        </div>
    </div>
    )
}


export default Review