import React, { useState, useEffect } from 'react';
import TodoCard from '../../../components/TodoCard';
import styles from '../../../assets/styles/todoPage.module.css';
import { getListTodo, setTodoDone, removeTodo } from '../../../services/fakeData';

export default function TodoList() {
	const [listTodoTask, setListTodoTask] = useState([]);

	// fake lấy data trên server

	const getListData = () => {
		setTimeout(() => {
			const listData = getListTodo();
			setListTodoTask(listData); // a
		}, 2000);
	};

	const listTaskNew = listTodoTask.filter(o => o.status_id === 1);
	const listTaskDone = listTodoTask.filter(o => o.status_id === 2);

	const finishTask = todoId => {
		const newListData = setTodoDone(todoId);

		if (!newListData) {
			alert('không tìm thấy bản ghi');
			return;
		}
		// setListTodoTask(newListData); // a
		setListTodoTask([...newListData]); // b
		console.log(listTodoTask);
		// getListData();
	};
	const removeTask = todoId => {
		const newListData = removeTodo(todoId);

		if (!newListData) {
			alert('không tìm thấy bản ghi');
			return;
		}
		// setListTodoTask(newListData); // a
		setListTodoTask([...newListData]); // b
		console.log(listTodoTask);
		// getListData();
	};

	useEffect(() => {
		// component lifecycle
		getListData();
	}, []);

	//

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
									<TodoCard selectedData={todo} finishTask={finishTask} removeTask={removeTask} />
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
									<TodoCard selectedData={todo} finishTask={finishTask} removeTask={removeTask} />
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
