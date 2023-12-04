import React from 'react';
import { DataTable } from '@components/Tables/DataTable';
import userData from './userData.json';
import { AddUserDataProps, columns } from './Columns';

const tableAddUserData: AddUserDataProps[] = userData;

export const UserInfoTable = () => {
	return <DataTable columns={columns} data={tableAddUserData} />;
};
export default UserInfoTable;
