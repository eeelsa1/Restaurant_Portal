import React from "react";

function MenuItem({ name, desc, price }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow flex justify-between items-start">
      <div>
        <p className="font-medium text-gray-800">{name}</p>
        {desc && <p className="text-gray-500 text-sm">{desc}</p>}
      </div>
      <div className="text-gray-700 whitespace-nowrap">${price}</div>
    </div>
  );
}

export default MenuItem;
