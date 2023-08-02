import React from 'react';

export default function Card() {
	return (
		<div className='card'>
			<div className='card-body'>
				<div className='d-flex align-center justify-content-between'>
					<h5 className='card-title'>Đây là title</h5>
					<h5 className='card-title text-danger'> 10000đ</h5>
				</div>
				<p className='card-text'>Loại: Chi tiêu</p>
				<div className='mb-0 d-flex align-items-center' style={{ gap: '12px' }}>
					<button className='btn btn-danger px-4'>Xóa</button>
					<button className='btn btn-primary px-4'>Đổi kiểu</button>
				</div>
			</div>
		</div>
	);
}
