// hook dùng để truy cập vào các actions của slice
import { useDispatch } from 'react-redux';

// import action của slice đó
import { increment, toggleLogo } from '../store/counter';

function IndexPage() {
	// dùng để thực thi action của slice
	const dispatch = useDispatch();

	const btnClicked = () => {
		// thực thi action của slice
		dispatch(increment());
	};

	const btnToggleClicked = () => {
		dispatch(toggleLogo());
	};

	return (
		<div>
			<h1>Xin chào, đây là trang index</h1>

			<button className='btn btn-primary' onClick={btnClicked}>
				Click me to increase counter
			</button>
			<button className='btn btn-primary' onClick={btnToggleClicked}>
				Click me to toggle logo
			</button>

			{/*  
			 	LocalStorage 
					Key - value

					Key: string
					Value: JSON

				SessionStorage
				Cookies
			  */}
		</div>
	);
}
export default IndexPage;

// npm i redux
// npm i @reduxjs/toolkit
