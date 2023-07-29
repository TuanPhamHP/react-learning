import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0,
		numb: 99,
		userName: 'Tuấn',
		isShowLogo: true,
	},
	reducers: {
		// nơi update state của bản thân slice
		increment: state => {
			state.numb += 1;
		},
		decrement: state => {
			state.numb -= 1;
		},
		toggleLogo: state => {
			state.isShowLogo = !state.isShowLogo;
		},
	},
});

export const { increment, decrement, toggleLogo } = counterSlice.actions;

// export state cua slice nay
// state ở đây tượng trưng cho state của cả redux
// state.counter là lấy slice counter của redux
// - counter này được định nghĩa tại hàm configureStore ở file store/index.js
export const selectCount = state => state.counter;

export default counterSlice.reducer;
