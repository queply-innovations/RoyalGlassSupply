import Searchbar from '@/components/Navbar/Searchbar';
import SelectBox from '@/components/SelectBox/SelectBox';
import MainLayout from '@/layouts/MainLayout';

const Finance = () => {
	const financeOption = ['Transaction', 'Transfer'];
	const financeFrequency = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
	return (
		<MainLayout
			pageTitle="Finance"
			cn="rounded-lg border border-black/10 bg-white p-5"
		>
			<div className="finance-header flex gap-x-10">
				<Searchbar ButtonIcon={false} />
				<div className="selectbox-container flex flex-row gap-2 rounded border border-black/10 bg-primary-white p-3">
					<SelectBox
						options={financeOption}
						hasFrequency={true}
						frequencyOptions={financeFrequency}
					/>
				</div>
			</div>
			<div className="finance-table-container flex h-full w-full rounded-md"></div>
		</MainLayout>
	);
};

export default Finance;
