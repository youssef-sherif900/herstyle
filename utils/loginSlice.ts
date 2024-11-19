import { createSlice } from "@reduxjs/toolkit";


const initialState: { open : boolean } = {
    open: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        openLogin: (state , action) => {
            state.open = action.payload;
        }
    }
});

export const { openLogin } = loginSlice.actions;
export default loginSlice.reducer;

