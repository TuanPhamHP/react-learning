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
