import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import UserLayout from '@/layouts/User';
import Searchbar from '@/components/Navbar/Searchbar';
import { Button } from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';

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
				<div className="user-info-container flex w-full flex-col overflow-y-auto rounded-lg border border-black/10 bg-white p-5">
					<div className="user-info-header flex gap-x-10">
						<Searchbar ButtonIcon={false} />
						<div className="user-info-button flex gap-x-5 p-2">
							<Button
								title="ADD USER"
								color="green"
								textColor="white"
								onClick={openModal}
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
				</div>
			</UserLayout>
		</MainLayout>
	);
};

export default UserInfo;
