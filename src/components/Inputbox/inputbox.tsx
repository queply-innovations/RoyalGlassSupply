import React from 'react';

interface InputboxProps {
	value?: string;
	placeholder: string;
}

export const Inputbox: React.FC<InputboxProps> = ({ value, placeholder }) => {
	const [newValue, SetNewValue] = React.useState('');
	const onChange = (e: React.FormEvent<HTMLInputElement>) => {
		SetNewValue(e.currentTarget.value);
	};
	return (
		<>
			<div className="InputboxContainer">
				<input
					className="InputboxContent"
					type="text"
					value={value}
					placeholder={placeholder}
					onChange={onChange}
				/>
			</div>
		</>
	);
};

export default Inputbox;
