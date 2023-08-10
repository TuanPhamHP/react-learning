import React, { useState } from 'react';
import myData from '../dum-data';
import { Link } from 'react-router-dom';
export default function HomePage() {
	const [listData, setListData] = useState(myData);
	console.log(listData);
	return (
		<div>
			<div className='container py-5'>
				<h1 className='text-center'>Trang chủ</h1>
				<div className='row'>
					<div className='col-12 col-md-6 shadow py-4'>
						<h3 className='text-center'>Example cho đề Stream:</h3>
						<Link to='/stream/example' className='text-white  d-block w-100 text-decoration-none'>
							<button className='btn btn-primary d-block w-100'>Form Add, Update</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
