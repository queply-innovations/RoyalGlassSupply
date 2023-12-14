import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Searchbar from '@/components/Navbar/Searchbar';
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
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
	const [editWarehouse, setEditWarehouse] = useState<Warehouse | null>(null);

	const handleEdit = (warehouseID: string) => {
		const warehouseToEdit = warehouses.find(
			w => w.warehouseID === warehouseID,
		);
		if (warehouseToEdit) {
			setEditWarehouse(warehouseToEdit);
			setIsModalOpen(true);
		}
	};

	const handleDelete = (warehouseID: string) => {
		setWarehouses(prevWarehouses =>
			prevWarehouses.filter(w => w.warehouseID !== warehouseID),
		);
	};
	const handleSave = (newWarehouse: Warehouse) => {
		if (editWarehouse) {
			setWarehouses(prevWarehouses =>
				prevWarehouses.map(w =>
					w.warehouseID === editWarehouse.warehouseID ? newWarehouse : w,
				),
			);
			setEditWarehouse(null);
			setIsModalOpen(false);
		} else {
			setWarehouses(prevWarehouses => [...prevWarehouses, newWarehouse]);
			setIsModalOpen(false);
		}
	};

	const resetFormValues = () => {
		setEditWarehouse({
			warehouseID: '',
			warehouseName: '',
			warehouseLocation: '',
		});
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
					cn="w-full max-w-[150px] self-center"
					onClick={() => setIsModalOpen(true)}
				/>
			</div>
			<div className="warehouse-table-container h-fit max-h-[75vh] overflow-y-auto">
				<WarehouseTable
					warehouses={warehouses}
					onEdit={handleEdit}
					onDelete={handleDelete}
				/>
				<Modal isOpen={isModalOpen} onClose={resetFormValues}>
					<WarehouseForm
						warehouse={editWarehouse}
						onSave={handleSave}
						warehouseTableData={warehouses}
					/>
				</Modal>
			</div>
		</MainLayout>
	);
};

export default Warehouse;
