import React, { useState } from 'react';

import Card from '../components/Card';

export default function TodoPage() {
	const initData = [
		{
			id: 1,
			title: 'Đây là title',
			amount: 100000,
			type: 'income',
		},
	];

	const [listData, setListData] = useState(initData);
	const [form, setForm] = useState({});
	const changeType = e => {
		console.log(e);
	};
	return (
		<div>
			<div className='container'>
				<div className='py-3 border-bottom'>
					{/* Khối để tạo data */}
					<div className='mb-3'>
						<label htmlFor='exampleFormControlInput1' className='form-label'>
							Tiêu đề
						</label>
						<input type='text' className='form-control' id='exampleFormControlInput1' placeholder='Tiêu đề' />
					</div>
					<div className='mb-3'>
						<label htmlFor='amountIput' className='form-label'>
							Số tiền
						</label>
						<input type='number' className='form-control' id='amountIput' placeholder='Số tiền' />
					</div>
					<div className='mb-3'>
						<label htmlFor='amountIput' className='form-label'>
							Loại
						</label>
						<select className='form-select' ame='selectedType' defaultValue='income' onChange={changeType}>
							<option value='income'>Thu nhập</option>
							<option value='outcome'>Chi tiêu</option>
						</select>
					</div>
					<div className='mb-0'>
						<button className='btn btn-success d-block w-100'>Thêm</button>
					</div>
				</div>

				<div className='py-3'>
					{/* Khối render ra danh sách */}

					<div className='row'>
						<div className='col-4'>
							{listData.map(data => {
								return <Card key={data.id} todo={data} dataId={data.id} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
