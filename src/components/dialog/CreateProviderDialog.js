import React, { useState } from 'react';

export default function CreateDialog() {
	const [form, setForm] = useState({ logoUrl: '', name: '', url: '' });

	const handleChangeFormData = e => {
		const myValue = e.target.value;
		const myKey = e.target.name;
		setForm({
			...form,
			[myKey]: myValue,
		});
	};

	const resetForm = () => {
		setForm({ logoUrl: '', name: '', url: '' });
	};

	return (
		<div>
			<button
				onClick={resetForm}
				type='button'
				className='btn btn-primary'
				data-bs-toggle='modal'
				data-bs-target='#dialogAddNewData'
			>
				Add new
			</button>
			<div
				className='modal fade'
				id='dialogAddNewData'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabIndex='-1'
				aria-labelledby='dialogAddNewDataLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='dialogAddNewDataLabel'>
								Add Provider
							</h5>
							<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
						</div>
						<div className='modal-body'>
							<div className='mb-3'>
								<label htmlFor='providerLogoUrl' className='form-label'>
									Provider Logo URL
								</label>
								<input
									value={form.logoUrl}
									type='text'
									placeholder='Eg: https://example.com/logo.png'
									className='form-control'
									id='providerLogoUrl'
									aria-describedby='providerLogoUrl'
									name='logoUrl'
									onChange={handleChangeFormData}
								/>
								<div className='d-flex align-items-center pt-3' style={{ gap: '12px' }}>
									<div className='form-text'>Logo will demo here</div>
									<div
										className='rounded'
										style={{
											width: '52px',
											height: '52px',
											backgroundColor: '#d5d5d5',
											border: '1px dashed #d5d5d5',
											padding: '1px',
										}}
									>
										{form.logoUrl ? (
											<img
												src={form.logoUrl}
												alt=''
												style={{
													display: 'block',
													width: '100%',
													height: '100%',
													objectFit: 'cover',
												}}
											/>
										) : null}
									</div>
								</div>
							</div>
							<div className='mb-3'>
								<label htmlFor='providerName' className='form-label'>
									Provider Name
								</label>
								<input
									value={form.name}
									type='text'
									placeholder='Eg: Exciting Tracker'
									className='form-control'
									id='providerName'
									name='name'
									onChange={handleChangeFormData}
								/>
							</div>
							<div className='mb-3'>
								<label htmlFor='providerLink' className='form-label'>
									Provider URL
								</label>
								<input
									value={form.url}
									type='text'
									placeholder='Eg: https://example.com'
									className='form-control text-primary text-underline'
									id='providerLink'
									name='url'
									onChange={handleChangeFormData}
								/>
							</div>
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal' onClick={resetForm}>
								Cancel
							</button>
							<button type='button' className='btn btn-primary' onClick={resetForm}>
								Create
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
