import React from 'react';
import { TransferProps, columns } from './Columns';
import transferData from './transferData.json';
import { DataTable } from '../DataTable';

const transferStatusData: TransferProps[] = transferData;

export const TransferStatusTable = () => {
	return (
		<div className="table-transfer-status overflow-y-auto rounded-md border border-black/10 bg-white p-5">
			<DataTable columns={columns} data={transferStatusData} />
		</div>
	);
};

export default TransferStatusTable;
