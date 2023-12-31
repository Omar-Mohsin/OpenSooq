import { createSlice } from "@reduxjs/toolkit";
import base64 from 'react-native-base64'

const initialState = {
    users:
        [
            {
                name: 'Omar',
                email: 'Omar@gmail.com',
                password: "b21hcm9tYXI=",
                profilePic : 'https://robohash.org/1?set=set2' ,
              

            },
            {
                name: 'Ahmad',
                email: 'Demo448@gmail.com',
                password: "YWhtYWQxMjM=",
                profilePic : 'https://robohash.org/1?set=set1' ,

                
            },
            {
                name: 'Samer',
                email: 'MockDummy@gmail.com',
                password: "c2FtZXIxMjM=",
                profilePic : 'https://robohash.org/1?set=set4' ,
             
            },
        ],

    loggedInUser: null,

}

const decode = (password) => {

    const pass = base64.decode(password);
  
    return pass
  
  }


const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {

        login: {
            reducer(state, action) {
                const { email, password } = action.payload;
                const user = state.users.find(
                    (user) => user.email === email && decode(user.password) === password
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
    
    }
})


export const SelectUser = (state)=>{
    return state.auth.loggedInUser;
}

export const authReducer = authSlice.reducer;
export const { login, logout } = authSlice.actions;