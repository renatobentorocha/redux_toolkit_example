declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    counter: import("./features/counter/counterSlice").Integer;
}>, import("redux").AnyAction>;
export declare type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
