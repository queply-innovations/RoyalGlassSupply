import { Button } from '@/components/Button/Button';
import Inputbox from '@/components/Inputbox/inputbox';
import Modal from '@/components/Modal/Modal';
import React, { ChangeEvent, useState } from 'react';

interface WarehouseProps {
	warehouseId: string;
	warehouseName: string;
	warehouseLocation: string;
}

const WarehouseTest: React.FC = () => {
	const warehouseTableHeader: string[] = [
		'Warehouse ID',
		'Warehouse Name',
		'Warehouse Location',
		'Action',
	];
	const warehouseData: WarehouseProps[] = [
		{
			warehouseId: '1',
			warehouseName: 'Warehouse 1',
			warehouseLocation: 'Location 1',
		},
		{
			warehouseId: '2',
			warehouseName: 'Warehouse 2',
			warehouseLocation: 'Location 3',
		},
	];

	const [isModalOpen, setIsModalOpen] = useState(false);

	const [selectedRowData, setSelectedRowData] =
		useState<WarehouseProps | null>(null);

	const handleRowClick = (data: WarehouseProps) => {
		setSelectedRowData(data);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setSelectedRowData(null);
		setIsModalOpen(false);
	};

	const handleInputChange = (
		event: ChangeEvent<HTMLInputElement>,
		propertyName: keyof WarehouseProps,
	) => {
		if (selectedRowData) {
			setSelectedRowData({
				...selectedRowData,
				[propertyName]: event.target.value,
			});
		}
	};
	return (
		<>
			<table className="w-full overflow-y-auto">
				<thead className="warehouse-head rounded border-black/10 bg-white ">
					<tr>
						{warehouseTableHeader.map(header => (
							<th
								key={header}
								className="border py-5 font-Inter text-xs font-bold uppercase"
							>
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="warehouse-table-body">
					{warehouseData.map(data => (
						<tr key={data.warehouseId}>
							<td className="border py-5 text-center font-Inter text-xs font-bold uppercase">
								{data.warehouseId}
							</td>
							<td className="border py-5 text-center font-Inter text-xs font-bold uppercase">
								{data.warehouseName}
							</td>
							<td className="border py-5 text-center font-Inter text-xs font-bold uppercase">
								{data.warehouseLocation}
							</td>
							<td className="flex justify-center gap-5 border p-5 py-5 text-center font-Inter text-xs font-bold uppercase">
								<Button
									title="Edit"
									color="yellow"
									onClick={handleRowClick.bind(null, data)}
								/>
								<Button title="Remove" color="red" />
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<form className="edit-warehouse-modal-form flex min-w-[500px] flex-row gap-5">
					<div className="edit-warehouse-modal-form-content flex flex-col gap-5 ">
						<Inputbox
							label="Warehouse Name"
							value={selectedRowData?.warehouseName}
						/>
						<Inputbox
							label="Warehouse Location"
							value={selectedRowData?.warehouseLocation}
						/>
						<Inputbox
							label="Warehouse Location"
							value={selectedRowData?.warehouseLocation}
						/>
					</div>
				</form>
			</Modal>
		</>
	);
};

export default WarehouseTest;
