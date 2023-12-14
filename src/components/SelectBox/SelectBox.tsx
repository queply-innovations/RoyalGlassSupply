import React, { useState } from 'react';

interface SelectBoxProps {
	options: string[];
	hasFrequency: boolean;
	frequencyOptions?: string[];
	cn?: string;
	required?: boolean;
}

const SelectBox: React.FC<SelectBoxProps> = ({
	options,
	hasFrequency,
	frequencyOptions,
	cn,
	required,
}) => {
	const [selectedValue, setSelectedValue] = useState<string | undefined>(
		undefined,
	);

	const [selectedFrequency, setSelectedFrequency] = useState<
		string | undefined
	>(undefined);

	const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedOption = event.target.value;
		setSelectedValue(selectedOption);
		console.log(`Selected Value: ${selectedOption}`);
	};

	const handleFrequencyChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		const selectedFrequencyOption = event.target.value;
		setSelectedFrequency(selectedFrequencyOption);
		console.log(`Selected Value: ${selectedFrequencyOption}`);
	};

	return (
		<>
			<div className="selectbox-container ">
				<select
					className={`${cn}`}
					id="selectBox"
					value={selectedValue}
					onChange={handleOptionChange}
					required={required}
				>
					<option value="" disabled selected hidden>
						Sort By
					</option>
					{options.map((option, index) => (
						<option
							className="flex cursor-pointer rounded-none border-none hover:bg-primary-red "
							key={index}
							value={option}
						>
							{option}
						</option>
					))}
				</select>
			</div>
			{hasFrequency && (
				<div className="frequency-container">
					<select
						className="flex rounded border border-black/10 bg-white p-2 font-semibold"
						id="frequencyBox"
						value={selectedFrequency}
						onChange={handleFrequencyChange}
					>
						<option value="" disabled hidden selected>
							Sort By
						</option>
						{frequencyOptions &&
							frequencyOptions.map((freq, index) => (
								<option key={index} value={freq}>
									{freq}
								</option>
							))}
					</select>
				</div>
			)}
		</>
	);
};

export default SelectBox;
