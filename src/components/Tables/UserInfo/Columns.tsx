import { ColumnDef } from '@tanstack/react-table';

export type AddUserDataProps = {
	complete_name: string;
	role: string;
	username: string;
	contact: string;
	emergency_num: string;
};

export const columns: ColumnDef<AddUserDataProps>[] = [
	{
		accessorKey: 'complete_name',
		id: 'Complete Name',
		header: 'COMPLETE NAME',
	},
	{
		accessorKey: 'role',
		id: 'role',
		header: 'ROLE',
	},
	{
		accessorKey: 'username',
		id: 'username',
		header: 'USERNAME',
	},
	{
		accessorKey: 'contact',
		id: 'contact',
		header: 'CONTACT',
	},
	{
		accessorKey: 'emergency_num',
		id: 'emergency_num',
		header: 'EMERGENCY #',
	},
];
