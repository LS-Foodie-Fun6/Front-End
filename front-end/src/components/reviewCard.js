import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {connect} from 'react-redux';
import {createReview, deleteReview, editReview} from '../actions/reviewActions'

const ReviewCard = (props) => {

const [review,setReview] = useState([]);

    useEffect(() => {

    axiosWithAuth()
    .get('/users/')
    .then(res => {
        setReview(res.data)
        console.log(res.data, 'review list')
    })
    .catch(err => {
        console.log(err)

    }) 
    },[])
    return(
        <div>

    {review.map(r => {
    return (
        <div>
            <h2>Cuisine:</h2> <h3>{r.cuisine}</h3>
            <h2>Item Name:</h2><h3>{r.menuItemName}</h3>
            <h2>Location:</h2><h3>{r.location}</h3>
            <h2>Price:</h2><h3>{r.price}</h3>
            <h2>Rating:</h2><h3>{r.rating}</h3>
            <h2>Review:</h2><h3>{r.review}</h3>
        </div>
)
})}

</div>
    )
}

const mapStatetoProps = state => {
    return {
        restrantOnProps: state.reviewReducer
    }
  }

export default connect(
  mapStatetoProps,
  {deleteReview}
)(ReviewCard);