import { Route, Routes } from 'react-router-dom';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />}></Route>
			</Routes>
		</>
	);
}

export default App;
