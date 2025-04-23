import React, { useState } from "react";
import * as echarts from "echarts";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState("courses");
    const [chatInput, setChatInput] = useState("");
    const [chatMessages, setMessages] = useState<
        { type: string; text: string }[]
    >([
        {
            type: "bot",
            text: "Привет! Я ваш AI-ассистент по программированию. Чем могу помочь?",
        },
    ]);

    React.useEffect(() => {
        const chartDom = document.getElementById("activity-chart");
        if (chartDom) {
            const myChart = echarts.init(chartDom);
            const option = {
                animation: false,
                tooltip: {
                    trigger: "axis",
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true,
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        name: "Активность",
                        type: "line",
                        stack: "Total",
                        data: [120, 132, 101, 134, 90, 230, 210],
                        areaStyle: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    { offset: 0, color: "rgba(59, 130, 246, 0.5)" },
                                    { offset: 1, color: "rgba(59, 130, 246, 0.1)" },
                                ],
                            },
                        },
                        lineStyle: {
                            color: "#3b82f6",
                        },
                        itemStyle: {
                            color: "#3b82f6",
                        },
                    },
                ],
            };
            myChart.setOption(option);
            const handleResize = () => {
                myChart.resize();
            };
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
                myChart.dispose();
            };
        }
    }, [activeTab]);

    const handleSendMessage = () => {
        if (chatInput.trim() === "") return;
        setMessages([...chatMessages, { type: "user", text: chatInput }]);
        // Симуляция ответа бота
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    type: "bot",
                    text: "Спасибо за ваш вопрос! Я обрабатываю информацию и скоро предоставлю вам подробный ответ.",
                },
            ]);
        }, 1000);
        setChatInput("");
    };

    const courses = [
        {
            id: 1,
            title: "Основы Python",
            description:
                "Изучите основы языка программирования Python и создайте свои первые приложения",
            level: "Начинающий",
            progress: 75,
            image:
                "https://readdy.ai/api/search-image?query=Modern%20minimalist%20illustration%20of%20Python%20programming%20language%20with%20code%20snippets%20and%20a%20python%20snake%20symbol%20on%20a%20clean%20gradient%20blue%20background%2C%20professional%20educational%20technology%20concept&width=400&height=250&seq=1&orientation=landscape",
        },
        {
            id: 2,
            title: "JavaScript для веб-разработки",
            description:
                "Научитесь создавать интерактивные веб-сайты с помощью JavaScript",
            level: "Средний",
            progress: 45,
            image:
                "https://readdy.ai/api/search-image?query=Modern%20minimalist%20illustration%20of%20JavaScript%20programming%20with%20code%20elements%20and%20web%20interface%20components%20on%20a%20clean%20gradient%20blue%20background%2C%20professional%20educational%20technology%20concept&width=400&height=250&seq=2&orientation=landscape",
        },
        {
            id: 3,
            title: "Алгоритмы и структуры данных",
            description:
                "Углубленное изучение алгоритмов и структур данных для оптимизации кода",
            level: "Продвинутый",
            progress: 30,
            image:
                "https://readdy.ai/api/search-image?query=Modern%20minimalist%20illustration%20of%20algorithms%20and%20data%20structures%20with%20visual%20representations%20of%20trees%2C%20graphs%20and%20sorting%20algorithms%20on%20a%20clean%20gradient%20blue%20background%2C%20professional%20educational%20technology%20concept&width=400&height=250&seq=3&orientation=landscape",
        },
        {
            id: 4,
            title: "Машинное обучение",
            description:
                "Изучите основы машинного обучения и создайте свои первые модели",
            level: "Продвинутый",
            progress: 15,
            image:
                "https://readdy.ai/api/search-image?query=Modern%20minimalist%20illustration%20of%20machine%20learning%20concepts%20with%20neural%20networks%2C%20data%20visualization%20and%20AI%20elements%20on%20a%20clean%20gradient%20blue%20background%2C%20professional%20educational%20technology%20concept&width=400&height=250&seq=4&orientation=landscape",
        },
        {
            id: 5,
            title: "Разработка мобильных приложений",
            description:
                "Создавайте кроссплатформенные мобильные приложения с React Native",
            level: "Средний",
            progress: 60,
            image:
                "https://readdy.ai/api/search-image?query=Modern%20minimalist%20illustration%20of%20mobile%20app%20development%20with%20smartphone%20interfaces%2C%20code%20elements%20and%20UI%20components%20on%20a%20clean%20gradient%20blue%20background%2C%20professional%20educational%20technology%20concept&width=400&height=250&seq=5&orientation=landscape",
        },
        {
            id: 6,
            title: "Веб-разработка с React",
            description: "Создавайте современные веб-приложения с библиотекой React",
            level: "Средний",
            progress: 20,
            image:
                "https://readdy.ai/api/search-image?query=Modern%20minimalist%20illustration%20of%20React%20web%20development%20with%20component%20structure%2C%20virtual%20DOM%20visualization%20and%20UI%20elements%20on%20a%20clean%20gradient%20blue%20background%2C%20professional%20educational%20technology%20concept&width=400&height=250&seq=6&orientation=landscape",
        },
    ];

    const achievements = [
        {
            id: 1,
            title: "Первые шаги",
            description: "Завершите свой первый урок",
            icon: "fa-solid fa-award",
        },
        {
            id: 2,
            title: "Настойчивость",
            description: "7 дней подряд на платформе",
            icon: "fa-solid fa-fire",
        },
        {
            id: 3,
            title: "Решение проблем",
            description: "Решите 10 практических задач",
            icon: "fa-solid fa-puzzle-piece",
        },
        {
            id: 4,
            title: "Мастер кода",
            description: "Напишите 1000 строк кода",
            icon: "fa-solid fa-code",
        },
    ];

    const popularQuestions = [
        "Как начать изучение Python?",
        "Что такое функции в JavaScript?",
        "Как работают циклы for?",
        "Объясни концепцию ООП",
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* Навигация */}
            <nav className="bg-gray-800 shadow-sm h-16 flex items-center px-6 lg:px-12">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <i className="fa-solid fa-brain text-blue-500 text-2xl mr-2"></i>
                        <span className="text-xl font-bold text-yellow-500">CodeAI</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <button
                            onClick={() => setActiveTab("courses")}
                            className={`${activeTab === "courses" ? "text-yellow-500 font-medium" : "text-gray-400"} !rounded-button whitespace-nowrap cursor-pointer`}
                        >
                            Курсы
                        </button>
                        <button
                            onClick={() => setActiveTab("practice")}
                            className={`${activeTab === "practice" ? "text-blue-600 font-medium" : "text-gray-600"} !rounded-button whitespace-nowrap cursor-pointer`}
                        >
                            Практика
                        </button>
                        <button
                            onClick={() => setActiveTab("assistant")}
                            className={`${activeTab === "assistant" ? "text-blue-600 font-medium" : "text-gray-600"} !rounded-button whitespace-nowrap cursor-pointer`}
                        >
                            AI-ассистент
                        </button>
                        <button
                            onClick={() => setActiveTab("profile")}
                            className={`${activeTab === "profile" ? "text-blue-600 font-medium" : "text-gray-600"} !rounded-button whitespace-nowrap cursor-pointer`}
                        >
                            Профиль
                        </button>
                    </div>
                    <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                        Войти
                    </button>
                </div>
            </nav>
            {/* Главный баннер */}
            <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 z-10">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                            Изучайте программирование с помощью ИИ
                        </h1>
                        <p className="text-lg text-gray-300 mb-8">
                            Персонализированное обучение, интерактивные задания и поддержка
                            ИИ-ассистента на каждом этапе вашего пути в мир программирования.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/register">
                                <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors font-medium !rounded-button whitespace-nowrap cursor-pointer">
                                    Начать бесплатно
                                </button>
                            </Link>
                            <Link to="/about">
                                <button className="bg-gray-800 text-yellow-500 border border-yellow-500 px-6 py-3 rounded-md hover:bg-gray-700 transition-colors font-medium !rounded-button whitespace-nowrap cursor-pointer">
                                    Узнать больше
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-10 md:mt-0">
                        <img
                            src="https://readdy.ai/api/search-image?query=Modern%20futuristic%20illustration%20showing%20a%20person%20interacting%20with%20AI%20technology%20for%20programming%20education%2C%20with%20holographic%20code%20elements%20and%20glowing%20blue%20interface%20elements%2C%20clean%20minimalist%20design%20with%20soft%20gradient%20background%20that%20matches%20website%20theme&width=600&height=500&seq=7&orientation=landscape"
                            alt="Обучение программированию с ИИ"
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
            {/* Основной контент */}
            <main className="container mx-auto px-6 lg:px-12 py-12">
                {activeTab === "courses" && (
                    <div>
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold">Популярные курсы</h2>
                            <button className="text-blue-600 hover:text-blue-800 !rounded-button whitespace-nowrap cursor-pointer">
                                Смотреть все курсы{" "}
                                <i className="fa-solid fa-arrow-right ml-1"></i>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {courses.map((course) => (
                                <div
                                    key={course.id}
                                    className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-semibold">{course.title}</h3>
                                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                                                {course.level}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 mb-4">{course.description}</p>
                                        <div>
                                            <div className="flex justify-between text-sm text-gray-500 mb-1">
                                                <span>Прогресс</span>
                                                <span>{course.progress}%</span>
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-2">
                                                <div
                                                    className="bg-yellow-500 h-2 rounded-full"
                                                    style={{ width: `${course.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Секция прогресса */}
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold mb-8">Ваш прогресс</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="col-span-2 bg-gray-800 p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-4">
                                        Активность за неделю
                                    </h3>
                                    <div id="activity-chart" className="w-full h-64"></div>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-4">Достижения</h3>
                                    <div className="space-y-4">
                                        {achievements.map((achievement) => (
                                            <div key={achievement.id} className="flex items-center">
                                                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mr-3">
                                                    <i className={achievement.icon}></i>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium">{achievement.title}</h4>
                                                    <p className="text-sm text-gray-600">
                                                        {achievement.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === "assistant" && (
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6">AI-ассистент</h2>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="h-96 p-4 overflow-y-auto border-b">
                                {chatMessages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={`mb-4 ${msg.type === "user" ? "text-right" : ""}`}
                                    >
                                        <div
                                            className={`inline-block p-3 rounded-lg max-w-xs sm:max-w-md ${msg.type === "user"
                                                    ? "bg-blue-600 text-white rounded-tr-none"
                                                    : "bg-gray-100 text-gray-800 rounded-tl-none"
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4">
                                <div className="mb-4">
                                    <h4 className="text-sm font-medium text-gray-500 mb-2">
                                        Популярные вопросы:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {popularQuestions.map((question, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setChatInput(question)}
                                                className="bg-gray-700 hover:bg-gray-600 text-gray-100 text-sm px-3 py-1 rounded-full !rounded-button whitespace-nowrap cursor-pointer"
                                            >
                                                {question}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex">
                                    <input
                                        type="text"
                                        value={chatInput}
                                        onChange={(e) => setChatInput(e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                                        placeholder="Задайте вопрос по программированию..."
                                        className="flex-1 border border-gray-600 bg-gray-800 text-gray-100 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-r-md hover:bg-yellow-600 !rounded-button whitespace-nowrap cursor-pointer"
                                    >
                                        <i className="fa-solid fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            {/* Футер */}
            <footer className="bg-gray-800 py-12 mt-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <i className="fa-solid fa-brain text-blue-500 text-2xl mr-2"></i>
                                <span className="text-xl font-bold text-yellow-500">
                                    CodeAI
                                </span>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Платформа для обучения программированию с использованием
                                искусственного интеллекта.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                                >
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                                >
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                                    >
                                        Главная
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                                    >
                                        Курсы
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                                    >
                                        Практика
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                                    >
                                        AI-ассистент
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                                    >
                                        Профиль
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Ресурсы</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                                    >
                                        Блог
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                                    >
                                        Документация
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                                    >
                                        Сообщество
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                                    >
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <i className="fa-solid fa-envelope mr-2 text-blue-600"></i>
                                    <span>support@codeai.ru</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="fa-solid fa-phone mr-2 text-blue-600"></i>
                                    <span>+7 (800) 123-45-67</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="fa-solid fa-location-dot mr-2 text-blue-600"></i>
                                    <span>Москва, Россия</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-600 text-sm">
                            © 2025 CodeAI. Все права защищены.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a
                                href="#"
                                className="text-gray-600 hover:text-blue-600 text-sm cursor-pointer"
                            >
                                Политика конфиденциальности
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-blue-600 text-sm cursor-pointer"
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

export default HomePage;