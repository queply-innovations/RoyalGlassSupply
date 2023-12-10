import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Searchbar from '@/components/Navbar/Searchbar';
import SelectBox from '@/components/SelectBox/SelectBox';
import { Button } from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import WarehouseForm from '@/components/Tables/Warehouse/__test__/WarehouseForm';
import WarehouseTable from '@/components/Tables/Warehouse/__test__/WarehouseTable.test';

interface Warehouse {
	warehouseID: string;
	warehouseName: string;
	warehouseLocation: string;
}

const Warehouse = () => {
	const selectBoxOptions = ['Transaction', 'Transfer'];

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
	const [editWarehouse, setEditWarehouse] = useState<Warehouse | null>(null);

	const handleEdit = (warehouseID: string) => {
		const warehouseToEdit = warehouses.find(
			w => w.warehouseID === warehouseID,
		);
		if (warehouseToEdit) {
			setEditWarehouse(warehouseToEdit);
		}
		setIsModalOpen(true);
	};

	const handleDelete = (warehouseID: string) => {
		setWarehouses(prevWarehouses =>
			prevWarehouses.filter(w => w.warehouseID !== warehouseID),
		);
	};
	const handleSave = (newWarehouse: Warehouse) => {
		if (editWarehouse) {
			// Update existing warehouse
			setWarehouses(prevWarehouses =>
				prevWarehouses.map(w =>
					w.warehouseID === editWarehouse.warehouseID ? newWarehouse : w,
				),
			);
			setEditWarehouse(null);
			setIsModalOpen(false);
		} else {
			// Add new warehouse
			setWarehouses(prevWarehouses => [...prevWarehouses, newWarehouse]);
			setIsModalOpen(false);
		}
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
					cn="w-full max-w-[150px] self-center"
					onClick={() => setIsModalOpen(true)}
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
				<WarehouseTable
					warehouses={warehouses}
					onEdit={handleEdit}
					onDelete={handleDelete}
				/>
				<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
					<WarehouseForm warehouse={editWarehouse} onSave={handleSave} />
				</Modal>
			</div>
		</MainLayout>
	);
};

export default Warehouse;
