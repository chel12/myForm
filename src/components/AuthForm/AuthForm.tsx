import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';
import './AuthForm.css';

const AuthForm: React.FC = () => {
	const { handleSubmit, control } = useForm();
	const onSubmit = () => console.log('data');

	return (
		<div className="auth-form">
			<Typography variant="h4" gutterBottom component="div">
				Войдите
			</Typography>
			<Typography
				variant="subtitle1"
				gutterBottom
				component="div"
				className="auth-form__subtitle">
				Чтобы получить доступ
			</Typography>
			<form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
				<Controller
					control={control}
					name="login"
					render={({ field }) => (
						<TextField
							label="Логин"
							size="small"
							margin="normal"
							className="auth-form__input"
							fullWidth
							onChange={(e) => field.onChange(e)}
							value={field.value}
						/>
					)}
				/>
				<Controller
					control={control}
					name="password"
					render={({ field }) => (
						<TextField
							label="Пароль"
							type="password"
							size="small"
							margin="normal"
							className="auth-form__input"
							fullWidth
							onChange={(e) => field.onChange(e)}
							value={field.value}
						/>
					)}
				/>
				{/* <TextField
					label="Логин"
					size="small"
					margin="normal"
					className="auth-form__input"
					fullWidth
				/>
				<TextField
					label="Пароль"
					type="password"
					size="small"
					margin="normal"
					className="auth-form__input"
					fullWidth
				/> */}

				<Button
					type="submit"
					variant="contained"
					fullWidth
					disableElevation
					sx={{
						marginTop: 2,
					}}>
					Войти
				</Button>
			</form>
		</div>
	);
};

export default AuthForm;
//disableElevation убирает тень
//sx={{}} переопределине стилей материала
//useForm - форма реакт хук
//controller - для управления. Материал контролируемые. Реакт хук не контроллируемые(из рефа берет)
//каждый компонент MUI или ANTD обернуть в контроллер
//обернули в контроллер и настроили
//onChange={(e) => field.onChange(e)}
// value={field.value}
