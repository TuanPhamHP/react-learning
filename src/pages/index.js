import { selectCount, increment } from '../store/counter';
import { useSelector, useDispatch } from 'react-redux';
function IndexPage() {
	const dispatch = useDispatch();
	const btnClicked = () => {
		dispatch(increment());
	};

	return (
		<div>
			<h1>Xin chào, đây là trang index</h1>
			{/* <button onClick={btnClicked}>click</button> */}

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
