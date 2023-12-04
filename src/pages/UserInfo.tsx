import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import UserLayout from '@/layouts/User';
import Searchbar from '@/components/Navbar/Searchbar';
import { Button } from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import UserInfoTable from '@/components/Tables/UserInfo/UserInfoTable';

const UserInfo = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<MainLayout>
			<UserLayout>
				<h1 className="page-title text-3xl font-bold text-primary-dark-gray">
					User Information
				</h1>
				<div className="user-info-container flex h-full flex-col gap-3 rounded-lg border border-black/10 bg-white p-5">
					<div className="user-info-header flex gap-x-10">
						<Searchbar ButtonIcon={false} />
						<div className="user-info-button flex gap-x-5 p-2">
							<Button
								title="ADD USER"
								color="green"
								textColor="white"
								onClick={openModal}
							/>
							<Button
								title="REMOVE USER"
								color="red"
								textColor="white"
							/>
							<Modal
								title={'ADD USER'}
								isOpen={isModalOpen}
								onClose={closeModal}
							>
								<div className="AddUserModalContent"></div>
							</Modal>
						</div>
					</div>
					<div className="user-info-table-container h-fit max-h-[75vh] overflow-y-auto">
						<UserInfoTable />
					</div>
				</div>
			</UserLayout>
		</MainLayout>
	);
};

export default UserInfo;
