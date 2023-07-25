export default function Card({ selectedData }) {
	return (
		<div className='card h-100'>
			<div className='card-body'>
				<div className='w-100 d-flex align-items-center justify-between'>
					<p className='text-start'>{selectedData.created_at}</p>
					<span class='badge rounded-pill bg-warning text-dark'>{selectedData.prio_id}</span>
				</div>
				<h5 className='card-title text-start'>{selectedData.description}</h5>
				<p className={`card-text ${selectedData.type === 'income' ? 'bg-success' : 'bg-danger'}`}>
					{selectedData.type}
				</p>

				<p className='card-text'>{selectedData.amount}</p>
			</div>
		</div>
	);
}
// tạo mới bằng modal
//
