export default function Card({ selectedData, removeData, logAnything }) {
	// selectedData được truyền giá trị từ component cha vào
	// cấu trúc destructor
	// modern js

	// props là dạng object
	// props LUÔN CÓ DẠNG READ-ONLY
	const handleButtonRemoveClick = () => {
		// removeData(selectedData); // event bus
		console.log('child clicked');
		logAnything();
	};

	return (
		<div className='card '>
			<div className='card-body'>
				<h5 className='card-title'>{selectedData.name}</h5>
				<p className={`card-text ${selectedData.type === 'income' ? 'bg-success' : 'bg-danger'}`}>
					{selectedData.type}
				</p>
				<p className='card-text'>{selectedData.amount}</p>

				<button onClick={handleButtonRemoveClick} type='button' className='btn btn-danger'>
					Xóa
				</button>
			</div>
		</div>
	);
}

export const CardNumber2 = () => {
	return <h1>Card 2 nè</h1>;
};

export const CardNumber3 = () => {
	return <h1>Card 3 nè</h1>;
};

// export default function Card(props) {
// 	const item = { id: 1, name: 'Hóa đơn ăn sáng', type: 'outcome', amount: 500 };

// 	console.log(props);
// 	// props là dạng object

// 	return (
// 		<div className='card '>
// 			<div className='card-body'>
// 				<h5 className='card-title'>{item.name}</h5>
// 				<p className='card-text'>{item.type}</p>
// 				<p className='card-text'>{item.amount}</p>

// 				<button type='button' className='btn btn-danger'>
// 					Xóa
// 				</button>
// 			</div>
// 		</div>
// 	);
// }
