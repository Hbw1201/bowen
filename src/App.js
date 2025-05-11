import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

// English pages
import EnHome from './pages/en/Home';
import EnAbout from './pages/en/About';
import EnProjects from './pages/en/Projects';
import EnContact from './pages/en/Contact';

// Chinese pages
import ZhHome from './pages/zh/Home';
import ZhAbout from './pages/zh/About';
import ZhProjects from './pages/zh/Projects';
import ZhContact from './pages/zh/Contact';

// Malay pages
import MsHome from './pages/ms/Home';
import MsAbout from './pages/ms/About';
import MsProjects from './pages/ms/Projects';
import MsContact from './pages/ms/Contact';

// Project details - Chinese
import HKUST from './pages/zh/projects/HKUST';
import CppSales from './pages/zh/projects/CppSales';
import CarForecast from './pages/zh/projects/CarForecast';

// Project details - English
import EnHKUST from './pages/en/projects/HKUST';
import EnCppSales from './pages/en/projects/CppSales';
import EnCarForecast from './pages/en/projects/CarForecast';

// 404 Not Found
import NotFound from './pages/NotFound';

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                {/* English (default) */}
                <Route path="/" element={<EnHome />} />
                <Route path="/en" element={<EnHome />} />
                <Route path="/en/about" element={<EnAbout />} />
                <Route path="/en/projects" element={<EnProjects />} />
                <Route path="/en/contact" element={<EnContact />} />
                <Route path="/en/projects/hkust" element={<EnHKUST />} />
                <Route path="/en/projects/cpp-sales" element={<EnCppSales />} />
                <Route path="/en/projects/car-forecast" element={<EnCarForecast />} />

                {/* Chinese */}
                <Route path="/zh" element={<ZhHome />} />
                <Route path="/zh/about" element={<ZhAbout />} />
                <Route path="/zh/projects" element={<ZhProjects />} />
                <Route path="/zh/contact" element={<ZhContact />} />
                <Route path="/zh/projects/hkust" element={<HKUST />} />
                <Route path="/zh/projects/cpp-sales" element={<CppSales />} />
                <Route path="/zh/projects/car-forecast" element={<CarForecast />} />

                {/* Malay */}
                <Route path="/ms" element={<MsHome />} />
                <Route path="/ms/about" element={<MsAbout />} />
                <Route path="/ms/projects" element={<MsProjects />} />
                <Route path="/ms/contact" element={<MsContact />} />

                {/* Fallback */}
                <Route path="*" element={<NotFound />} />
            </Routes>

            <ScrollToTop />
        </Router>
    );
}
