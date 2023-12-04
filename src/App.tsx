import { Route, Routes } from 'react-router-dom';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import UserInfo from '@/pages/UserInfo';
import UserSales from '@/pages/UserSales';
import Transfer from '@/pages/Transfer';
import Finance from '@/pages/Finance';
import Page404 from '@/pages/Page404';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="*" element={<Page404 />} />
				<Route path="/dashboard" element={<Dashboard />}></Route>
				<Route path="/user/info" element={<UserInfo />}></Route>
				<Route path="/user/sales" element={<UserSales />}></Route>
				<Route path="/transfer" element={<Transfer />}></Route>
				<Route path="/finance" element={<Finance />}></Route>
			</Routes>
		</>
	);
}

export default App;
