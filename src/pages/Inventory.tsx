import { Button } from '@/components/Button/Button';
import Inputbox from '@/components/Inputbox/inputbox';
import Modal from '@/components/Modal/Modal';
import Searchbar from '@/components/Navbar/Searchbar';
import SelectBox from '@/components/SelectBox/SelectBox';
import InventoryTable from '@/components/Tables/Inventory/InventoryTable';
import MainLayout from '@/layouts/MainLayout';
import React, { useState } from 'react';

const Inventory = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	const markUpOptions = ['5%', '10%', '15%', '20%', '25%', '30%', 'CUSTOM'];
	return (
		<MainLayout
			pageTitle="Inventory"
			cn="rounded-lg border border-black/10 bg-white p-5"
		>
			<div className="inventory-header flex justify-between gap-x-10">
				<Searchbar ButtonIcon={false} />
				<div className="add-inventory-button flex w-1/4 gap-x-5 p-2">
					<Button
						title="Add"
						color="green"
						textColor="white"
						cn="flex-1"
						onClick={openModal}
					/>
					<Modal
						cn="flex flex-col w-[50vw]"
						isOpen={isModalOpen}
						onClose={closeModal}
					>
						<>
							<form className="add-inventory-modal-form flex flex-row gap-5">
								<div className="add-inventory-modal-form-content flex w-1/2 flex-col gap-5">
									<Inputbox
										label="Product Name"
										placeholder="Enter Product Name"
									/>
									<Inputbox
										label="Product Color"
										placeholder="Enter Product Color"
									/>
									<Inputbox
										label="Product Dimensions"
										placeholder="Enter Product Dimensions"
									/>
									<Inputbox
										label="Product Quantity"
										placeholder="Enter Product Quantity"
									/>
								</div>
								<div className="add-inventory-modal-form-content flex w-1/2 flex-col gap-5">
									<Inputbox
										label="WHOLESALE PRICE"
										placeholder="Enter WHOLESALE PRICE"
									/>
									<Inputbox
										label="RETAIL PRICE"
										placeholder="Enter RETAIL PRICE"
									/>
									<div className="markup-container flex flex-col gap-2">
										<label className="markup-label font-Inter text-base font-semibold uppercase text-black">
											Mark Up
										</label>
										<SelectBox
											cn="flex min-w-[10rem] w-full rounded-full border border-black/10 bg-white p-2 font-semibold"
											options={markUpOptions}
											hasFrequency={false}
										/>
									</div>
								</div>
							</form>
							<Button
								cn="self-end w-1/4"
								title="Save Product"
								color="green"
								textColor="white"
							/>
						</>
					</Modal>
					<Button
						title="Remove"
						color="red"
						textColor="white"
						cn="flex-1"
					/>
				</div>
			</div>
			<div className="inventory-table-container h-full flex-1 rounded border border-black/10">
				<InventoryTable />
			</div>
		</MainLayout>
	);
};

export default Inventory;
