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
								<button className="text-primary-blue">Edit</button>
								<button className="text-primary-red">Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default WarehouseTest;
