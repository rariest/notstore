import { useState } from "react";
import './style/registration.scss';
import FormInput from "../components/FormInput/FormInput";
import Header from "../components/Header/Header";

const App = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "user1992 ",
            errorMessage:
                "Имя пользователя должно быть от 4-16 символов и состоять из латиницы и цифр!",
            label: "Имя пользователя",
            pattern: "^[A-Za-z0-9]{4,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "user1992@mail.ru",
            errorMessage: "Адрес должен быть настоящим!",
            label: "Электронная почта",
            required: true,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "QWe123!",
            errorMessage:
                "Пароль должен быть от 8 до 20 символов и вклчючать как минимум 1 букву, цифру и спец. знак!",
            label: "Пароль",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "QWe123!",
            errorMessage: "Пароли не совпадают!",
            label: "Подтверждение пароля",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
        <>
            <Header/>
            <div className="form-reg">
                <form className={'form__container'} onSubmit={handleSubmit}>
                    <h1 className={'form__title'}>Регистрация</h1>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <button type='reset' className={'form__button'}>Submit</button>
                </form>
            </div>
        </>
    );
};

export default App;



