import { ColumnDef } from '@tanstack/react-table';

export type TransferProps = {
	id: number;
	status: string;
	action?: null;
};

export const columns: ColumnDef<TransferProps>[] = [
	{
		accessorKey: 'id',
		header: 'Transfer ID',
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
	{
		accessorKey: 'action',
		header: 'action',
	},
];
