import { Navbar } from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';
import React, { ReactNode } from 'react';

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className="main-layout flex w-screen flex-row bg-primary-background">
			<Sidebar />
			<div className="main-layout-content flex h-screen w-full flex-col gap-y-3 p-5">
				<Navbar />
				<div className="main-layout-children flex-1">{children}</div>
				<div className="main-layout-footer flex items-end justify-end">
					<p className="text-xs text-primary-dark-gray">You are online</p>
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
