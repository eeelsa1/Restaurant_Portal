// components/menucategory.jsx
import React from "react";

function MenuCategory({ category }) {
  return (
    <section className="px-4 py-6 space-y-6">
      {/* 分類標題 */}
      <h2 className="text-2xl font-bold border-b-2 border-orange-300 pb-2">
        {category.icon} {category.category} / {category.sub}
      </h2>

      {/* 若有分組（如 Grilled / Drinks） */}
      {category.groups ? (
        category.groups.map((group, i) => (
          <div key={i} className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-700">
              {group.title} / {group.en}
            </h3>
            <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
              {group.items.map((item, j) => (
                <div key={j} className="py-2 border-b border-gray-200 last:border-0">
                  <div className="flex justify-between">
                    <span className="font-medium">{item.name}</span>
                    <span className="font-semibold text-orange-500">{item.price}</span>
                  </div>
                  <div className="text-gray-500 text-sm mt-1">{item.en}</div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="bg-gray-100 rounded-lg p-4 shadow-sm space-y-2">
          {category.items.map((item, i) => (
            <div key={i} className="py-2 border-b border-gray-200 last:border-0">
              <div className="flex justify-between">
                <span className="font-medium">{item.name}</span>
                <span className="font-semibold text-orange-500">{item.price}</span>
              </div>
              <div className="text-gray-500 text-sm mt-1">{item.en}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MenuCategory;
