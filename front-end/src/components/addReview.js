import React, {useState} from 'react';
import {createReview, deleteReview, editReview} from '../actions/reviewActions'
//restaurant_id, cuisine, menuItemName, photo, price, rating, review
import {connect} from 'react-redux';
// import img from '../images/review.jpg';
import reviewcss from '../components/reviewcss.css';

const AddReview = (props) => {

    const [item, setItem] = useState({
        
        //restaurant_id: 
        cuisine: '',
        menuItemName: '',
          //photo: null,
            price: 1,
            rating: 1,
            review: '',
    })

    const handleSubmit = e => {
        e.preventDefault();
        console.log(item, 'add review')
        props.createReview(item)
    }

    const handleDelete = resta => {
        props.deleteReview(item.restaurant_id)
    }

    const handleUpdate = resta => {
        props.editReview(item.restaurant_id)
    }

    const handleChange = e => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        }); 
    };


return (

    <div className="review-page">
        <div className="review-container">
        <h1>Add a Review</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Cuisine"
                name="cuisine"
                value={item.cuisine}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Menu Item Name"
                name="menuItemName"
                value={item.menuItemName}
                onChange={handleChange}
            />

            <input
                type="number"
                placeholder="Price"
                name="price"
                value={item.price}
                onChange={handleChange}
            />

            <input
                type="number"
                placeholder="Rating"
                name="rating"
                value={item.rating}
                onChange={handleChange}
            />

            <input
                type="textarea"
                placeholder="Review"
                name="review"
                value={item.review}
                onChange={handleChange}
            />

        </form>

        <button className="button">Add Review</button>

        {/* <button><Link to={'/homerestaurants'}>Home Restaurants</Link></button> */}
        <button onClick={handleUpdate}>Edit Review</button>
        <button onClick={handleDelete}>Delete Review</button>
    </div>
    </div>
    )

}

const mapStatetoProps = state => {
    return {
      //restrantprops: state.review
    }
}

export default connect(
    mapStatetoProps,
    {createReview, editReview, deleteReview}
)(AddReview);