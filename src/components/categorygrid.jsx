// components/categorygrid.jsx
import React from "react";

function CategoryGrid({ categories, activeIndex, onSelect }) {
  return (
    <div className="sticky top-20 bg-white z-40 border-b shadow-sm">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 px-4 py-6">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`flex flex-col items-center justify-center border rounded-lg p-2 transition hover:shadow-md hover:bg-orange-50 text-center text-sm font-medium ${
              index === activeIndex ? "bg-orange-100 border-orange-400" : "bg-white"
            }`}
          >
            <img
              src={cat.image || "/images/default.jpg"}
              alt={cat.sub}
              className="w-full h-24 object-cover mb-2 shadow"
            />
            <span className="text-sm font-semibold text-black">{cat.category}</span>
            <span className="text-xs text-gray-500">{cat.sub}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;
