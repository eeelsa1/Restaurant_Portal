import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import MenuPage from './pages/menupage';
import ChicanoPage from './pages/chicanopage';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      {/* 防止橫向爆版 */}
      <div className="min-h-screen w-full overflow-x-hidden bg-white text-black">
        {/* Navbar 置頂 */}
        <Navbar />

        {/* 主內容區（可滾動） */}
        <main className="w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/chicano" element={<ChicanoPage />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
