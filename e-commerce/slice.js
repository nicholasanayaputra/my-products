import toolkit from "@reduxjs/toolkit"


const {configureStore, createSlice} = toolkit

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addtoCart(state, action) {
            state.push(action.payload)
        },
    },
});

const store = configureStore({
    reducer: {
        cart:cartSlice.reducer,
    },
})
console.log("oncreate store :", store.getState())

store.subscribe(() => {
    console.log("STORE CHANGE :", store.getState())
})

store.dispatch(cartSlice.actions.addtoCart({id:1, qty:20}))
store.dispatch(cartSlice.actions.addtoCart({id:2, qty:10}))