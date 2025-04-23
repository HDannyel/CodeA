// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const toggleFaq = (index: number) => {
        if (activeFaqIndex === index) {
            setActiveFaqIndex(null);
        } else {
            setActiveFaqIndex(index);
        }
    };
    const faqs = [
        {
            question: 'Как работает обучение с ИИ на платформе CodeAI?',
            answer: 'Наша платформа использует передовые алгоритмы искусственного интеллекта для анализа вашего прогресса, выявления сильных и слабых сторон, и адаптации учебного материала под ваши индивидуальные потребности. ИИ-ассистент доступен 24/7 для ответов на вопросы и помощи в решении задач.'
        },
        {
            question: 'Подходит ли платформа для начинающих без опыта в программировании?',
            answer: 'Да, CodeAI разработана для пользователей с любым уровнем подготовки. Для начинающих мы предлагаем вводные курсы с пошаговыми инструкциями и дополнительной поддержкой ИИ-ассистента, который поможет разобраться с базовыми концепциями.'
        },
        {
            question: 'Какие языки программирования можно изучать на платформе?',
            answer: 'На данный момент платформа предлагает курсы по Python, JavaScript, Java, C++, Ruby, PHP и другим популярным языкам программирования. Мы постоянно расширяем нашу библиотеку курсов.'
        },
        {
            question: 'Выдаете ли вы сертификаты по окончании обучения?',
            answer: 'Да, по завершении каждого курса вы получаете сертификат, подтверждающий ваши навыки. Наши сертификаты признаются многими IT-компаниями и могут стать хорошим дополнением к вашему резюме.'
        },
        {
            question: 'Как долго я буду иметь доступ к купленным курсам?',
            answer: 'После приобретения курса вы получаете пожизненный доступ к его материалам и всем будущим обновлениям. Вы можете возвращаться к изученному материалу в любое время.'
        }
    ];
    const testimonials = [
        {
            id: 1,
            name: 'Алексей Петров',
            role: 'Студент 3 курса',
            image: 'https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520young%2520Russian%2520male%2520university%2520student%2520with%2520short%2520dark%2520hair%2520and%2520glasses%252C%2520looking%2520enthusiastic%2520and%2520friendly%252C%2520wearing%2520casual%2520attire%252C%2520on%2520a%2520neutral%2520background%2520with%2520soft%2520lighting%2520and%2520professional%2520composition&width=100&height=100&seq=8&orientation=squarish',
            rating: 5,
            text: 'Курс помог мне структурировать знания по программированию. ИИ-ассистент всегда готов помочь с решением сложных задач, а преподаватели дают ценные рекомендации по улучшению кода.'
        },
        {
            id: 2,
            name: 'Мария Иванова',
            role: 'Студентка 2 курса',
            image: 'https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520young%2520Russian%2520female%2520university%2520student%2520with%2520long%2520brown%2520hair%252C%2520looking%2520friendly%2520and%2520studious%252C%2520wearing%2520casual%2520clothing%252C%2520on%2520a%2520neutral%2520background%2520with%2520soft%2520lighting%2520and%2520professional%2520composition&width=100&height=100&seq=9&orientation=squarish',
            rating: 5,
            text: 'Отличный курс для студентов! Интерактивные задания и поддержка ИИ-ассистента помогли мне быстро освоить язык программирования и успешно сдать экзамены.'
        },
        {
            id: 3,
            name: 'Дмитрий Соколов',
            role: 'Выпускник курса',
            image: 'https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520young%2520Russian%2520male%2520graduate%2520student%2520with%2520short%2520light%2520brown%2520hair%252C%2520looking%2520successful%2520and%2520professional%252C%2520wearing%2520smart%2520casual%2520attire%252C%2520on%2520a%2520neutral%2520background%2520with%2520soft%2520lighting%2520and%2520professional%2520composition&width=100&height=100&seq=10&orientation=squarish',
            rating: 5,
            text: 'Благодаря курсу я смог получить необходимые практические навыки программирования. Особенно полезными оказались проекты с реальными задачами и код-ревью от преподавателей.'
        }
    ];
    const plans = [
        {
            id: 'student',
            name: 'Студенческий курс',
            price: 'Бесплатно',
            features: [
                'Доступ ко всем материалам курса',
                'Поддержка ИИ-ассистента',
                'Практические задания',
                'Проверка домашних работ',
                'Сертификат по окончании курса',
                'Доступ к сообществу студентов',
                'Консультации с преподавателями'
            ],
            recommended: true
        }
    ];
    const team = [
        {
            id: 1,
            name: 'Андрей Смирнов',
            role: 'Основатель и CEO',
            image: 'https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520confident%2520Russian%2520male%2520CEO%2520in%2520his%2520early%252040s%2520with%2520short%2520dark%2520hair%2520and%2520well%2520groomed%2520beard%252C%2520wearing%2520a%2520modern%2520business%2520suit%252C%2520standing%2520against%2520a%2520neutral%2520office%2520background%2520with%2520soft%2520professional%2520lighting&width=200&height=200&seq=11&orientation=squarish',
            bio: 'Более 15 лет опыта в IT и образовательных технологиях. Создал CodeAI с миссией сделать обучение программированию доступным для всех.'
        },
        {
            id: 2,
            name: 'Елена Козлова',
            role: 'CTO',
            image: 'https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520confident%2520Russian%2520female%2520CTO%2520in%2520her%2520mid%252030s%2520with%2520shoulder%2520length%2520brown%2520hair%252C%2520wearing%2520smart%2520business%2520attire%252C%2520standing%2520against%2520a%2520neutral%2520tech%2520office%2520background%2520with%2520soft%2520professional%2520lighting&width=200&height=200&seq=12&orientation=squarish',
            bio: 'Эксперт в области искусственного интеллекта и машинного обучения. Руководит технической стороной платформы и развитием ИИ-ассистента.'
        },
        {
            id: 3,
            name: 'Максим Васильев',
            role: 'Руководитель образовательных программ',
            image: 'https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520friendly%2520Russian%2520male%2520education%2520director%2520in%2520his%2520late%252030s%2520with%2520glasses%2520and%2520short%2520light%2520brown%2520hair%252C%2520wearing%2520smart%2520casual%2520attire%252C%2520standing%2520against%2520a%2520neutral%2520educational%2520setting%2520background%2520with%2520soft%2520professional%2520lighting&width=200&height=200&seq=13&orientation=squarish',
            bio: 'Бывший преподаватель компьютерных наук с 10-летним стажем. Отвечает за разработку учебных программ и методологию обучения.'
        },
        {
            id: 4,
            name: 'Ольга Никитина',
            role: 'UX/UI дизайнер',
            image: 'https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520creative%2520Russian%2520female%2520UX%2520UI%2520designer%2520in%2520her%2520early%252030s%2520with%2520stylish%2520short%2520hair%2520and%2520modern%2520glasses%252C%2520wearing%2520contemporary%2520creative%2520professional%2520attire%252C%2520standing%2520against%2520a%2520neutral%2520design%2520studio%2520background%2520with%2520soft%2520professional%2520lighting&width=200&height=200&seq=14&orientation=squarish',
            bio: 'Создает интуитивно понятный и привлекательный интерфейс платформы, делая процесс обучения максимально комфортным для пользователей.'
        }
    ];
    const advantages = [
        {
            id: 1,
            title: 'Персонализированное обучение',
            description: 'ИИ анализирует ваш прогресс и адаптирует материалы под ваш уровень и стиль обучения',
            icon: 'fa-solid fa-user-graduate'
        },
        {
            id: 2,
            title: 'Интерактивная практика',
            description: 'Закрепляйте знания через практические задания с мгновенной обратной связью от ИИ',
            icon: 'fa-solid fa-code'
        },
        {
            id: 3,
            title: 'Круглосуточная поддержка',
            description: 'ИИ-ассистент всегда готов ответить на вопросы и помочь с решением задач',
            icon: 'fa-solid fa-headset'
        },
        {
            id: 4,
            title: 'Актуальные технологии',
            description: 'Постоянно обновляемые курсы, отражающие последние тенденции в мире программирования',
            icon: 'fa-solid fa-rocket'
        }
    ];
    const methodologySteps = [
        {
            id: 1,
            title: 'Оценка уровня',
            description: 'ИИ определяет ваш текущий уровень знаний через тестирование и анализ навыков',
            icon: 'fa-solid fa-chart-bar'
        },
        {
            id: 2,
            title: 'Персонализация',
            description: 'Создание индивидуального плана обучения на основе ваших целей и начального уровня',
            icon: 'fa-solid fa-user-cog'
        },
        {
            id: 3,
            title: 'Теория и практика',
            description: 'Интерактивное изучение материала с немедленным применением знаний на практике',
            icon: 'fa-solid fa-book-reader'
        },
        {
            id: 4,
            title: 'Анализ прогресса',
            description: 'ИИ отслеживает ваши успехи и корректирует план обучения для максимальной эффективности',
            icon: 'fa-solid fa-chart-line'
        },
        {
            id: 5,
            title: 'Проектная работа',
            description: 'Применение полученных навыков в реальных проектах с поддержкой ИИ-ассистента',
            icon: 'fa-solid fa-project-diagram'
        }
    ];
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const nextTestimonial = () => {
        setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
    const prevTestimonial = () => {
        setTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* Навигация */}
            <nav className="bg-gray-800 shadow-sm h-16 flex items-center px-6 lg:px-12">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <i className="fa-solid fa-graduation-cap text-blue-500 text-2xl mr-2"></i>
                        <span className="text-xl font-bold text-yellow-500">UniCode</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a
                            href="https://readdy.ai/home/0720006d-db07-4e5d-9df2-219089ef239d/e292fc0a-3960-4a04-a455-71a6badc4910"
                            data-readdy="true"
                            className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                        >
                            <i className="fa-solid fa-arrow-left mr-2"></i>
                            Вернуться на главную
                        </a>
                        <button
                            onClick={() => setActiveTab('about')}
                            className={`${activeTab === 'about' ? 'text-yellow-500 font-medium' : 'text-gray-400'} !rounded-button whitespace-nowrap cursor-pointer`}
                        >
                            О платформе
                        </button>
                        <button
                            onClick={() => setActiveTab('advantages')}
                            className={`${activeTab === 'advantages' ? 'text-yellow-500 font-medium' : 'text-gray-400'} !rounded-button whitespace-nowrap cursor-pointer`}
                        >
                            Преимущества
                        </button>
                        <button
                            onClick={() => setActiveTab('methodology')}
                            className={`${activeTab === 'methodology' ? 'text-yellow-500 font-medium' : 'text-gray-400'} !rounded-button whitespace-nowrap cursor-pointer`}
                        >
                            Методология
                        </button>
                        <button
                            onClick={() => setActiveTab('pricing')}
                            className={`${activeTab === 'pricing' ? 'text-yellow-500 font-medium' : 'text-gray-400'} !rounded-button whitespace-nowrap cursor-pointer`}
                        >
                            Тарифы
                        </button>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                        Записаться на курс
                    </button>
                </div>
            </nav>
            {/* Главный баннер */}
            <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="https://readdy.ai/api/search-image?query=Abstract%2520digital%2520learning%2520environment%2520with%2520code%2520elements%2520and%2520AI%2520visualization%252C%2520dark%2520blue%2520gradient%2520background%2520with%2520glowing%2520elements%252C%2520futuristic%2520technology%2520concept%2520for%2520programming%2520education%252C%2520subtle%2520pattern%2520that%2520allows%2520text%2520to%2520be%2520clearly%2520visible%2520on%2520the%2520left%2520side&width=1440&height=500&seq=15&orientation=landscape"
                        alt="О платформе CodeAI"
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>
                <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24 relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                            Курс программирования для студентов
                        </h1>
                        <p className="text-lg text-gray-300 mb-8">
                            UniCode — это бесплатный курс программирования для студентов нашего университета. Мы объединили современные технологии искусственного интеллекта и опыт преподавателей, чтобы сделать обучение программированию эффективным и увлекательным.
                        </p>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors font-medium !rounded-button whitespace-nowrap cursor-pointer">
                            Присоединиться к курсу
                        </button>
                    </div>
                </div>
            </div>
            {/* Основной контент */}
            <main className="container mx-auto px-6 lg:px-12 py-12">
                {activeTab === 'about' && (
                    <div>
                        {/* Преимущества обучения с ИИ */}
                        <section className="mb-20">
                            <h2 className="text-3xl font-bold mb-12 text-center">Преимущества обучения с ИИ</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {advantages.map(advantage => (
                                    <div key={advantage.id} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                            <i className={`${advantage.icon} text-2xl text-white`}></i>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-4 text-center">{advantage.title}</h3>
                                        <p className="text-gray-400 text-center">{advantage.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                        {/* Методология обучения */}
                        <section className="mb-20">
                            <h2 className="text-3xl font-bold mb-12 text-center">Методология обучения</h2>
                            <div className="relative">
                                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600 hidden md:block"></div>
                                <div className="space-y-12">
                                    {methodologySteps.map((step, index) => (
                                        <div key={step.id} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                                            <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
                                                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center z-10">
                                                    <i className={`${step.icon} text-2xl text-white`}></i>
                                                </div>
                                            </div>
                                            <div className={`md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                                <p className="text-gray-400">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        {/* Отзывы пользователей */}
                        <section className="mb-20">
                            <h2 className="text-3xl font-bold mb-12 text-center">Отзывы наших пользователей</h2>
                            <div className="max-w-4xl mx-auto">
                                <div className="bg-gray-800 rounded-lg p-8 shadow-lg relative">
                                    <div className="flex items-start mb-6">
                                        <img
                                            src={testimonials[testimonialIndex].image}
                                            alt={testimonials[testimonialIndex].name}
                                            className="w-16 h-16 rounded-full mr-4 object-cover"
                                        />
                                        <div>
                                            <h3 className="text-xl font-semibold">{testimonials[testimonialIndex].name}</h3>
                                            <p className="text-gray-400">{testimonials[testimonialIndex].role}</p>
                                            <div className="flex mt-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <i
                                                        key={i}
                                                        className={`fa-solid fa-star ${i < testimonials[testimonialIndex].rating ? 'text-yellow-500' : 'text-gray-600'} mr-1`}
                                                    ></i>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 italic">{testimonials[testimonialIndex].text}</p>
                                    <div className="flex justify-between mt-8">
                                        <button
                                            onClick={prevTestimonial}
                                            className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full !rounded-button whitespace-nowrap cursor-pointer"
                                        >
                                            <i className="fa-solid fa-arrow-left text-gray-300"></i>
                                        </button>
                                        <button
                                            onClick={nextTestimonial}
                                            className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full !rounded-button whitespace-nowrap cursor-pointer"
                                        >
                                            <i className="fa-solid fa-arrow-right text-gray-300"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* FAQ секция */}
                        <section className="mb-20">
                            <h2 className="text-3xl font-bold mb-12 text-center">Часто задаваемые вопросы</h2>
                            <div className="max-w-3xl mx-auto">
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                                            <button
                                                className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center !rounded-button whitespace-nowrap cursor-pointer"
                                                onClick={() => toggleFaq(index)}
                                            >
                                                {faq.question}
                                                <i className={`fa-solid ${activeFaqIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'} transition-transform`}></i>
                                            </button>
                                            <div
                                                className={`px-6 pb-4 transition-all duration-300 ease-in-out ${activeFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                                            >
                                                <p className="text-gray-400">{faq.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        {/* Команда разработчиков */}
                        <section className="mb-20">
                            <h2 className="text-3xl font-bold mb-12 text-center">Наша команда</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {team.map(member => (
                                    <div key={member.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="h-64 overflow-hidden">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                            <p className="text-blue-500 mb-4">{member.role}</p>
                                            <p className="text-gray-400">{member.bio}</p>
                                            <div className="flex mt-4 space-x-3">
                                                <a href="#" className="text-gray-400 hover:text-blue-500 cursor-pointer">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                                <a href="#" className="text-gray-400 hover:text-blue-500 cursor-pointer">
                                                    <i className="fa-brands fa-github"></i>
                                                </a>
                                                <a href="#" className="text-gray-400 hover:text-blue-500 cursor-pointer">
                                                    <i className="fa-solid fa-envelope"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        {/* CTA секция */}
                        <section className="mb-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 md:p-12">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="md:w-1/2 mb-8 md:mb-0">
                                    <h2 className="text-3xl font-bold mb-4">Готовы начать свой путь в программировании?</h2>
                                    <p className="text-lg mb-6">Присоединяйтесь к тысячам студентов, которые уже изменили свою карьеру с помощью CodeAI.</p>
                                    <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors font-medium !rounded-button whitespace-nowrap cursor-pointer">
                                        Начать бесплатно
                                    </button>
                                </div>
                                <div className="md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold mb-4 text-center">Попробуйте бесплатно</h3>
                                    <form className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Ваше имя"
                                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="Электронная почта"
                                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-yellow-500 text-gray-900 py-2 rounded-md hover:bg-yellow-600 transition-colors font-medium !rounded-button whitespace-nowrap cursor-pointer"
                                        >
                                            Зарегистрироваться
                                        </button>
                                        <p className="text-xs text-center text-gray-400">
                                            Регистрируясь, вы соглашаетесь с нашими Условиями использования и Политикой конфиденциальности
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                )}
                {activeTab === 'advantages' && (
                    <div>
                        <section className="mb-20">
                            <h2 className="text-3xl font-bold mb-6 text-center">Преимущества обучения с ИИ</h2>
                            <p className="text-gray-400 max-w-3xl mx-auto text-center mb-12">
                                Искусственный интеллект революционизирует образование, делая его более персонализированным, эффективным и доступным. Узнайте, как CodeAI использует ИИ для улучшения вашего опыта обучения.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            src="https://readdy.ai/api/search-image?query=Futuristic%2520visualization%2520of%2520AI%2520analyzing%2520learning%2520patterns%2520and%2520adapting%2520content%2520for%2520individual%2520students%252C%2520showing%2520data%2520flows%2520and%2520personalized%2520learning%2520paths%252C%2520with%2520glowing%2520blue%2520interface%2520elements%2520on%2520dark%2520background%252C%2520professional%2520educational%2520technology%2520concept&width=600&height=400&seq=16&orientation=landscape"
                                            alt="Персонализированное обучение"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-semibold mb-4">Персонализированное обучение</h3>
                                        <ul className="space-y-3 text-gray-300">
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Адаптивные учебные материалы, которые подстраиваются под ваш уровень знаний</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Индивидуальный темп обучения без давления и стресса</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Выявление пробелов в знаниях и фокус на их устранении</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Рекомендации по дальнейшему обучению на основе ваших интересов и целей</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            src="https://readdy.ai/api/search-image?query=Detailed%2520visualization%2520of%2520interactive%2520coding%2520environment%2520with%2520real%2520time%2520feedback%2520from%2520AI%252C%2520showing%2520code%2520suggestions%252C%2520error%2520highlighting%252C%2520and%2520performance%2520analysis%252C%2520with%2520glowing%2520blue%2520interface%2520elements%2520on%2520dark%2520background%252C%2520professional%2520educational%2520technology%2520concept&width=600&height=400&seq=17&orientation=landscape"
                                            alt="Интерактивная практика"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-semibold mb-4">Интерактивная практика</h3>
                                        <ul className="space-y-3 text-gray-300">
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Практические задания с мгновенной обратной связью от ИИ</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Интерактивная среда разработки прямо в браузере</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Анализ вашего кода и рекомендации по его улучшению</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Реальные проекты для применения полученных навыков</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            src="https://readdy.ai/api/search-image?query=Futuristic%2520visualization%2520of%2520AI%2520assistant%2520helping%2520with%2520programming%2520problems%252C%2520showing%2520conversation%2520interface%252C%2520code%2520analysis%2520and%2520solution%2520suggestions%252C%2520with%2520glowing%2520blue%2520interface%2520elements%2520on%2520dark%2520background%252C%2520professional%2520educational%2520technology%2520concept&width=600&height=400&seq=18&orientation=landscape"
                                            alt="Круглосуточная поддержка"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-semibold mb-4">Круглосуточная поддержка</h3>
                                        <ul className="space-y-3 text-gray-300">
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>ИИ-ассистент доступен 24/7 для ответов на ваши вопросы</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Подробные объяснения сложных концепций простым языком</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Помощь в отладке кода и исправлении ошибок</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Рекомендации по дополнительным ресурсам и материалам</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            src="https://readdy.ai/api/search-image?query=Modern%2520visualization%2520of%2520cutting%2520edge%2520programming%2520technologies%2520being%2520taught%252C%2520showing%2520latest%2520frameworks%252C%2520tools%2520and%2520development%2520environments%252C%2520with%2520glowing%2520blue%2520interface%2520elements%2520on%2520dark%2520background%252C%2520professional%2520educational%2520technology%2520concept&width=600&height=400&seq=19&orientation=landscape"
                                            alt="Актуальные технологии"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-semibold mb-4">Актуальные технологии</h3>
                                        <ul className="space-y-3 text-gray-300">
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Постоянно обновляемые курсы по последним технологиям</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Изучение популярных фреймворков и библиотек</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Практика с использованием современных инструментов разработки</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Подготовка к реальным требованиям рынка труда</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="mb-20 bg-blue-600 rounded-xl p-8 md:p-12">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
                                    <h2 className="text-3xl font-bold mb-4">Эффективность обучения с ИИ</h2>
                                    <p className="text-lg mb-6">
                                        Согласно нашим исследованиям, студенты, использующие CodeAI, осваивают программирование на 40% быстрее по сравнению с традиционными методами обучения. Персонализированный подход и мгновенная обратная связь значительно повышают эффективность образовательного процесса.
                                    </p>
                                    <div className="flex flex-wrap gap-6">
                                        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                                            <h3 className="text-2xl font-bold text-yellow-500">87%</h3>
                                            <p className="text-sm">студентов успешно завершают курсы</p>
                                        </div>
                                        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                                            <h3 className="text-2xl font-bold text-yellow-500">40%</h3>
                                            <p className="text-sm">быстрее освоение материала</p>
                                        </div>
                                        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                                            <h3 className="text-2xl font-bold text-yellow-500">92%</h3>
                                            <p className="text-sm">удовлетворенность пользователей</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/3">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=Modern%2520data%2520visualization%2520showing%2520learning%2520effectiveness%2520metrics%2520with%2520charts%2520and%2520graphs%252C%2520displaying%2520comparison%2520between%2520AI%2520assisted%2520learning%2520and%2520traditional%2520methods%252C%2520with%2520clean%2520professional%2520design%2520on%2520dark%2520background%252C%2520educational%2520technology%2520concept&width=400&height=400&seq=20&orientation=squarish"
                                        alt="Эффективность обучения с ИИ"
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        </section>
                        <section className="mb-20">
                            <h2 className="text-3xl font-bold mb-12 text-center">Истории успеха</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src="https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520young%2520Russian%2520male%2520software%2520developer%2520with%2520short%2520dark%2520hair%252C%2520looking%2520confident%2520and%2520successful%252C%2520wearing%2520casual%2520professional%2520attire%252C%2520on%2520a%2520neutral%2520background%2520with%2520soft%2520lighting%2520and%2520professional%2520composition&width=80&height=80&seq=21&orientation=squarish"
                                            alt="Иван Смирнов"
                                            className="w-12 h-12 rounded-full mr-4 object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold">Иван Смирнов</h3>
                                            <p className="text-sm text-gray-400">Веб-разработчик</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 italic mb-4">
                                        "Благодаря CodeAI я смог за 6 месяцев перейти из маркетинга в веб-разработку. Сейчас работаю в IT-компании и зарабатываю в 2 раза больше."
                                    </p>
                                    <div className="flex items-center">
                                        <span className="text-yellow-500 font-semibold mr-2">Изучал:</span>
                                        <span className="text-gray-400">JavaScript, React, Node.js</span>
                                    </div>
                                </div>
                                <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src="https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520middle%2520aged%2520Russian%2520female%2520career%2520changer%2520with%2520shoulder%2520length%2520brown%2520hair%252C%2520looking%2520confident%2520and%2520professional%252C%2520wearing%2520business%2520casual%2520attire%252C%2520on%2520a%2520neutral%2520background%2520with%2520soft%2520lighting%2520and%2520professional%2520composition&width=80&height=80&seq=22&orientation=squarish"
                                            alt="Анна Петрова"
                                            className="w-12 h-12 rounded-full mr-4 object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold">Анна Петрова</h3>
                                            <p className="text-sm text-gray-400">Data Scientist</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 italic mb-4">
                                        "В 35 лет решила сменить профессию. CodeAI помог мне освоить анализ данных и Python. Теперь я работаю в финтех-компании и занимаюсь любимым делом."
                                    </p>
                                    <div className="flex items-center">
                                        <span className="text-yellow-500 font-semibold mr-2">Изучала:</span>
                                        <span className="text-gray-400">Python, Data Science, ML</span>
                                    </div>
                                </div>
                                <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src="https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520young%2520Russian%2520male%2520student%2520with%2520glasses%2520and%2520short%2520light%2520brown%2520hair%252C%2520looking%2520intelligent%2520and%2520friendly%252C%2520wearing%2520casual%2520smart%2520clothing%252C%2520on%2520a%2520neutral%2520background%2520with%2520soft%2520lighting%2520and%2520professional%2520composition&width=80&height=80&seq=23&orientation=squarish"
                                            alt="Михаил Козлов"
                                            className="w-12 h-12 rounded-full mr-4 object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold">Михаил Козлов</h3>
                                            <p className="text-sm text-gray-400">Студент</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 italic mb-4">
                                        "Начал изучать программирование на CodeAI во время учебы в университете. Это помогло мне получить стажировку в крупной компании уже на 3 курсе."
                                    </p>
                                    <div className="flex items-center">
                                        <span className="text-yellow-500 font-semibold mr-2">Изучал:</span>
                                        <span className="text-gray-400">Java, Spring, SQL</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="text-center">
                            <h2 className="text-3xl font-bold mb-6">Готовы испытать преимущества обучения с ИИ?</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                                Присоединяйтесь к тысячам студентов, которые уже изменили свою жизнь с помощью CodeAI. Начните свой путь в программировании уже сегодня!
                            </p>
                            <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-md hover:bg-yellow-600 transition-colors font-medium text-lg !rounded-button whitespace-nowrap cursor-pointer">
                                Начать бесплатно
                            </button>
                        </section>
                    </div>
                )}
                {activeTab === 'methodology' && (
                    <div>
                        <section className="mb-20">
                            <h2 className="text-3xl font-bold mb-6 text-center">Наша методология обучения</h2>
                            <p className="text-gray-400 max-w-3xl mx-auto text-center mb-12">
                                CodeAI использует научно обоснованный подход к обучению программированию, сочетая лучшие педагогические практики с возможностями искусственного интеллекта.
                            </p>
                            <div className="relative mb-20">
                                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600 hidden md:block"></div>
                                <div className="space-y-16">
                                    {methodologySteps.map((step, index) => (
                                        <div key={step.id} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                                            <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
                                                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center z-10">
                                                    <i className={`${step.icon} text-3xl text-white`}></i>
                                                </div>
                                            </div>
                                            <div className={`md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                                                <p className="text-gray-300 mb-4">{step.description}</p>
                                                <ul className={`text-gray-400 space-y-2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                                                    {index === 0 && (
                                                        <>
                                                            <li className="flex items-center">
                                                                <i className={`fa-solid fa-check text-green-500 mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}></i>
                                                                <span>Входное тестирование для определения уровня</span>
                                                            </li>
                                                            <li className="flex items-center">
                                                                <i className={`fa-solid fa-check text-green-500 mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}></i>
                                                                <span>Анализ предыдущего опыта в программировании</span>
                                                            </li>
                                                            <li className="flex items-center">
                                                                <i className={`fa-solid fa-check text-green-500 mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}></i>
                                                                <span>Выявление сильных и слабых сторон</span>
                                                            </li>
                                                        </>
                                                    )}
                                                    {index === 1 && (
                                                        <>
                                                            <li className="flex items-center">
                                                                <i className={`fa-solid fa-check text-green-500 mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}></i>
                                                                <span>Формирование индивидуальной траектории обучения</span>
                                                            </li>
                                                            <li className="flex items-center">
                                                                <i className={`fa-solid fa-check text-green-500 mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}></i>
                                                                <span>Подбор оптимального темпа и формата подачи материала</span>
                                                            </li>
                                                            <li className="flex items-center">
                                                                <i className={`fa-solid fa-check text-green-500 mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}></i>
                                                                <span>Установка целей и ключевых показателей прогресса</span>
                                                            </li>
                                                        </>
                                                    )}
                                                    {index === 2 && (
                                                        <>
                                                            <li className="flex items-center">
                                                                <i className={`fa-solid fa-check text-green-500 mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}></i>
                                                                <span>Интерактивные уроки с визуализацией концепций</span>
                                                            </li>
                                                            <li className="flex items-center">
                                                                <i className={`fa-solid fa-check text-green-500 mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}></i>
                                                                <span>Практические задания с мгновенной обратной связью</span>
                                                            </li>
                                                            <li className="flex items-center">
                                                                <i className={`fa-solid fa-check text-green-500 mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}></i>
                                                                <span>Интеграция теории и практики для лучшего усвоения</span>
                                                            </li>
                                                        </>
                                                    )}
                                                    {index === 3 && (
                                                        <>
                                                            <li className="flex items-center">
                                                                <i className={`fa-solid fa-check text-green-500 mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}></i>
                                                                <span>Детальная статистика по выполненным заданиям</span>
                                                            </li>
                                                            <li className="flex items-center">
                                                                <i className={`fa-solid fa-check text-green-500 mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}></i>
                                                                <span>Выявление областей, требующих дополнительного внимания</span>
                                                            </li>
                                                            <li className="flex items-center">
                                                                <i className={`fa-solid fa-check text-green-500 mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}></i>
                                                                <span>Адаптация сложности материала на основе результатов</span>
                                                            </li>
                                                        </>
                                                    )}
                                                    {index === 4 && (
                                                        <>
                                                            <li className="flex items-center">
                                                                <i className={`fa-solid fa-check text-green-500 mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}></i>
                                                                <span>Создание реальных проектов для портфолио</span>
                                                            </li>
                                                            <li className="flex items-center">
                                                                <i className={`fa-solid fa-check text-green-500 mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}></i>
                                                                <span>Работа в команде с другими студентами</span>
                                                            </li>
                                                            <li className="flex items-center">
                                                                <i className={`fa-solid fa-check text-green-500 mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}></i>
                                                                <span>Подготовка к реальным рабочим процессам в IT</span>
                                                            </li>
                                                        </>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        <section className="mb-20 bg-gray-800 rounded-xl p-8 md:p-12">
                            <h2 className="text-3xl font-bold mb-8 text-center">Принципы нашей методологии</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="bg-gray-700 p-6 rounded-lg">
                                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <i className="fa-solid fa-brain text-2xl text-white"></i>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-center">Активное обучение</h3>
                                    <p className="text-gray-300 text-center">
                                        Вместо пассивного потребления информации вы активно взаимодействуете с материалом через практические задания.
                                    </p>
                                </div>
                                <div className="bg-gray-700 p-6 rounded-lg">
                                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <i className="fa-solid fa-arrows-spin text-2xl text-white"></i>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-center">Спиральное обучение</h3>
                                    <p className="text-gray-300 text-center">
                                        Периодическое возвращение к изученным концепциям на более глубоком уровне для лучшего усвоения.
                                    </p>
                                </div>
                                <div className="bg-gray-700 p-6 rounded-lg">
                                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <i className="fa-solid fa-puzzle-piece text-2xl text-white"></i>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-center">Проблемно-ориентированное обучение</h3>
                                    <p className="text-gray-300 text-center">
                                        Изучение концепций через решение реальных задач и проблем программирования.
                                    </p>
                                </div>
                                <div className="bg-gray-700 p-6 rounded-lg">
                                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <i className="fa-solid fa-gauge-high text-2xl text-white"></i>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-center">Микрообучение</h3>
                                    <p className="text-gray-300 text-center">
                                        Разбиение материала на небольшие, легко усваиваемые части для более эффективного обучения.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="mb-20">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                                    <h2 className="text-3xl font-bold mb-6">Роль ИИ в образовательном процессе</h2>
                                    <p className="text-gray-300 mb-6">
                                        Искусственный интеллект является ключевым компонентом нашей образовательной методологии. Он выполняет несколько важных функций, которые делают процесс обучения более эффективным и персонализированным.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <i className="fa-solid fa-robot text-blue-500 mt-1 mr-3 text-lg"></i>
                                            <div>
                                                <h3 className="font-semibold mb-1">Анализ данных обучения</h3>
                                                <p className="text-gray-400">ИИ анализирует ваши действия, время выполнения заданий, типичные ошибки и паттерны обучения для создания оптимальной траектории.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fa-solid fa-wand-magic-sparkles text-blue-500 mt-1 mr-3 text-lg"></i>
                                            <div>
                                                <h3 className="font-semibold mb-1">Адаптивное представление материала</h3>
                                                <p className="text-gray-400">Контент адаптируется под ваш стиль обучения — визуальный, аудиальный или кинестетический.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fa-solid fa-comments text-blue-500 mt-1 mr-3 text-lg"></i>
                                            <div>
                                                <h3 className="font-semibold mb-1">Интеллектуальная обратная связь</h3>
                                                <p className="text-gray-400">ИИ не просто указывает на ошибки, но и объясняет их причины, предлагает решения и дает рекомендации по улучшению кода.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="md:w-1/2">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=Futuristic%2520visualization%2520of%2520AI%2520analyzing%2520educational%2520data%2520and%2520adapting%2520learning%2520content%252C%2520showing%2520neural%2520networks%2520processing%2520student%2520information%252C%2520with%2520glowing%2520blue%2520interface%2520elements%2520on%2520dark%2520background%252C%2520professional%2520educational%2520technology%2520concept&width=600&height=500&seq=24&orientation=landscape"
                                        alt="Роль ИИ в образовании"
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        </section>
                        <section className="text-center">
                            <h2 className="text-3xl font-bold mb-6">Готовы начать обучение по нашей методологии?</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                                Испытайте на себе эффективность нашего подхода к обучению программированию. Первые уроки доступны бесплатно!
                            </p>
                            <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-md hover:bg-yellow-600 transition-colors font-medium text-lg !rounded-button whitespace-nowrap cursor-pointer">
                                Попробовать бесплатно
                            </button>
                        </section>
                    </div>
                )}
                {activeTab === 'pricing' && (
                    <div>
                        <section className="mb-20">
                            <h2 className="text-3xl font-bold mb-6 text-center">Тарифные планы</h2>
                            <p className="text-gray-400 max-w-3xl mx-auto text-center mb-12">
                                Выберите тарифный план, который подходит именно вам. Все планы включают доступ к ИИ-ассистенту и возможность получения сертификатов по окончании курсов.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {plans.map(plan => (
                                    <div
                                        key={plan.id}
                                        className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${plan.recommended ? 'border-2 border-yellow-500 relative' : ''}`}
                                    >
                                        {plan.recommended && (
                                            <div className="absolute top-0 right-0 bg-yellow-500 text-gray-900 px-4 py-1 text-sm font-semibold">
                                                Рекомендуемый
                                            </div>
                                        )}
                                        <div className="p-8">
                                            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                                            <p className="text-3xl font-bold text-yellow-500 mb-6">{plan.price}</p>
                                            <ul className="space-y-3 mb-8">
                                                {plan.features.map((feature, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                        <span className="text-gray-300">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <button
                                                onClick={() => setSelectedPlan(plan.id)}
                                                className={`w-full py-3 rounded-md font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer ${selectedPlan === plan.id
                                                        ? 'bg-blue-600 text-white'
                                                        : plan.recommended
                                                            ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-600'
                                                            : 'bg-gray-700 text-white hover:bg-gray-600'
                                                    }`}
                                            >
                                                {selectedPlan === plan.id ? 'Выбрано' : 'Выбрать план'}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section className="mb-20">
                            <h2 className="text-3xl font-bold mb-12 text-center">Сравнение тарифов</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-gray-800">
                                            <th className="p-4 border-b border-gray-700">Функции</th>
                                            <th className="p-4 border-b border-gray-700">Базовый</th>
                                            <th className="p-4 border-b border-gray-700 bg-gray-700">Профессиональный</th>
                                            <th className="p-4 border-b border-gray-700">Командный</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-4 border-b border-gray-700">Доступ к курсам</td>
                                            <td className="p-4 border-b border-gray-700">Основные курсы</td>
                                            <td className="p-4 border-b border-gray-700 bg-gray-700">Все курсы</td>
                                            <td className="p-4 border-b border-gray-700">Все курсы</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b border-gray-700">Поддержка ИИ-ассистента</td>
                                            <td className="p-4 border-b border-gray-700">Базовая</td>
                                            <td className="p-4 border-b border-gray-700 bg-gray-700">Расширенная</td>
                                            <td className="p-4 border-b border-gray-700">Расширенная</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b border-gray-700">Практические задания</td>
                                            <td className="p-4 border-b border-gray-700">
                                                <i className="fa-solid fa-check text-green-500"></i>
                                            </td>
                                            <td className="p-4 border-b border-gray-700 bg-gray-700">
                                                <i className="fa-solid fa-check text-green-500"></i>
                                            </td>
                                            <td className="p-4 border-b border-gray-700">
                                                <i className="fa-solid fa-check text-green-500"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b border-gray-700">Персонализированный план</td>
                                            <td className="p-4 border-b border-gray-700">
                                                <i className="fa-solid fa-xmark text-red-500"></i>
                                            </td>
                                            <td className="p-4 border-b border-gray-700 bg-gray-700">
                                                <i className="fa-solid fa-check text-green-500"></i>
                                            </td>
                                            <td className="p-4 border-b border-gray-700">
                                                <i className="fa-solid fa-check text-green-500"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b border-gray-700">Приоритетная техподдержка</td>
                                            <td className="p-4 border-b border-gray-700">
                                                <i className="fa-solid fa-xmark text-red-500"></i>
                                            </td>
                                            <td className="p-4 border-b border-gray-700 bg-gray-700">
                                                <i className="fa-solid fa-check text-green-500"></i>
                                            </td>
                                            <td className="p-4 border-b border-gray-700">
                                                <i className="fa-solid fa-check text-green-500"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b border-gray-700">Доступ к вебинарам</td>
                                            <td className="p-4 border-b border-gray-700">
                                                <i className="fa-solid fa-xmark text-red-500"></i>
                                            </td>
                                            <td className="p-4 border-b border-gray-700 bg-gray-700">
                                                <i className="fa-solid fa-check text-green-500"></i>
                                            </td>
                                            <td className="p-4 border-b border-gray-700">
                                                <i className="fa-solid fa-check text-green-500"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b border-gray-700">Количество пользователей</td>
                                            <td className="p-4 border-b border-gray-700">1</td>
                                            <td className="p-4 border-b border-gray-700 bg-gray-700">1</td>
                                            <td className="p-4 border-b border-gray-700">До 5</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b border-gray-700">Отслеживание прогресса команды</td>
                                            <td className="p-4 border-b border-gray-700">
                                                <i className="fa-solid fa-xmark text-red-500"></i>
                                            </td>
                                            <td className="p-4 border-b border-gray-700 bg-gray-700">
                                                <i className="fa-solid fa-xmark text-red-500"></i>
                                            </td>
                                            <td className="p-4 border-b border-gray-700">
                                                <i className="fa-solid fa-check text-green-500"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b border-gray-700">Корпоративная аналитика</td>
                                            <td className="p-4 border-b border-gray-700">
                                                <i className="fa-solid fa-xmark text-red-500"></i>
                                            </td>
                                            <td className="p-4 border-b border-gray-700 bg-gray-700">
                                                <i className="fa-solid fa-xmark text-red-500"></i>
                                            </td>
                                            <td className="p-4 border-b border-gray-700">
                                                <i className="fa-solid fa-check text-green-500"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-4"></td>
                                            <td className="p-4">
                                                <button
                                                    onClick={() => setSelectedPlan('basic')}
                                                    className={`px-4 py-2 rounded-md font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer ${selectedPlan === 'basic'
                                                            ? 'bg-blue-600 text-white'
                                                            : 'bg-gray-700 text-white hover:bg-gray-600'
                                                        }`}
                                                >
                                                    {selectedPlan === 'basic' ? 'Выбрано' : 'Выбрать'}
                                                </button>
                                            </td>
                                            <td className="p-4 bg-gray-700">
                                                <button
                                                    onClick={() => setSelectedPlan('pro')}
                                                    className={`px-4 py-2 rounded-md font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer ${selectedPlan === 'pro'
                                                            ? 'bg-blue-600 text-white'
                                                            : 'bg-yellow-500 text-gray-900 hover:bg-yellow-600'
                                                        }`}
                                                >
                                                    {selectedPlan === 'pro' ? 'Выбрано' : 'Выбрать'}
                                                </button>
                                            </td>
                                            <td className="p-4">
                                                <button
                                                    onClick={() => setSelectedPlan('team')}
                                                    className={`px-4 py-2 rounded-md font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer ${selectedPlan === 'team'
                                                            ? 'bg-blue-600 text-white'
                                                            : 'bg-gray-700 text-white hover:bg-gray-600'
                                                        }`}
                                                >
                                                    {selectedPlan === 'team' ? 'Выбрано' : 'Выбрать'}
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                        <section className="mb-20">
                            <div className="bg-gray-800 rounded-xl p-8 md:p-12">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
                                        <h2 className="text-3xl font-bold mb-4">Корпоративное обучение</h2>
                                        <p className="text-lg mb-6">
                                            Нужно обучить команду более 5 человек? У нас есть специальные корпоративные решения, адаптированные под потребности вашей компании.
                                        </p>
                                        <ul className="space-y-3 mb-6">
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Индивидуальная настройка учебной программы</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Брендирование платформы под вашу компанию</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Расширенная аналитика и отчетность</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                                                <span>Выделенный менеджер по обучению</span>
                                            </li>
                                        </ul>
                                        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium !rounded-button whitespace-nowrap cursor-pointer">
                                            Запросить коммерческое предложение
                                        </button>
                                    </div>
                                    <div className="md:w-1/3">
                                        <img
                                            src="https://readdy.ai/api/search-image?query=Professional%2520business%2520team%2520learning%2520programming%2520together%2520in%2520modern%2520office%2520environment%252C%2520looking%2520at%2520screens%2520with%2520code%252C%2520collaborative%2520learning%2520atmosphere%252C%2520corporate%2520training%2520concept%252C%2520clean%2520professional%2520composition&width=400&height=300&seq=25&orientation=landscape"
                                            alt="Корпоративное обучение"
                                            className="w-full h-auto rounded-lg shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="mb-20">
                            <h2 className="text-3xl font-bold mb-12 text-center">Часто задаваемые вопросы о тарифах</h2>
                            <div className="max-w-3xl mx-auto">
                                <div className="space-y-4">
                                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                                        <button
                                            className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center !rounded-button whitespace-nowrap cursor-pointer"
                                            onClick={() => toggleFaq(0)}
                                        >
                                            Могу ли я сменить тариф в процессе обучения?
                                            <i className={`fa-solid ${activeFaqIndex === 0 ? 'fa-chevron-up' : 'fa-chevron-down'} transition-transform`}></i>
                                        </button>
                                        <div
                                            className={`px-6 pb-4 transition-all duration-300 ease-in-out ${activeFaqIndex === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                                        >
                                            <p className="text-gray-400">
                                                Да, вы можете изменить свой тарифный план в любое время. При переходе на более высокий тариф изменения вступят в силу немедленно. При переходе на более низкий тариф изменения вступят в силу после окончания текущего платежного периода.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                                        <button
                                            className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center !rounded-button whitespace-nowrap cursor-pointer"
                                            onClick={() => toggleFaq(1)}
                                        >
                                            Есть ли у вас пробный период?
                                            <i className={`fa-solid ${activeFaqIndex === 1 ? 'fa-chevron-up' : 'fa-chevron-down'} transition-transform`}></i>
                                        </button>
                                        <div
                                            className={`px-6 pb-4 transition-all duration-300 ease-in-out ${activeFaqIndex === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                                        >
                                            <p className="text-gray-400">
                                                Да, мы предлагаем 7-дневный бесплатный пробный период для всех новых пользователей. В течение этого времени вы получите доступ к ограниченному набору курсов и функций платформы, чтобы оценить ее возможности.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                                        <button
                                            className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center !rounded-button whitespace-nowrap cursor-pointer"
                                            onClick={() => toggleFaq(2)}
                                        >
                                            Какие способы оплаты вы принимаете?
                                            <i className={`fa-solid ${activeFaqIndex === 2 ? 'fa-chevron-up' : 'fa-chevron-down'} transition-transform`}></i>
                                        </button>
                                        <div
                                            className={`px-6 pb-4 transition-all duration-300 ease-in-out ${activeFaqIndex === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                                        >
                                            <p className="text-gray-400">
                                                Мы принимаем оплату банковскими картами (Visa, MasterCard, МИР), через электронные кошельки (ЮMoney, WebMoney), а также банковским переводом для корпоративных клиентов.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                                        <button
                                            className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center !rounded-button whitespace-nowrap cursor-pointer"
                                            onClick={() => toggleFaq(3)}
                                        >
                                            Есть ли у вас гарантия возврата денег?
                                            <i className={`fa-solid ${activeFaqIndex === 3 ? 'fa-chevron-up' : 'fa-chevron-down'} transition-transform`}></i>
                                        </button>
                                        <div
                                            className={`px-6 pb-4 transition-all duration-300 ease-in-out ${activeFaqIndex === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                                        >
                                            <p className="text-gray-400">
                                                Да, мы предлагаем 14-дневную гарантию возврата денег. Если вы не удовлетворены нашим сервисом, вы можете запросить полный возврат средств в течение 14 дней после оплаты.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="text-center">
                            <h2 className="text-3xl font-bold mb-6">Готовы начать свой путь в программировании?</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                                Выберите подходящий тариф и начните обучение уже сегодня. Первые 7 дней бесплатно!
                            </p>
                            <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-md hover:bg-yellow-600 transition-colors font-medium text-lg !rounded-button whitespace-nowrap cursor-pointer">
                                Начать бесплатный период
                            </button>
                        </section>
                    </div>
                )}
            </main>
            {/* Футер */}
            <footer className="bg-gray-800 py-12 mt-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <i className="fa-solid fa-graduation-cap text-blue-500 text-2xl mr-2"></i>
                                <span className="text-xl font-bold text-yellow-500">UniCode</span>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Университетский курс программирования с поддержкой искусственного интеллекта.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-yellow-500 cursor-pointer">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-yellow-500 cursor-pointer">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-yellow-500 cursor-pointer">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-yellow-500 cursor-pointer">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="https://readdy.ai/home/0720006d-db07-4e5d-9df2-219089ef239d/e292fc0a-3960-4a04-a455-71a6badc4910"
                                        data-readdy="true"
                                        className="text-gray-400 hover:text-yellow-500 cursor-pointer"
                                    >
                                        Главная
                                    </a>
                                </li>
                                <li><a href="#" className="text-gray-400 hover:text-yellow-500 cursor-pointer">О платформе</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-yellow-500 cursor-pointer">Курсы</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-yellow-500 cursor-pointer">Тарифы</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-yellow-500 cursor-pointer">Блог</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Ресурсы</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-yellow-500 cursor-pointer">Документация</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-yellow-500 cursor-pointer">Сообщество</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-yellow-500 cursor-pointer">FAQ</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-yellow-500 cursor-pointer">Поддержка</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <i className="fa-solid fa-envelope mr-2 text-blue-600"></i>
                                    <span>unicode@university.ru</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="fa-solid fa-location-dot mr-2 text-blue-600"></i>
                                    <span>Кафедра информационных технологий</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="fa-solid fa-clock mr-2 text-blue-600"></i>
                                    <span>Пн-Пт, 9:00 - 17:00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 UniCode. Университетский курс программирования.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-blue-600 text-sm cursor-pointer">Политика конфиденциальности</a>
                            <a href="#" className="text-gray-400 hover:text-blue-600 text-sm cursor-pointer">Условия использования</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default App
