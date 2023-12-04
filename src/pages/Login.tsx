import React from 'react';
import { Button } from '@components/ui/button';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center">
			<div className="flex flex-col items-center gap-5 p-5 border-[0.5px] border-gray-50 rounded-md shadow-md">
				<div>
					<img src="/RGS-logo.png" alt="RGS Logo" className="w-20 h-20" />
				</div>
				<div className="text-3xl font-bold">Royal Glass Supply</div>
				<Link to="/Dashboard">
					<Button>Login</Button>
				</Link>
			</div>
		</div>
	);
};

export default Login;
