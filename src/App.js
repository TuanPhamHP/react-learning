import './App.css';

import AppRoutes from './routes/index';
import Header from './components/Header';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='py-2 px-2'>
				<AppRoutes />
			</div>
		</div>
	);
}

export default App;
