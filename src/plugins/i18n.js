import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const	messages = {
		en: {
			windowTitle: 'Registration',
			message: {
				errorPage: {
					error: 'Error!!!',
					linkIsWrong: 'Invalid link!',
				},
				registrationPage: {
					linkHasNoParams: 'Link has no parameters!',
					paramIsWrong: 'Parameter in link is wrong!',
					paramsAreWrong: 'The parameters in the link are incorrect!',
					secondParamIsWrong: 'The second parameter in the link is incorrect!',
					firstParamIsWrong: 'The first parameter in the link is incorrect!',
					linkHasNotCorrespondin: "The link is not associated with any event!",
					serverNotResponse: 'No response from server!',
					responseButError: 'Response code: {errorresponsestatus}\nError: {errorresponsedata}',
					youHaveRegistration: 'Registration with the specified email address already exists!',
				},
				registrationForm: {
					obligatoryFieldMessage: "* - required fields!",
					name: "Name",
					surname: 'Surname',
					company: 'Company',
					position: 'Position',
					phone: 'Phone number',
					consentProcessingPersData: 'I agree to the processing of personal data',
					registrate: 'Sign up',
					obligatoryWriteIn: "Required!",
					nameMastConsistsLettersOnly: 'Only letters should be in the name',
					wronEmail: "Invalid e-mail!",
					rightCompanyName: "Letters, numbers, symbols are allowed: '.', '-', '&'",
					rightPositionName: "Letters, numbers, symbols are allowed: '.', '-'",
					rightPhoneNumber: "First symbol '+', next - country code, city code/mobile operator, phone number",
					lineHasMore50symbols: 'The number of characters more than 50',
					lineHasMore100symbols: 'The number of characters more than 100',
					registrationSuccess: 'Thank you for registering!',
					registrationSuccessAdd: 'You will receive a confirmation email shortly detailing your upcoming event. <br> We look forward to seeing you.',
					registratonFailed: 'Registration data was not saved.',
					countrySelectorLabel: 'Country code',
					countrySelectorError: 'Choice country',
					phoneNumberLabel: 'Phone number',
					example: 'Sample: '
				},
			}
		},
		uk: {
			windowTitle: 'Реєстрація',
			message: {
				errorPage: {
					error: 'Помилка!!!',
					linkIsWrong: 'Некоректне посилання!',
				},
				registrationPage: {
					linkHasNoParams: 'В посиланні відсутні параметри!',
					paramIsWrong: 'Параметр в посиланні некоректний!',
					paramsAreWrong: 'Параметри в посиланні некоректні!',
					secondParamIsWrong: 'Другий параметр в посиланні некоректний!',
					firstParamIsWrong: 'Перший параметр в посиланні некоректний!',
					linkHasNotCorrespondin: "Посилання не пов'язане з жодною подією!",
					serverNotResponse: 'Відповідь від сервера не отримана!',
					responseButError: 'Код відповіді: {errorresponsestatus}\nПомилка: {errorresponsedata}',
					youHaveRegistration: 'Реєстрація з вказанною електронною адресою вже існує!',
				},
				registrationForm: {
					obligatoryFieldMessage: "* - обов'язкові поля!",
					name: "Ім'я",
					surname: 'Прізвище',
					company: 'Компанія',
					position: 'Посада',
					phone: 'Телефон',
					consentProcessingPersData: 'Я згоден на обробку персональних даних',
					registrate: 'Зареєструватися',
					obligatoryWriteIn: "Обов'язково для заповнення!",
					nameMastConsistsLettersOnly: 'В імені мають бути лише літери',
					wronEmail: "Некоректний e-mail!",
					rightCompanyName: "Дозволені літери, цифры, символы: '.', '-', '&'",
					rightPositionName: "Дозволені літери, цифры, символы: '.', '-'",
					rightPhoneNumber: "Перший символ '+', далі - код країни, міста/оператора мобільного зв'язку, номер",
					lineHasMore50symbols: 'Кількість символів перевищує 50',
					lineHasMore100symbols: 'Кількість символів перевищує 100',
					registrationSuccess: 'Дякуємо за реєстрацію!',
					registrationSuccessAdd: 'Незабаром Ви отримаєте електронного листа з підтверженням, в якому будуть вказані подробиці про майбутню подію.<br>Ми з нетерпінням чекаємо на зустріч з Вами.',
					registratonFailed: 'Дані реєстрації не були збережені.',
					countrySelectorLabel: 'Код країни',
					countrySelectorError: 'Обрати країну',
					phoneNumberLabel: 'Номер телефону',
					example: 'Приклад: '
				},
			}
		},
		ru: {
			windowTitle: 'Регистрация',
			message: {
				errorPage: {
					error: 'Ошибка!!!',
					linkIsWrong: 'Некорректная ссылка!',
				},
				registrationPage: {
					linkHasNoParams: 'В ссылке нет параметров!',
					paramIsWrong: 'Параметр в ссылке некорректен!',
					paramsAreWrong: 'Параметры в ссылке некорректны!',
					secondParamIsWrong: 'Второй параметр в ссылке не корректен!',
					firstParamIsWrong: 'Первый параметр в ссылке не корректен!',
					linkHasNotCorrespondin: 'Ссылка не связана ни с одним из событий!',
					serverNotResponse: 'Ответ от сервера не получен!',
					responseButError: 'Код ответа: {errorresponsestatus}\nОшибка: {errorresponsedata}',
					youHaveRegistration: 'Регистрация c указанным электронным адресом уже существует!',
				},
				registrationForm: {
					obligatoryFieldMessage: '* - обязательные поля!',
					name: 'Имя',
					surname: 'Фамилия',
					company: 'Компания',
					position: 'Должность',
					phone: 'Телефон',
					consentProcessingPersData: 'Я согласен на обработку персональных данных',
					registrate: 'Зарегистрироваться',
					obligatoryWriteIn: 'Обязательно для заполнения!',
					nameMastConsistsLettersOnly: 'В имени должны быть только буквы',
					wronEmail: "Некоректный e-mail!",
					rightCompanyName: "Допустимы буквы, цифры, символы: '.', '-', '&'",
					rightPositionName: "Допустимы буквы, цифры, символы: '.', '-'",
					rightPhoneNumber: "Первый символ '+', далее - код страны, города/оператора мобильной связи, номер",
					lineHasMore50symbols: 'Количество символов превышает 50',
					lineHasMore100symbols: 'Количество символов превышает 100',
					registrationSuccess: 'Спасибо за регистрацию!',
					registrationSuccessAdd: 'Вскоре Вы получите электронное письмо с подтверждением, в котором будут указаны подробности о предстоящем мероприятии.<br>Мы с нетерпением ждем встречи с Вами.',
					registratonFailed: 'Данные регистрации не были сохранены.',
					countrySelectorLabel: 'Код страны',
					countrySelectorError: 'Выбрать страну',
					phoneNumberLabel: 'Номер телефона',
					example: 'Пример: '
				}	
			}
		}
	}

export const i18n = new VueI18n({
	fallbackLocale: 'en',
	silentFallbackWarn: true,
	messages
})