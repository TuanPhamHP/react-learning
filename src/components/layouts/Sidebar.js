import { Link, NavLink } from 'react-router-dom';

import styles from '../../assets/styles/sidebar.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// dùng để lấy ra state của slice
import { useSelector } from 'react-redux';

// đại diện cho slice
import { selectCount } from '../../store/counter';

import { useEffect } from 'react';

function Sidebar() {
	// truy cập vào state của store/counter bằng useSelector
	// gán data lấy được vào 1 biến để gọi đến
	const counterState = useSelector(selectCount);
	// console.log(counterState);
	// const counter = storeCounter.numb;

	// console.log(storeCounter);

	useEffect(
		() => {
			//  chỉ chạy duy nhất 1 lần khi component được mounted
			console.log('yay, i mounted');
		},
		[
			// dependencies
		]
	);
	// useEffect(() => {
	// 	console.log('yay, a,b changed');
	// },[a,b]);

	useEffect(() => {
		console.log('yay, i updated');
	});

	useEffect(() => {
		console.log('yay, logo update');
	}, [counterState.isShowLogo, counterState.numb]);

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
			{counterState.isShowLogo ? (
				<div className='logo-text'>
					<p className={styles.logoText}>
						<span>i</span>
						<span className={styles.textPr}>TASK</span>
					</p>
				</div>
			) : null}
			<h3 className='text-center'>{counterState.numb}</h3>

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
// life cycle
// init => mounted => updated => unmounted
// chạy useEffect => [] => [a,b] hoặc không có dependencies =>

// useEffect(() => {
// 	first

// 	return () => {
// 		second
// 	}
// }, [third])

// useEffect sẽ xác định kiểu chạy khi third (dependencies) thay đổi
// [a,b] => useEffect chạy khi a || b thay đổi
// [] => useEffect chỉ chạy duy nhất 1 lần khi component mounted
//    => useEffect chạy mỗi lần component update
