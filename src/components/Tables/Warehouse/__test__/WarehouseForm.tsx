// WarehouseForm.tsx
import { Button } from '@/components/Button/Button';
import InputField from '@/components/InputField/InputField';
import React, { useState, useEffect } from 'react';

interface WarehouseFormProps {
	warehouse: Warehouse | null;
	onSave: (warehouse: Warehouse) => void;
}

interface Warehouse {
	warehouseID: string;
	warehouseName: string;
	warehouseLocation: string;
}

const WarehouseForm: React.FC<WarehouseFormProps> = ({ warehouse, onSave }) => {
	const [formData, setFormData] = useState<Warehouse>({
		warehouseID: '',
		warehouseName: '',
		warehouseLocation: '',
	});

	useEffect(() => {
		if (warehouse) {
			setFormData(warehouse);
		}
	}, [warehouse]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSave = () => {
		onSave(formData);
		setFormData({
			warehouseID: '',
			warehouseName: '',
			warehouseLocation: '',
		});
	};

	return (
		<div className="flex flex-col gap-2">
			<InputField
				label="Warehouse ID"
				type="string"
				name="warehouseID"
				value={formData.warehouseID}
				onChange={handleChange}
			/>
			<InputField
				label="Warehouse Name"
				type="text"
				name="warehouseName"
				value={formData.warehouseName}
				onChange={handleChange}
			/>
			<InputField
				label="Warehouse Location"
				type="text"
				name="warehouseLocation"
				value={formData.warehouseLocation}
				onChange={handleChange}
			/>
			<Button
				title="Save"
				color="green"
				textColor="white"
				onClick={handleSave}
			/>
		</div>
	);
};

export default WarehouseForm;
