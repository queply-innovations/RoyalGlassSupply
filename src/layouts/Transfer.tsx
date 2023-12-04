import React, { ReactNode } from 'react';

interface TransferProps {
	children: ReactNode;
}

const TransferLayout: React.FC<TransferProps> = ({ children }) => {
	return (
		<div className="transfer-layout flex h-full flex-col gap-y-4">
			{children}
		</div>
	);
};

export default TransferLayout;
