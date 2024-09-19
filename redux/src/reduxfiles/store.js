import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'

export default configureStore({  
    reducer:{
        userdata: userReducer,                    /*In Redux, a store is the central hub that holds the application's state 
                                                    and provides a single source of truth for the entire application */
    },
})



// About state 
 /* In Redux, the state is represented as a single JavaScript object. 
This object contains all the application's data, organized into smaller sub-objects or arrays */