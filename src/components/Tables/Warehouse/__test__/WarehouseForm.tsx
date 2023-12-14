// WarehouseForm.tsx
import { Button } from '@/components/Button/Button';
import InputField from '@/components/InputField/InputField';
import React, { useState, useEffect } from 'react';
import Warehouse from './types';

interface WarehouseFormProps {
	warehouse: Warehouse | null;
	onSave: (warehouse: Warehouse) => void;
	warehouseTableData: Warehouse[];
}

const WarehouseForm: React.FC<WarehouseFormProps> = ({
	warehouse,
	onSave,
	warehouseTableData,
}) => {
	const [formData, setFormData] = useState<Warehouse>({
		warehouseID: '',
		warehouseName: '',
		warehouseLocation: '',
	});

	useEffect(() => {
		if (warehouseTableData && warehouseTableData.length > 0) {
			const lastUsedID = Math.max(
				...warehouseTableData.map(warehouse =>
					Number(warehouse.warehouseID),
				),
				0,
			);
			setFormData(prevData => ({
				...prevData,
				warehouseID: (lastUsedID + 1).toString(),
			}));
		} else {
			setFormData(prevData => ({
				...prevData,
				warehouseID: '1',
			}));
		}
	}, [warehouseTableData]);

	useEffect(() => {
		if (warehouse) {
			setFormData(warehouse);
		}
	}, [warehouse, warehouseTableData]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const validateForm = () => {
		const missingKeys = Object.keys(formData).filter(
			key => (formData as any)[key] === '',
		);

		if (missingKeys.length > 0) {
			alert(
				`Please enter values for the following fields: ${missingKeys.join(
					', ',
				)}`,
			);
			return false;
		}

		return true;
	};

	const handleSave = () => {
		if (validateForm()) {
			onSave(formData);
			setFormData({
				warehouseID: '',
				warehouseName: '',
				warehouseLocation: '',
			});
		}
	};

	return (
		<form className="flex w-[350px]">
			<div className="flex w-full flex-col gap-2">
				<InputField
					label="Warehouse ID"
					type="string"
					name="warehouseID"
					value={formData.warehouseID}
					onChange={handleChange}
					disable={true}
				/>
				<InputField
					label="Warehouse Name"
					type="text"
					name="warehouseName"
					value={formData.warehouseName}
					onChange={handleChange}
					required={true}
				/>
				<InputField
					label="Warehouse Location"
					type="text"
					name="warehouseLocation"
					value={formData.warehouseLocation}
					onChange={handleChange}
					required={true}
				/>
				<Button
					title="Save"
					color="green"
					textColor="white"
					onClick={handleSave}
				/>
			</div>
		</form>
	);
};

export default WarehouseForm;
