import React from 'react';
interface InfoBoxProps {
	title?: string;
	amount?: string;
	bgColor?: 'gradient' | 'white' | 'gray';
	titleTextColor?: 'white' | 'black';
	amountTextColor?: 'white' | 'black' | 'red';
}
export const InfoBox: React.FC<InfoBoxProps> = ({
	title,
	amount,
	bgColor = 'white',
	titleTextColor = 'black',
	amountTextColor = 'black',
}) => {
	const getBgColor = () => {
		switch (bgColor) {
			case 'gradient':
				return 'bg-gradient-to-bl from-yellow-500 via-red-500 to-red-600 ';
			case 'white':
				return 'bg-white border-black/10 border';
			case 'gray':
				return 'bg-primary-gray border-black/10 border';
			default:
				return '';
		}
	};
	const getTitleTextColor = () => {
		switch (titleTextColor) {
			case 'white':
				return 'text-white';
			case 'black':
				return 'text-black';
			default:
				return '';
		}
	};

	const getAmountTextColor = () => {
		switch (amountTextColor) {
			case 'white':
				return 'text-white';
			case 'black':
				return 'text-black';
			case 'red':
				return 'text-black';
			default:
				return '';
		}
	};

	return (
		<div
			className={`infobox-container flex w-1/4  flex-col items-center justify-between gap-y-1 rounded-md px-6 py-5 ${getBgColor()}`}
		>
			<span
				className={`infobox-title text-sm font-bold uppercase ${getTitleTextColor()}`}
			>
				{title}
			</span>
			<span
				className={`infobox-amount text-2xl font-bold ${getAmountTextColor()}`}
			>
				{amount}
			</span>
		</div>
	);
};

export default InfoBox;
