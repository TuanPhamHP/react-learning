import { Routes, Route } from 'react-router-dom';

// page components
import IndexPage from '../pages/index';
import TodoList from '../pages/todo/list/index';
import NotFoundPage from '../pages/404';

// logic khai báo path
// logic gán path cho pages

function AppRoutes() {
	// logic
	//view
	return (
		<Routes>
			<Route path='/' element={<IndexPage />}></Route>
			<Route path='/todo/list' element={<TodoList />}></Route>
			<Route path='*' element={<NotFoundPage />}></Route>
		</Routes>
	);
}

export default AppRoutes;
