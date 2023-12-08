import { Navbar } from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';
import React, { ReactNode } from 'react';

interface MainLayoutProps {
	pageTitle?: string;
	children: ReactNode;
	cn?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, pageTitle, cn }) => {
	const toTitleSelector = `${pageTitle?.toLowerCase().replace(' ', '-')}-`;
	return (
		<div className="main-layout flex max-h-screen w-screen flex-row bg-primary-background">
			<Sidebar />
			<div className="main-layout-content flex h-screen w-full flex-col gap-y-3 p-5">
				<Navbar />
				<div className="main-layout-children flex-1">
					<div
						className={`${toTitleSelector}layout flex h-full flex-col gap-y-4`}
					>
						<h1 className="page-title text-3xl font-bold capitalize text-primary-dark-gray">
							{pageTitle}
						</h1>
						<div
							className={`${
								toTitleSelector || ''
							}container flex h-full flex-col ${cn || ''}`}
						>
							{children}
						</div>
					</div>
				</div>
				<div className="main-layout-footer flex items-end justify-end">
					<p className="text-xs text-primary-dark-gray">You are STATUS</p>
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
