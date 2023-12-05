import React, { useReducer, useState } from 'react';
import inventoryData from './inventorydata.json';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	SortingState,
	getSortedRowModel,
	useReactTable,
	getPaginationRowModel,
} from '@tanstack/react-table';

type InventoryDataProps = {
	product_id: string;
	dimensions: string;
	price: string;
	product_name: string;
	serial: string;
	damage_count: number;
	miscellaneous: number;
	total_inventory: number;
	inventory_status: string;
};

const tableInventoryData: InventoryDataProps[] = inventoryData;

const columnHelper = createColumnHelper<InventoryDataProps>();
const columns = [
	columnHelper.accessor(row => row.product_id, {
		id: 'Product ID',
		cell: info => info.getValue(),
		footer: info => info.column.id,
	}),
	columnHelper.accessor('dimensions', {
		id: 'dimensions',
		cell: info => <i>{info.getValue()}</i>,
		header: () => <span>Dimensions</span>,
		footer: info => info.column.id,
	}),
	columnHelper.accessor(row => row.price, {
		id: 'price',
		cell: info => info.getValue(),
		header: () => <span>Price</span>,
		footer: info => info.column.id,
	}),
	columnHelper.accessor(row => row.product_name, {
		id: 'product_name',
		cell: info => info.getValue(),
		header: ({ column }) => {
			return (
				<button
					className="font-Inter text-xs font-bold uppercase"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					Product Name
				</button>
			);
		},
		footer: info => info.column.id,
	}),
	columnHelper.accessor(row => row.serial, {
		id: 'serial',
		cell: info => info.getValue(),
		header: () => <span>Serial</span>,
		footer: info => info.column.id,
	}),
	columnHelper.accessor(row => row.damage_count, {
		id: 'damage_count',
		cell: info => info.getValue(),
		header: () => <span>Damage Count</span>,
		footer: info => info.column.id,
	}),
	columnHelper.accessor(row => row.miscellaneous, {
		id: 'miscellaneous',
		cell: info => info.getValue(),
		header: () => <span>Misc</span>,
		footer: info => info.column.id,
	}),
	columnHelper.accessor(row => row.total_inventory, {
		id: 'total_inventory',
		cell: info => info.getValue(),
		header: () => <span>Total Inv</span>,
		footer: info => info.column.id,
	}),
	columnHelper.accessor(row => row.inventory_status, {
		id: 'inventory_status',
		cell: info => info.getValue(),
		header: () => <span>Inv Status</span>,
		footer: info => info.column.id,
	}),
];

const InventoryTable = () => {
	const [data, setData] = useState(() => [...tableInventoryData]);
	const [sorting, setSorting] = useState<SortingState>([]);
	const rerender = useReducer(() => ({}), {})[1];

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		state: {
			sorting,
		},
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: {
				pageSize: 30,
			},
		},
	});

	return (
		<>
			<table className="w-full overflow-y-scroll">
				<thead className="inventory-table-head rounded border-b border-black/10 bg-white ">
					{table.getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map(header => (
								<th
									className="py-5 font-Inter text-xs font-bold uppercase"
									key={header.id}
								>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext(),
										  )}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody className="bg-primary-white">
					{table.getRowModel().rows.map(row => (
						<tr key={row.id}>
							{row.getVisibleCells().map(cell => (
								<td
									className="p-1 text-center font-Inter text-xs text-black"
									key={cell.id}
								>
									{flexRender(
										cell.column.columnDef.cell,
										cell.getContext(),
									)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<div>
				<button
					className="PaginationButton"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					{'<'}
				</button>
				<button
					className="PaginationButton"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					{'>'}
				</button>
			</div>
		</>
	);
};

export default InventoryTable;
