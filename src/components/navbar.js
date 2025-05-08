import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="font-bold text-xl">追夢輸送</div>

          {/* 桌機版選單 */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded">首頁</Link>
            <Link to="/menu" className="hover:bg-gray-700 px-3 py-2 rounded">菜單</Link>
            <Link to="/chicano" className="hover:bg-gray-700 px-3 py-2 rounded">Chicano</Link>
          </div>

          {/* 手機版漢堡按鈕 */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}

      {/* Drawer 側邊欄 */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white z-50 shadow-lg transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="p-6 space-y-6">
          <button onClick={() => setMenuOpen(false)} className="text-white text-xl">
            ✕ 關閉
          </button>
          <Link to="/" className="block text-lg hover:bg-gray-700 p-2 rounded" onClick={() => setMenuOpen(false)}>首頁</Link>
          <Link to="/menu" className="block text-lg hover:bg-gray-700 p-2 rounded" onClick={() => setMenuOpen(false)}>菜單</Link>
          <Link to="/chicano" className="block text-lg hover:bg-gray-700 p-2 rounded" onClick={() => setMenuOpen(false)}>Chicano</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
