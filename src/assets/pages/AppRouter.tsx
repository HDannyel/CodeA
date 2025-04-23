import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import RegistrationPage from "./RegistrationPage";
import AboutPage from "./AboutPage"; // ����������� ����� ��������

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/about" element={<AboutPage />} /> {/* ����� ������� */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;