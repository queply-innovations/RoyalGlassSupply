import { Route, Routes } from 'react-router-dom';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import UserInfo from '@/pages/UserInfo';
import UserSales from '@/pages/UserSales';
import Transfer from '@/pages/Transfer';
import Finance from '@/pages/Finance';
import Page404 from '@/pages/Page404';
import Inventory from '@/pages/Inventory';
import Warehouse from '@/pages/Warehouse';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="*" element={<Page404 />} />
					<Route path="/dashboard" element={<Dashboard />}></Route>
					<Route path="/user/info" element={<UserInfo />}></Route>
					<Route path="/user/sales" element={<UserSales />}></Route>
					<Route path="/transfer" element={<Transfer />}></Route>
					<Route path="/finance" element={<Finance />}></Route>
					<Route path="/inventory" element={<Inventory />}></Route>
					<Route path="/warehouse" element={<Warehouse />}></Route>
				</Routes>
			</QueryClientProvider>
		</>
	);
}

export default App;
