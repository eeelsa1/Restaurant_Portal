import React, { useState } from "react";
import { menuData } from "../data/menudata";
import MenuCategory from "../components/menucategory";
import CategoryGrid from "../components/categorygrid";
import BackToTop from "../components/backtotop";

function MenuPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCategory = menuData[selectedIndex];

  return (
    <main className="bg-gray-100 px-6 md:px-12 py-16 space-y-12">
      <h1 className="text-3xl font-bold text-center text-black">Menu 菜單</h1>

      {/* 選單分類卡片 Grid */}
      <CategoryGrid
        categories={menuData}
        activeIndex={selectedIndex}
        onSelect={setSelectedIndex}
      />

      {menuData.map((cat, idx) => (
        <MenuCategory key={idx} category={cat} />
      ))}

      <BackToTop label={selectedCategory} />
    </main>
  );
}

export default MenuPage;
