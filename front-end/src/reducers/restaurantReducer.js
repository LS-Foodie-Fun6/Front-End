import {
    FETCH_RESTAURANT,
    FETCH_RESTAURANT_SUCCESS,
    FETCH_RESTAURANT_FAIL,

    UPDATE_RESTAURANT,
    UPDATE_RESTAURANT_FAIL,

    DELETE_RESTAURANT,
    DELETE_RESTAURANT_FAIL,

  } from "../actions/restaurantActions";
  
  const initialState = {
    restaurant: {},
    //NEED? -> name, cuisine, location, opens, closes, rating, photos
    loading: false,
    restaurantDeleted: false,
    error: null
    
  };
  
  export const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_RESTAURANT: 
        console.log('FETCH_RESTAURANT')
            return {
                ...state,
                loading: true, 
                error: ''
            };

        case FETCH_RESTAURANT_SUCCESS: 
        console.log('FETCH_RESTAURANT SUCCESS')
            return {
                ...state,
                restaurant: action.payload,
                loading: false, 
                error: ''
            };
     
        case FETCH_RESTAURANT_FAIL: 
            return {
                ...state,
                error: action.payload
            };
/////////////////////////////////////////////

        case UPDATE_RESTAURANT:
            return {
                ...state,
                restaurant: action.payload,
                loading: false, 
            }

        case UPDATE_RESTAURANT_FAIL:
            return {
                ...state,
                error: action.payload
            }

//////////////////////////////////////////////////////////////
//////////////// DELETE REST  ////////////////////////////////
//////////////////////////////////////////////////////////////


            case DELETE_RESTAURANT: 
            return {
                ...state,
                restaurant:state.restaurants.filter(restrant => restrant.id !== action.payload),
                //restaurant: action.payload,
                loading: false, 
                error: ''
            };

        case DELETE_RESTAURANT_FAIL: 
            return {
                ...state,
                error: action.payload,
                loading: false
            } 
            default:
            return state; 
        }
    }