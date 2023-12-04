import React, { ReactNode } from 'react';

interface UserProps {
	children: ReactNode;
}

const UserLayout: React.FC<UserProps> = ({ children }) => {
	return (
		<div className="user-layout flex h-full flex-col gap-y-4">{children}</div>
	);
};

export default UserLayout;
