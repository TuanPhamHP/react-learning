import React from 'react';
import CreateDialog from '../../components/dialog/CreateProviderDialog';
import UpdateDialog from '../../components/dialog/UpdateProviderDialog';

export default function index() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12 col-md-4'>
					<div className='w-100 h-100 shadow px-2 py-2'>
						<h3>Form Add Provider</h3>
						<div>
							<CreateDialog />
						</div>
					</div>
				</div>
				<div className='col-12 col-md-4'>
					<div className='w-100 h-100 shadow px-2 py-2'>
						<h3>Form Update Provider</h3>
						<div>
							<UpdateDialog />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
