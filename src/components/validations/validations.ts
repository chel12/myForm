const REQUIRED_FIELD = 'Обязательное для заполнения';
export const loginValidation = {
	required: REQUIRED_FIELD,
	validate: (value: string) => {
		if (value.match(/[а-яA-Я]/)) {
			return 'Логин не может содержать русские буквы';
		}
		return true;
	},
};
export const passwordValidation = {
	required: REQUIRED_FIELD,
	validate: (value: string) => {
		if (value.length < 6) {
			return 'Пароль не может быть меньше 6-ти символов';
		}
		return true;
	},
};
//Метод match() возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением.
