import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import internalReducer from './internal';
export default configureStore({
	reducer: {
		counter: counterReducer,
		internal: internalReducer,
	},
});
