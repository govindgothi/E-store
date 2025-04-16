import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./Slices/CartSlice"
import{ productSlice }from './Api/ProductApi'
const store = configureStore({
    reducer:{
        [productSlice.reducerPath]:productSlice.reducer,
        cartItem:cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productSlice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store