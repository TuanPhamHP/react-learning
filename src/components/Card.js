import React from 'react';

export default function Card(props) {
	// props là 1 obj đại diện cho các giá trị được truyền vào
	// console.log(props);
	// const todo = props.todo;
	// console.log('todo đây:', todo);

	// dùng syntax destructoring
	const { todo } = props;

	return (
		<div className='card'>
			<div className='card-body'>
				<div className='d-flex align-center justify-content-between'>
					<h5 className='card-title'>{todo.title}</h5>
					<h5 className='card-title text-danger'> {todo.amount}đ</h5>
				</div>
				<p className='card-text'>Loại: {todo.type}</p>
				<div className='mb-0 d-flex align-items-center' style={{ gap: '12px' }}>
					<button className='btn btn-danger px-4'>Xóa</button>
					<button className='btn btn-primary px-4'>Đổi kiểu</button>
				</div>
			</div>
		</div>
	);
}
