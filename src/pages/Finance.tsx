import Searchbar from '@/components/Navbar/Searchbar';
import FinanceLayout from '@/layouts/Finance';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Finance = () => {
	return (
		<MainLayout>
			<FinanceLayout>
				<h1 className="page-title text-3xl font-bold text-primary-dark-gray">
					Finance
				</h1>
				<div className="finance-container flex h-full flex-col gap-3 rounded-lg border border-black/10 bg-white p-5">
					<div className="finance-header flex gap-x-10">
						<Searchbar ButtonIcon={false} />
					</div>
					<div className="finance-table-container flex h-full w-full rounded-md"></div>
				</div>
			</FinanceLayout>
		</MainLayout>
	);
};

export default Finance;
