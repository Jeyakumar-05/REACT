
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userdata",
    initialState: {
        userdata: null
    },
    reducers: {
        login: (state, action) => {
            state.userdata = action.payload        /* a reducer is responsible for handling actions and updating 
                                                    the application's state accordingly */
        },

        logout: (state) => {
            state.userdata = null
        }
    }
})

export const { login, logout } = userSlice.actions
export const selectUser = (state) => state.userdata.userdata 
                                    // 1st userdata is state name that is given in userSlice (name)
                                    // 2nd userdata is property name that is given in userSlice (initialState)

export default userSlice.reducer