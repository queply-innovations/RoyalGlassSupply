import { Button } from '@/components/Button/Button';
import Searchbar from '@/components/Navbar/Searchbar';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Transfer = () => {
	return (
		<MainLayout
			pageTitle="Add Transfer"
			cn="rounded-lg border border-black/10 bg-white p-5"
		>
			<div className="add-transfer-header flex gap-x-10">
				<Searchbar ButtonIcon={false} />
			</div>
			<div className="add-transfer-row-container flex h-full w-full flex-row">
				<div className="add-transfer-table-container h-full w-[70%] overflow-y-auto">
					Table Here
				</div>
				<div className="add-transfer-receipt-container flex h-full w-[30%] flex-col items-center justify-between rounded-md border border-black/10 bg-primary-white p-4">
					<p className="add-transfer-receipt-title font-Inter text-base font-light uppercase">
						Item Review
					</p>
					<div className="add-transfer-receipt-table h-full w-full overflow-y-auto"></div>
					<div className="add-transfer-receipt-total-container flex w-full flex-col gap-y-12 border-t border-primary-dark-gray">
						<div className="add-transfer-receipt-total flex w-full flex-row justify-between">
							<p className="add-transfer-receipt-total-title font-Inter text-base font-light uppercase">
								Total
							</p>
							<span className="add-transfer-receipt-total-amount text-lg font-bold">
								999.00
							</span>
						</div>
						<Button
							cn="self-end"
							title="Produce Receipt"
							color="yellow"
							textColor="black"
						/>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Transfer;
