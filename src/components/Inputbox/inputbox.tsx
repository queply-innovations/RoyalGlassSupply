import React from 'react';

interface InputboxProps {
	label?: string;
	value?: string;
	placeholder?: string;
}

export const Inputbox: React.FC<InputboxProps> = ({
	value,
	placeholder,
	label,
}) => {
	const [newValue, SetNewValue] = React.useState('');
	const onChange = (e: React.FormEvent<HTMLInputElement>) => {
		SetNewValue(e.currentTarget.value);
	};
	return (
		<>
			<div className="inputbox-container flex flex-col gap-2">
				<label className="inputbox-label font-Inter text-base font-semibold uppercase text-black">
					{label}
				</label>
				<input
					className="inputbox-input rounded-full border border-black/10 bg-primary-white px-3 py-1 font-Inter text-base font-semibold outline-primary-dark-gray focus:outline"
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
