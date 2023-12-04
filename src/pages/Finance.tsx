import Searchbar from '@/components/Navbar/Searchbar';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Finance = () => {
	return (
		<MainLayout pageTitle="Finance">
			<div className="finance-container flex h-full flex-col gap-3 rounded-lg border border-black/10 bg-white p-5">
				<div className="finance-header flex gap-x-10">
					<Searchbar ButtonIcon={false} />
				</div>
				<div className="finance-table-container flex h-full w-full rounded-md"></div>
			</div>
		</MainLayout>
	);
};

export default Finance;
