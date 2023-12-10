import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Searchbar from '@/components/Navbar/Searchbar';
import SelectBox from '@/components/SelectBox/SelectBox';
import WarehouseTest from '@/components/Tables/Warehouse/__test__/WarehouseTest';
import { Button } from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import WarehouseForm from '@/components/Tables/Warehouse/__test__/WarehouseForm';

interface WarehouseProps {
	warehouseID: string;
	warehouseName: string;
	warehouseLocation: string;
}

const Warehouse = () => {
	const selectBoxOptions = ['Transaction', 'Transfer'];
	const [warehouses, setWarehouses] = useState<WarehouseProps[]>([]);

	const handleAddWarehouse = (newWarehouse: WarehouseProps) => {
		setWarehouses([...warehouses, newWarehouse]);
		setIsModalOpen(false);
	};

	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<MainLayout
			pageTitle="Warehouse"
			cn="rounded-lg border border-black/10 bg-white p-5 gap-y-5"
		>
			<div className="warehouse-header flex justify-between gap-x-10">
				<Searchbar ButtonIcon={false} />
				<Button
					title="Add Warehouse"
					color="green"
					textColor="white"
					cn="w-full max-w-[150px] self-center "
					onClick={openModal}
				/>
				<div className="selectbox-container flex flex-row gap-2 rounded border border-black/10 bg-primary-white p-3 ">
					<SelectBox
						cn="flex min-w-[10rem] rounded border border-black/10 bg-white p-2 font-semibold"
						options={selectBoxOptions}
						hasFrequency={false}
					/>
				</div>
			</div>
			<div className="warehouse-table-container h-fit max-h-[75vh] overflow-y-auto">
				<WarehouseTest />
			</div>
			<Modal onClose={closeModal} isOpen={isModalOpen}>
				<WarehouseForm onSave={handleAddWarehouse} />
			</Modal>
		</MainLayout>
	);
};

export default Warehouse;
