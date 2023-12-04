import { Route, Routes } from 'react-router-dom';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import UserInfo from '@/pages/UserInfo';
import UserSales from '@/pages/UserSales';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />}></Route>
				<Route path="/user/info" element={<UserInfo />}></Route>
				<Route path="/user/sales" element={<UserSales />}></Route>
			</Routes>
		</>
	);
}

export default App;
