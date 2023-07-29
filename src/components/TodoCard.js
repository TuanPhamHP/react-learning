import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../assets/styles/todoCard.module.css';

export default function Card({ selectedData, finishTask, removeTask }) {
	return (
		<div className={`card h-100 ${styles.todoCardContainer} ${styles.onSuccess}`}>
			<div className={`card-body d-flex flex-column justify-content-between`}>
				<div className={`d-flex align-start`}>
					<p className={`card-title text-start ${styles.todoDescription}`}>{selectedData.description}</p>

					<div className={styles.buttonContainer}>
						<button
							type='button'
							className={`btn btn-outline-success rounded-circle ${styles.buttonCheck}`}
							title='Done!'
							onClick={() => {
								finishTask(selectedData.id);
							}}
						>
							<i className='bi bi-check-all'></i>
						</button>
						<button
							type='button'
							className={`btn btn-outline-primary rounded-circle ${styles.buttonCheck}`}
							title='Back To New!'
						>
							<i className='bi bi-arrow-counterclockwise'></i>
						</button>
						<button
							type='button'
							className={`btn btn-outline-danger rounded-circle ${styles.buttonCheck}`}
							title='Remove!'
							onClick={() => {
								removeTask(selectedData.id);
							}}
						>
							<i className='bi bi-trash'></i>
						</button>
					</div>
				</div>

				<div className='w-100 d-flex align-items-center justify-content-between mb-2'>
					<p className='text-start mb-0'>{selectedData.created_at}</p>
					{/* <span className='badge rounded-pill bg-warning text-dark'>{selectedData.prio_id}</span> */}
				</div>
			</div>
		</div>
	);
}
// tạo mới bằng modal
//
