import { Link } from 'react-router-dom';
function Sidebar() {
	const sidebarStyles = {
		width: '280px',
		minWidth: '280px',
		height: '100vh',
		position: 'sticky',
		top: 0,
		backgroundColor: '#171315',
	};
	return (
		<nav className='navBar bg-dark' style={sidebarStyles}>
			<ul className='list-group rounded-0'>
				<li className='list-group-item bg-dark border-0'>
					<Link to='/' className='text-white text-decoration-none'>
						Trang chủ
					</Link>
				</li>

				<li className='list-group-item bg-dark border-0 text-uppercase text-bold text-white'>My App</li>
				<li className='list-group-item bg-dark border-0'>
					<Link to='/todo/list' className='text-white text-decoration-none'>
						Todo
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Sidebar;
