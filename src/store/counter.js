import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0,
		numb: 1,
	},
	reducers: {
		increment: state => {
			state.numb += 1;
		},
	},
});

export const { increment } = counterSlice.actions;

export const selectCount = state => state.counter;

export default counterSlice.reducer;
