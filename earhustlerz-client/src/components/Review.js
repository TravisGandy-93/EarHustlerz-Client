import React from 'react'

const Review = ({review}) =>{
    return(
        <div>
            
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{review.attributes.content}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">says User: {review.attributes.user.id}</h6>
                    <p className="card-text"></p>
                <p className="card-link">Likes: {review.attributes.likes}</p>
                <p className="card-link">Dislikes: {review.attributes.dislikes}</p>
            </div>
        </div>
    </div>
    )
}


export default Review