import React from 'react';
import DashboardLayout from '@/layouts/Dashboard';
import MainLayout from '@/layouts/MainLayout';
import InfoBox from '@/components/InfoBox/Infobox';
import GrossAndNetProfit from '@/components/Chart/GrossAndNetProfit';
const Dashboard = () => {
	return (
		<MainLayout>
			<DashboardLayout>
				<h1 className="page-title text-3xl font-bold text-primary-dark-gray">
					Dashboard
				</h1>
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
				<div className="row-container flex flex-row justify-between gap-8">
					<GrossAndNetProfit />
				</div>
			</DashboardLayout>
		</MainLayout>
	);
};
export default Dashboard;
