// Modal.tsx
import React, { ReactElement, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { Button } from '@/components/Button/Button';

interface ModalProps {
	title?: string;
	isOpen: boolean;
	onClose: () => void;
	children: ReactElement;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = () => {
		console.log('Submitted:', inputValue);
		onClose();
	};

	return (
		<>
			<div
				className={`modal-overlay ${
					isOpen
						? 'open visible fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-50'
						: 'closed hidden'
				}`}
				onClick={onClose}
			/>
			<div
				className={`modal absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-slate-50 stroke-1 p-5 ${
					isOpen ? 'open visible z-50 bg-white' : 'closed hidden'
				}`}
			>
				<div className="modal-content z-20 flex flex-col space-y-4">
					<div className="modal-header flex flex-row items-center justify-center">
						<h2 className="modal-title flex w-4/5 justify-center text-2xl font-bold">
							{title}
						</h2>
						<div className="ModalButtonContainer">
							<Button icon={<IoCloseSharp />} onClick={onClose} />
						</div>
					</div>
					<div className="modal-body space-y-2">{children}</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
