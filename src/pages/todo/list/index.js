import React, { useState } from 'react';
import TodoCard from '../../../components/TodoCard';

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

	return (
		<div className='px-3'>
			<h1>Đây là danh sách Todo của bạn</h1>

			<div className='row'>
				<div className='col-3'>
					<div className='card h-100'>
						<div className='card-body'>
							<button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>
								<span style={{ fontSize: '40px' }}>+</span>
							</button>
						</div>
					</div>
				</div>
				{listTodoTask.map(todo => {
					return (
						<div className='col-3' key={todo.id}>
							<TodoCard selectedData={todo} />
						</div>
					);
				})}
			</div>

			<div
				className='modal fade'
				id='staticBackdrop'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabindex='-1'
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
