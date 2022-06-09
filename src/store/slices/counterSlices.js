import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter:0
}

const counterSlise = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented: state => {
            state.counter += 1
        },
        decremented: state => {
            state.counter -= 1
        },
    }
});

export const counterSelector = {
    getCounter: (state) => state.counter
};
export const { incremented, decremented } = counterSlise.actions;
export default counterSlise;