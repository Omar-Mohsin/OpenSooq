import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users:
        [
            {
                name: 'Omar',
                email: 'Omar@gmail.com',
                password: "omaromar",
                posts: [],

            },
            {
                name: 'Ahmad',
                email: 'Demo448@gmail.com',
                password: "YWhtYWQxMjM=",
                posts: [],
            },
            {
                name: 'Samer',
                email: 'MockDummy@gmail,com',
                password: "c2FtZXIxMjM=",
                posts: [],
            },
        ],

    loggedInUser: null,

}


const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {

        login: {
            reducer(state, action) {
                const { email, password } = action.payload;
                const user = state.users.find(
                    (user) => user.email === email && user.password === password
                );

                if (user) {
                    state.loggedInUser = user;
                }
            }
        }
        ,
        logout: {
            reducer(state, action) {
                state.loggedInUser = null;
            }
        },
        addPost: {
            reducer(state, action) {
                const item = action.payload;

                state.loggedInUser.posts.push(item)

            }
        },
    }
})


export const SelectUser = (state)=>{
    return state.auth.loggedInUser;
}

export const authReducer = authSlice.reducer;
export const { login, logout, addPost } = authSlice.actions;