import { Link, NavLink } from 'react-router-dom';

import styles from '../../assets/styles/sidebar.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { selectCount } from '../../store/counter';
import { useSelector, useDispatch } from 'react-redux';

function Sidebar() {
	const storeCounter = useSelector(selectCount);
	const counter = storeCounter.numb;

	console.log(storeCounter);

	const sidebarStyles = {
		width: '280px',
		minWidth: '280px',
		height: '100vh',
		position: 'sticky',
		top: 0,
		backgroundColor: '#f9f9f9',
	};

	return (
		<nav className='navBar' style={sidebarStyles}>
			<div className='logo-text'>
				<p className={styles.logoText}>
					<span>i</span>
					<span className={styles.textPr}>TASK</span>
				</p>
			</div>
			<p className='text-center'>{counter}</p>

			<ul className='list-group rounded-0 px-2 '>
				<li className={`bg-transparent list-group-item border-0 px-0 ${styles.navLinkItem}`}>
					<NavLink
						to='/'
						className={({ isActive, isPending }) =>
							isPending ? styles.normal : isActive ? styles.active : styles.normal
						}
					>
						<i className='bi bi-house me-2'></i> Trang chủ
					</NavLink>
				</li>

				<li className={`bg-transparent list-group-item border-0 px-0 ${styles.navLinkItem}`}>
					<NavLink
						to='/todo/list'
						className={({ isActive, isPending }) =>
							isPending ? styles.normal : isActive ? styles.active : styles.normal
						}
					>
						<i className='bi bi-list-task me-2'></i> List Todo
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Sidebar;
