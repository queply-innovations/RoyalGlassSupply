import React, { useState } from 'react';

interface WarehouseFormProps {
	onSave: (data: {
		warehouseID: string;
		warehouseName: string;
		warehouseLocation: string;
	}) => void;
}

const WarehouseForm: React.FC<WarehouseFormProps> = ({ onSave }) => {
	const [formData, setFormData] = useState({
		warehouseID: '',
		warehouseName: '',
		warehouseLocation: '',
	});

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
		<div className="flex flex-col">
			<label>
				Warehouse ID:
				<input
					type="text"
					name="warehouseID"
					value={formData.warehouseID}
					onChange={handleChange}
				/>
			</label>
			<label>
				Warehouse Name:
				<input
					type="text"
					name="warehouseName"
					value={formData.warehouseName}
					onChange={handleChange}
				/>
			</label>
			<label>
				Warehouse Location:
				<input
					type="text"
					name="warehouseLocation"
					value={formData.warehouseLocation}
					onChange={handleChange}
				/>
			</label>
			<button onClick={handleSave}>Save Warehouse</button>
		</div>
	);
};

export default WarehouseForm;
