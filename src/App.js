import './App.css';

import Card from './components/Card';

import { useState } from 'react';

function App() {
	const [listData, setListData] = useState([
		{ id: 1, name: 'Hóa đơn ăn sáng', type: 'outcome', amount: 500 },
		{ id: 2, name: 'Hóa đơn ăn trưa', type: 'outcome', amount: 1000 },
		{ id: 3, name: 'Hóa đơn ăn nhẹ', type: 'outcome', amount: 20 },
		{ id: 4, name: 'Hóa đơn mua đồ lưu niệm', type: 'outcome', amount: 120 },
		{ id: 5, name: 'Hóa đơn gửi xe', type: 'outcome', amount: 10 },
		{ id: 6, name: 'Hóa đơn thuê đồ', type: 'outcome', amount: 25 },
		{ id: 7, name: 'Lương công ty', type: 'income', amount: 50000 },
	]);

	const removeData = data => {
		const newList = listData.filter(item => {
			//
			return item.id !== data.id;
		});

		setListData(newList);
	};

	const logAnything = () => {
		console.log('parent clicked');
	};

	return (
		<div className='App'>
			<div className='row'>
				{/* <CardNumber4 /> */}
				{listData.map((item, index) => {
					return (
						<div key={item.id} className='col-12 col-md-4 mb-3'>
							{/* 
							Truyền data từ cha vào component Card 
							tên prop là billData và giá trị là item
						 */}
							<Card selectedData={item} removeData={removeData} logAnything={logAnything} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;

// let a = [1,2,3,4,5,6]
// let b = a.filter((item)=>{
//
// 	return 0
// })

// []

// 1. []
// 2. []
// 3. []
// 4. [4]
// 5. [4,5]
// 6. [4,5,6]
