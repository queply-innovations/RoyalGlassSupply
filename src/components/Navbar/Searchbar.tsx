import React from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

interface SearchbarProps {
	ButtonIcon: boolean;
}
export const Searchbar: React.FC<SearchbarProps> = ({ ButtonIcon }) => {
	return (
		<div className="searchbar flex w-2/5">
			<div
				className={`searchbar ${
					ButtonIcon
						? 'iconinside flex w-full items-center rounded-full border border-black/10 bg-white p-2 pl-5'
						: 'iconbutton flex w-full items-center justify-between rounded-full border border-black/10 bg-white'
				}`}
			>
				{ButtonIcon ? (
					<>
						<HiOutlineMagnifyingGlass className="searchbar-icon text-2xl" />
						<input
							className="searchbar-input ml-3 mr-4 w-full focus-visible:outline-none "
							placeholder="Search"
						/>
					</>
				) : (
					<>
						<input
							className="searchbar-input ml-5 focus-visible:outline-none"
							placeholder="Search"
						/>
						<HiOutlineMagnifyingGlass className="searchbar-icon rounded-br-full rounded-tr-full bg-gray-50/50 p-2 text-4xl" />
					</>
				)}
			</div>
		</div>
	);
};

export default Searchbar;
