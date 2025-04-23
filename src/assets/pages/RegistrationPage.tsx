// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";

const App: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: "",
    });

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            agreeTerms: "",
        };

        if (!formData.name.trim()) {
            newErrors.name = "Введите ваше имя";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Введите ваш email";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Введите корректный email";
            isValid = false;
        }

        if (!formData.password) {
            newErrors.password = "Введите пароль";
            isValid = false;
        } else if (formData.password.length < 8) {
            newErrors.password = "Пароль должен содержать минимум 8 символов";
            isValid = false;
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Подтвердите пароль";
            isValid = false;
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Пароли не совпадают";
            isValid = false;
        }

        if (!formData.agreeTerms) {
            newErrors.agreeTerms = "Необходимо согласиться с условиями";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // Form is valid, proceed with registration
            console.log("Form submitted:", formData);
            // Here you would typically make an API call to register the user
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* Навигация */}
            <nav className="bg-gray-800 shadow-sm h-16 flex items-center px-6 lg:px-12">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <i className="fa-solid fa-brain text-blue-500 text-2xl mr-2"></i>
                        <span className="text-xl font-bold text-yellow-500">CodeAI</span>
                    </div>
                    <a
                        href="https://readdy.ai/home/0720006d-db07-4e5d-9df2-219089ef239d/e292fc0a-3960-4a04-a455-71a6badc4910"
                        data-readdy="true"
                        className="flex items-center text-gray-400 hover:text-yellow-500 transition-colors cursor-pointer"
                    >
                        <i className="fa-solid fa-arrow-left mr-2"></i>
                        <span>Вернуться на главную</span>
                    </a>
                </div>
            </nav>

            {/* Основной контент */}
            <main className="container mx-auto px-6 lg:px-12 py-12 flex justify-center">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-yellow-500 mb-2">
                            Регистрация
                        </h1>
                        <p className="text-gray-400">
                            Создайте аккаунт для доступа к персонализированному обучению
                            программированию с помощью ИИ
                        </p>
                    </div>

                    <div className="bg-gray-800 rounded-lg shadow-lg p-8">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    Имя
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    placeholder="Введите ваше имя"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-red-500 text-xs">{errors.name}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    placeholder="example@email.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-red-500 text-xs">{errors.email}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    Пароль
                                </label>
                                <div className="relative">
                                    <input
                                        type={passwordVisible ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                        placeholder="Минимум 8 символов"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
                                        onClick={() => setPasswordVisible(!passwordVisible)}
                                    >
                                        <i
                                            className={`fa-solid ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`}
                                        ></i>
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="mt-1 text-red-500 text-xs">{errors.password}</p>
                                )}
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    Подтверждение пароля
                                </label>
                                <div className="relative">
                                    <input
                                        type={confirmPasswordVisible ? "text" : "password"}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                        placeholder="Повторите пароль"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
                                        onClick={() =>
                                            setConfirmPasswordVisible(!confirmPasswordVisible)
                                        }
                                    >
                                        <i
                                            className={`fa-solid ${confirmPasswordVisible ? "fa-eye-slash" : "fa-eye"}`}
                                        ></i>
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <p className="mt-1 text-red-500 text-xs">
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>

                            <div className="mb-6">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="agreeTerms"
                                            name="agreeTerms"
                                            type="checkbox"
                                            checked={formData.agreeTerms}
                                            onChange={handleChange}
                                            className="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-yellow-500 focus:ring-2"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="agreeTerms" className="text-gray-300">
                                            Я согласен с{" "}
                                            <a href="#" className="text-yellow-500 hover:underline">
                                                условиями использования
                                            </a>{" "}
                                            и{" "}
                                            <a href="#" className="text-yellow-500 hover:underline">
                                                политикой конфиденциальности
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                {errors.agreeTerms && (
                                    <p className="mt-1 text-red-500 text-xs">
                                        {errors.agreeTerms}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-gray-900 font-medium py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                            >
                                Создать аккаунт
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-600"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-gray-800 text-gray-400">
                                        или зарегистрируйтесь через
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-3 gap-3">
                                <button
                                    type="button"
                                    className="flex justify-center items-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-gray-700 hover:bg-gray-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                                >
                                    <i className="fa-brands fa-google text-red-500 mr-2"></i>
                                    <span className="text-sm">Google</span>
                                </button>
                                <button
                                    type="button"
                                    className="flex justify-center items-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-gray-700 hover:bg-gray-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                                >
                                    <i className="fa-brands fa-facebook text-blue-600 mr-2"></i>
                                    <span className="text-sm">Facebook</span>
                                </button>
                                <button
                                    type="button"
                                    className="flex justify-center items-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-gray-700 hover:bg-gray-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                                >
                                    <i className="fa-brands fa-github text-gray-300 mr-2"></i>
                                    <span className="text-sm">GitHub</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-gray-400">
                            Уже есть аккаунт?{" "}
                            <a href="#" className="text-yellow-500 hover:underline">
                                Войти
                            </a>
                        </p>
                    </div>
                </div>
            </main>

            {/* Футер */}
            <footer className="bg-gray-800 py-8 mt-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <i className="fa-solid fa-brain text-blue-500 text-2xl mr-2"></i>
                            <span className="text-xl font-bold text-yellow-500">CodeAI</span>
                        </div>
                        <div className="flex space-x-6">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                            >
                                Главная
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                            >
                                О нас
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                            >
                                Курсы
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                            >
                                Контакты
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 CodeAI. Все права защищены.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-yellow-500 text-sm cursor-pointer"
                            >
                                Политика конфиденциальности
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-yellow-500 text-sm cursor-pointer"
                            >
                                Условия использования
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
