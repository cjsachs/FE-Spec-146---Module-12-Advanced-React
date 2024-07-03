import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
            throw new Error('failed to fetch products')
        }
        const products = await response.json()
        return products
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.state = 'failed'
                state.error = action.payload
            })
    }
})

export default productsSlice.reducer