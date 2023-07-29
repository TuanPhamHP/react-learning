import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
// import internalReducer from './internal';
export default configureStore({
	reducer: {
		counter: counterReducer,
		// internal: internalReducer,
	},
});

// tạo slice - làm trong store/*.js
// => ghép slice thành store  - làm trong store/index.js
// => gán store vào Provider và nhúng cả app vào Provider - làm trong src/index/js
