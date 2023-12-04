import { ColumnDef } from '@tanstack/react-table';

export type Transfer = {
	id: string;
	status: 'pending' | 'processing' | 'success' | 'failed';
	action?: string;
};

export const columns: ColumnDef<Transfer>[] = [
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
