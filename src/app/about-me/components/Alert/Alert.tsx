import React from 'react';

export interface Props {
	title: string
	active: boolean
	typeAlert: 'success' | 'error' | 'warning'
}

const Alert: React.FC<Props> = ({ active, title, typeAlert }) => {
	const color = typeAlert == 'success' ? 'green' : 'red';

	return (
		<div className={`absolute right-2 w-max ${!active && 'hidden'}`}>
			<div className={`w-max bg-${color}-100 border border-${color}-400 text-${color}-700 px-4 py-3 rounded relative right-2 flex`} role="alert">
				<span className="block sm:inline">{title}</span>
				<span className="">
					<svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
				</span>
			</div>
		</div>
	);
};

export default Alert;
