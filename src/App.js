import './App.css';
import AppRoutes from './routes/index';
import Sidebar from './components/layouts/Sidebar';

function App() {
	return (
		<div className='App'>
			<div className='d-flex align-start'>
				<Sidebar />
				<div className='w-100'>
					{/* render page */}
					<AppRoutes />
				</div>
			</div>
		</div>
	);
}

export default App;
