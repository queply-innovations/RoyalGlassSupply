/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from 'react';
import { BsClipboardCheckFill } from 'react-icons/bs';
import { FaShoppingCart, FaUser, FaUserClock } from 'react-icons/fa';
import { BsBank2 } from 'react-icons/bs';
import { VscGraph } from 'react-icons/vsc';
import { TbArrowBackUp } from 'react-icons/tb';
import { BiSolidTruck } from 'react-icons/bi';

interface SidebarDataProps {
	title: string;
	icon: ReactNode;
	link?: string;
	subMenu?: {
		title: string;
		link: string;
	}[];
}

export const SidebarData = [
	{
		title: 'User',
		icon: <FaUser className="text-2xl" />,
		subMenu: [
			{
				title: 'User Information',
				link: '/user/info',
			},
			{
				title: 'User Sales',
				link: '/user/sales',
			},
		],
	},
	{
		title: 'Pending',
		icon: <FaUserClock className="text-2xl" />,
		subMenu: [
			{
				title: 'Pending Inventory',
				link: '/pendinginventory',
			},
			{
				title: 'Pending Transfer',
				link: '/pendingtransfer',
			},
			{
				title: 'Pending Return',
				link: '/pendingreturn',
			},
		],
	},
	{
		title: 'Transaction',
		icon: <FaShoppingCart className="text-2xl" />,
		subMenu: [
			{
				title: 'Transaction',
				link: '/transaction',
			},
			{
				title: 'Expenses',
				link: '/expenses',
			},
		],
	},
	{
		title: 'Transfer',
		icon: <BiSolidTruck className="text-2xl" />,
		link: '/transfer',
	},
	{
		title: 'Return',
		icon: <TbArrowBackUp className="text-2xl" />,
		link: '/return',
	},
	{
		title: 'Inventory',
		icon: <BsClipboardCheckFill className="text-2xl" />,
		link: '/inventory',
	},
	{
		title: 'Finance',
		icon: <BsBank2 className="text-2xl" />,
		link: '/finance',
	},
	{
		title: 'Reports',
		icon: <VscGraph className="text-2xl" />,
		link: '/reports',
	},
	{
		title: 'Warehouse',
		icon: <VscGraph className="text-2xl" />,
		link: '/warehouse',
	},
];

export default SidebarData;
