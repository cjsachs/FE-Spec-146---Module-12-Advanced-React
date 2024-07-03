import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {}, // id: quantity
        totalItems: 0
    },
    reducers: {
        addItem: (state, action) => {
            // const id = 1 (example id)
            const { id } = action.payload
            if (state.items[id]) {
                state.items[id] += 1
            } else {
                state.items[id] = 1
            }
            state.totalItems += 1
        },
        removeItem: (state, action) => {
            const { id } = action.payload
            if (state.items[id]) {
                state.items[id] -= 1
                if (state.items[id] === 0) {
                    delete state.items[id]
                }
                state.totalItems -= 1
            }
        },
        checkout: (state) => {
            state.items = {}
            state.totalItems = 0
        }
    }
})

export const { addItem, removeItem, checkout } = cartSlice.actions
export default cartSlice.reducer