import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import UserLayout from '@/layouts/User';

const UserSales = () => {
	return (
		<MainLayout>
			<UserLayout>
				<h1 className="page-title text-3xl font-bold text-primary-dark-gray">
					User Sales
				</h1>
			</UserLayout>
		</MainLayout>
	);
};

export default UserSales;
