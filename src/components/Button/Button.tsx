import React, { ReactElement } from 'react';
import { BiSolidPrinter } from 'react-icons/bi';

interface ButtonProps {
	cn?: string;
	title?: string;
	onClick?: () => void;
	color?: 'default' | 'green' | 'red' | 'yellow';
	textColor?: 'black' | 'white';
	print?: boolean;
	icon?: ReactElement;
}

export const Button: React.FC<ButtonProps> = ({
	cn,
	title,
	onClick,
	color = 'default',
	textColor = 'black',
	print = false,
	icon,
}) => {
	const colorClassNames: Record<
		'default' | 'green' | 'red' | 'yellow',
		string
	> = {
		default: 'default',
		green: 'bg-primary-green hover:bg-primary-green/80',
		red: 'bg-primary-red hover:bg-primary-red/80',
		yellow: 'bg-primary-yellow hover:bg-primary-yellow/80',
	};
	const textColorClassNames: Record<'black' | 'white', string> = {
		black: 'text-black',
		white: 'text-white',
	};

	const textColorClassName = `${textColorClassNames[textColor] || ''}`;
	const buttonClassName = `button gap-2 rounded-full px-3 py-1 gap-x-2 ${
		colorClassNames[color] || ''
	}`;

	const handlePrintClick = () => {
		const container = document.querySelector('.ReportsContainer');
		const mywindow = window.open('', 'PRINT', 'height=400,width=600');
		if (mywindow) {
			mywindow.document.write(
				'<html><head><title>' + (document.title ?? '') + '</title>',
			);
			mywindow.document.write('</head><body >');
			mywindow.document.write('<h1>' + (document.title ?? '') + '</h1>');
			mywindow.document.write(container?.innerHTML ?? '');
			mywindow.document.write('</body></html>');

			if (print) {
				mywindow.print();
			}
		}
	};

	return (
		<button
			className={buttonClassName + ' ' + cn}
			onClick={() => {
				if (print === true) {
					handlePrintClick();
				} else {
					onClick?.();
				}
			}}
		>
			{icon}
			<span
				className={`button-text font-Lato font-bold  ${textColorClassName}`}
			>
				{title} {print && <BiSolidPrinter />}
			</span>
		</button>
	);
};
