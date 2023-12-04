import { Button } from '@/components/Button/Button';
import React from 'react';

const NotFound = () => {
	return (
		<>
			<div className="flex h-screen w-screen flex-col items-center justify-center">
				<h1 className="text-9xl font-bold text-primary-dark-gray">404</h1>
				<h2 className="text-3xl font-bold text-primary-dark-gray">
					Page Not Found
				</h2>
				<p className="text-xl text-primary-dark-gray">
					Sorry, the page you're looking for doesn't exist.
				</p>
				<Button
					title="Go Back"
					color="red"
					textColor="white"
					onClick={() => window.history.back()}
				/>
			</div>
		</>
	);
};

export default NotFound;
