import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const UserSales = () => {
	return (
		<MainLayout pageTitle="User Sales">
			<div className="user-sale-container flex h-full flex-col gap-3 rounded-lg border border-black/10 bg-white p-5"></div>
		</MainLayout>
	);
};

export default UserSales;
