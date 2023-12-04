import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import InfoBox from '@/components/InfoBox/Infobox';
import GrossAndNetProfit from '@/components/Chart/GrossAndNetProfit';
// import TransferStatusTable from '@/components/Tables/Transfer/TransferStatus';
import TransferStatus from '@/components/Tables/Transfer/transfer';
import InventoryTable from '@/components/Tables/Inventory/inventory';
import TopSellingProducts from '@/components/Tables/TopSellingProducts/topSellingProducts';
const Dashboard = () => {
	return (
		<MainLayout pageTitle="Dashboard">
			<div className="infobox-container flex flex-row justify-between gap-8">
				<InfoBox
					title="Gross Income"
					amount="999.00"
					bgColor="gradient"
					titleTextColor="white"
					amountTextColor="white"
				/>
				<InfoBox
					title="Net Profit"
					amount="999.00"
					bgColor="white"
					titleTextColor="black"
					amountTextColor="black"
				/>
				<InfoBox
					title="Sales Return"
					amount="999.00"
					bgColor="white"
					titleTextColor="black"
					amountTextColor="red"
				/>
				<InfoBox
					title="Total Capital"
					amount="999.00"
					bgColor="gray"
					titleTextColor="white"
					amountTextColor="white"
				/>
			</div>
			<div className="row-container flex h-full flex-col gap-6 ">
				<div className="row-container flex flex-row gap-8">
					<GrossAndNetProfit />
					<TransferStatus />
					{/* <TransferStatusTable /> */}
				</div>
				<div className="row-container flex h-full flex-row gap-8">
					<InventoryTable />
					<TopSellingProducts />
				</div>
			</div>
		</MainLayout>
	);
};
export default Dashboard;
