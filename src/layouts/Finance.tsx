import React, { ReactNode } from 'react';

interface FinanceProps {
	children: ReactNode;
}

const FinanceLayout: React.FC<FinanceProps> = ({ children }) => {
	return (
		<div className="finance-layout flex h-full flex-col gap-y-4">
			{children}
		</div>
	);
};

export default FinanceLayout;
