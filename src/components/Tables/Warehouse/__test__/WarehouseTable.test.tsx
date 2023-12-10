// WarehouseTable.tsx
import { Button } from '@/components/Button/Button';
import React from 'react';

interface WarehouseTableProps {
	warehouses: Warehouse[];
	onEdit: (warehouseID: string) => void;
	onDelete: (warehouseID: string) => void;
}

interface Warehouse {
	warehouseID: string;
	warehouseName: string;
	warehouseLocation: string;
}

const WarehouseTable: React.FC<WarehouseTableProps> = ({
	warehouses,
	onEdit,
	onDelete,
}) => {
	const warehouseTableHeader: string[] = [
		'Warehouse ID',
		'Warehouse Name',
		'Warehouse Location',
		'Action',
	];
	return (
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
			<tbody>
				{warehouses.map(warehouse => (
					<tr key={warehouse.warehouseID}>
						<td className="border py-5 text-center font-Inter text-xs font-bold uppercase">
							{warehouse.warehouseID}
						</td>
						<td className="border py-5 text-center font-Inter text-xs font-bold uppercase">
							{warehouse.warehouseName}
						</td>
						<td className="border py-5 text-center font-Inter text-xs font-bold uppercase">
							{warehouse.warehouseLocation}
						</td>
						<td className="flex flex-row justify-center gap-3 border py-5 text-center font-Inter text-xs font-bold uppercase">
							<Button
								title="Edit"
								color="yellow"
								onClick={() => onEdit(warehouse.warehouseID)}
							/>

							<Button
								title="Delete"
								color="red"
								onClick={() => onDelete(warehouse.warehouseID)}
							/>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default WarehouseTable;
