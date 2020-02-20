"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    value: 0
};
var counterSlice = toolkit_1.createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: function (state, action) {
            state.value = state.value + action.payload.value;
        }
    }
});
exports.increment = counterSlice.actions.increment;
exports.default = counterSlice.reducer;
