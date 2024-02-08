import React from 'react';
import Typography from '@mui/material/Typography';
import './AuthPage.css';
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage: React.FC = () => {
	return (
		<div className="auth-page">
			<AuthForm />
		</div>
	);
};

export default AuthPage;
