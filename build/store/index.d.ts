declare const store: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
    counter: import("./features/counter/counterSlice").Integer;
}>, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    counter: import("./features/counter/counterSlice").Integer;
}>, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    counter: import("./features/counter/counterSlice").Integer;
}>, import("redux").AnyAction, undefined>]>;
export declare type AppDispatch = typeof store.dispatch;
export default store;
