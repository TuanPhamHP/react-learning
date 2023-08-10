import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/trang-chu';
import NotFoundPage from '../pages/404';
import StreamExamplePage from '../pages/stream-example/index';
function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />}></Route>
			<Route path='/stream/example' element={<StreamExamplePage />}></Route>
			<Route path='*' element={<NotFoundPage />}></Route>
		</Routes>
	);
}

export default AppRoutes;
