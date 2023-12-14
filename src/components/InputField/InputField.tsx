// InputField.tsx
import React from 'react';

interface InputFieldProps {
	label: string;
	type: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	disable?: boolean;
	required?: boolean;
	cn?: string;
}

const InputField: React.FC<InputFieldProps> = ({
	cn,
	label,
	type,
	name,
	value,
	onChange,
	disable,
	required,
}) => {
	return (
		<div className={`inputbox-container flex flex-col gap-2 ${cn || ''}`}>
			<label className="inputbox-label font-Inter text-base font-semibold uppercase text-black">
				{label}
			</label>
			<input
				className="inputbox-input rounded-full border border-black/10 bg-primary-white px-3 py-1 font-Inter text-base font-semibold outline-primary-dark-gray focus:outline"
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				disabled={disable}
				required={required}
			/>
		</div>
	);
};

export default InputField;
