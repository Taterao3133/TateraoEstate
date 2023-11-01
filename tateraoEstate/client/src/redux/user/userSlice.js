import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentUser:null,
    error:null,
    loading: false

};

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        updateUserStart:(state,action)=>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null;
        },
        signInStart:(state)=>{
            state.loading
        },
        signInSuccess: (state, action) => {
          state.currentUser = action.payload;
          state.error = null;
          state.loading = false;
        },
        
        signInFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;

        },
        updateUserSuccess:(state,action)=>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null;
        },
        updateUserFailure: (state, action) => {
          state.error = action.payload;
          state.loading = false;
        },
        deleteUserStart: (state) => {
            state.loading = true;
          },
          deleteUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
          },
          deleteUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
          },
          signOutUserStart: (state) => {
            state.loading = true;
          },
          signOutUserSuccess: (state) => {
            state.currentUser = null;
            state.error = null;
            state.loading = false;
          },
          signOutUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
          },
        
    }
})

export const {signInStart,
    signInSuccess,
    signInFailure,
    updateUserFailure,
    updateUserSuccess,
    updateUserStart,
    deleteUserFailure,
    deleteUserSuccess,
    deleteUserStart,
    signOutUserFailure,
    signOutUserSuccess,
    signOutUserStart,}=userSlice.actions;
export default userSlice.reducer;
