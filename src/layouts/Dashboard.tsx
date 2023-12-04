import React, { ReactNode } from 'react';

interface DashboardProps {
	children: ReactNode;
}

const DashboardLayout: React.FC<DashboardProps> = ({ children }) => {
	return (
		<div className="dashboard-layout flex flex-col gap-y-4">{children}</div>
	);
};

export default DashboardLayout;
