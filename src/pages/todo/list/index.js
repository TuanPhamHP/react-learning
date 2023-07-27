import React, { useState } from 'react';
import TodoCard from '../../../components/TodoCard';
import styles from '../../../assets/styles/todoPage.module.css';

export default function TodoList() {
	const initData = [
		{
			id: 1,
			description: 'Hôm nay cần học lại react-router và tìm hiểu react-redux',
			created_at: '2023/07/25 20:30:00',
			estimate_finish: null,
			status_id: 1,
			prio_id: 1,
		},
		{
			id: 2,
			description: 'Mai cần đi làm',
			created_at: '2023/07/25 20:30:00',
			estimate_finish: null,
			status_id: 1,
			prio_id: 1,
		},
	];

	const [listTodoTask, setListTodoTask] = useState(initData);

	const listTaskNew = listTodoTask.filter(o => o.status_id === 1);
	const listTaskDone = listTodoTask.filter(o => o.status_id === 2);

	const finishTask = task => {
		const arr = [...listTodoTask];
		const rslt = arr.findIndex(o => o.id === task.id);
		console.log(task);
		if (rslt !== -1) {
			const obj = { ...arr[rslt] };
			obj.status_id = 2;
			arr.splice(rslt, 1, obj);
			setListTodoTask(arr);
		}
	};

	return (
		<div className=''>
			<div className={`${styles.banner} px-3`}>
				<h1 className='text-white'>My todo</h1>
			</div>
			<div className='px-3 py-3'>
				<div className={`my-2`}>
					<button
						type='button'
						className={`btn text-white ${styles.btnAdd}`}
						data-bs-toggle='modal'
						data-bs-target='#staticBackdrop'
					>
						<i className='bi bi-plus-circle-dotted'></i> New Task
					</button>
				</div>
				<div className={`${styles.taskContainer} px-2 py-3 row mx-0 my-0`}>
					<div className='col-3'>
						<div className='px-2 py-2 rounded bg-white text-dark mb-3'>
							<h4 className='mb-0'>Đang làm</h4>
						</div>
						{listTaskNew.map(todo => {
							return (
								<div className='mb-3' key={todo.id}>
									<TodoCard selectedData={todo} finishTask={finishTask} />
								</div>
							);
						})}
					</div>
					<div className='col-3'>
						<div className='px-2 py-2 rounded bg-white text-dark mb-3'>
							<h4 className='mb-0'>Đã xong</h4>
						</div>
						{listTaskDone.map(todo => {
							return (
								<div className='mb-3' key={todo.id}>
									<TodoCard selectedData={todo} finishTask={finishTask} />
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div
				className='modal fade'
				id='staticBackdrop'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabIndex='-1'
				aria-labelledby='staticBackdropLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='staticBackdropLabel'>
								Modal title
							</h5>
							<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
						</div>
						<div className='modal-body'>...</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
								Close
							</button>
							<button type='button' className='btn btn-primary'>
								Understood
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// [todo1,todo2]
// => // sử dụng method map
// [<TodoCard1>, <TodoCard2>]
