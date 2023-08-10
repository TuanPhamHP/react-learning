import React, { useState } from 'react';

export default function UpdateDialog() {
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
		setForm({
			logoUrl: 'https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png',
			name: 'Youtube',
			url: 'https://www.youtube.com/',
		});
	};

	return (
		<div>
			<button
				onClick={resetForm}
				type='button'
				className='btn btn-primary'
				data-bs-toggle='modal'
				data-bs-target='#dialogUpdateData'
			>
				Update
			</button>
			<div
				className='modal fade'
				id='dialogUpdateData'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabIndex='-1'
				aria-labelledby='dialogUpdateDataLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='dialogUpdateDataLabel'>
								Update Provider
							</h5>
							<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
						</div>
						<div className='modal-body'>
							<div className='mb-3'>
								<label htmlFor='selectedProviderLogoUrl' className='form-label'>
									Provider Logo URL
								</label>
								<input
									value={form.logoUrl}
									type='text'
									placeholder='Eg: https://example.com/logo.png'
									className='form-control'
									id='selectedProviderLogoUrl'
									aria-describedby='selectedProviderLogoUrl'
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
								<label htmlFor='selectedProviderName' className='form-label'>
									Provider Name
								</label>
								<input
									value={form.name}
									type='text'
									placeholder='Eg: Exciting Tracker'
									className='form-control'
									id='selectedProviderName'
									name='name'
									onChange={handleChangeFormData}
								/>
							</div>
							<div className='mb-3'>
								<label htmlFor='selectedProviderLink' className='form-label'>
									Provider URL
								</label>
								<input
									value={form.url}
									type='text'
									placeholder='Eg: https://example.com'
									className='form-control text-primary text-underline'
									id='selectedProviderLink'
									name='url'
									onChange={handleChangeFormData}
								/>
							</div>
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal' onClick={resetForm}>
								Cancel
							</button>
							<button type='button' className='btn btn-primary'>
								Update
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
