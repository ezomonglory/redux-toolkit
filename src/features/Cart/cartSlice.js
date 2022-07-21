import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cartItems from "../../cartItems";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
	cartItems,
	amount: 0,
	total: 0,
	isLoading: true,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", async (name, thunkAPI) => {
	try {
		const res = await axios(url)
		return res.data
	} catch (error) {
		return thunkAPI.rejectWithValue("bastard ")
	}
});

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		clearCart: (state) => {
			state.cartItems = [];
		},
		removeItem: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(item) => action.payload !== item.id,
			);
		},
		increase: (state, action) => {
			const cartItem = state.cartItems.find(
				(item) => action.payload.id === item.id,
			);
			cartItem.amount += 1;
		},
		decrease: (state, action) => {
			const cartItem = state.cartItems.find(
				(item) => action.payload.id === item.id,
			);
			cartItem.amount -= 1;
		},
		calculateTotal: (state) => {
			let amount = 0;
			let total = 0;
			state.cartItems.forEach((item) => {
				amount += item.amount;
				total += item.amount * item.price;
			});
			state.amount = amount;
			state.total = total;
		},
	},

	extraReducers: {
		[getCartItems.pending]: (state)  => {
			state.isLoading = true
		},

		[getCartItems.fulfilled]: (state, action)  => {
			state.isLoading = false
			state.cartItems = action.payload
		},

		[getCartItems.rejected]: (state)  => {
			state.isLoading = false
		},
	}
});

export const { clearCart, removeItem, increase, decrease, calculateTotal } =
	cartSlice.actions;



export default cartSlice.reducer;
