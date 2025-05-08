import React from "react";
import { useNavigate } from "react-router-dom";

function SpecialtiesSection() {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate("/menu");
  };

  return (
    <section className="px-4 sm:px-6 md:px-12 py-16 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* 左側：標題與按鈕 */}
        <div className="flex flex-col justify-center items-center text-center space-y-6 w-full md:w-1/2">
          <h2 className="text-3xl font-bold relative">
            <span className="inline-block border-t border-black w-10 mr-4 align-middle"></span>
            Our Specialty
            <span className="inline-block border-t border-black w-10 ml-4 align-middle"></span>
          </h2>
          <button
            onClick={goToMenu}
            className="
              inline-block self-center
              bg-gradient-to-r from-orange-400 to-orange-500
              text-white font-semibold
              px-6 py-3 rounded-full
              shadow-lg hover:shadow-2xl
              transition-transform duration-300 ease-out
              hover:scale-[1.03] active:scale-95
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
            "
          >
            View Menu
          </button>
        </div>

        {/* 右側：圖片區塊 */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full md:w-1/2">
          <img
            src="/img1.png"
            alt="Specialty 1"
            className="col-span-2 rounded-lg object-cover h-48 md:h-64 w-full max-w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          />
          <img
            src="/img2.png"
            alt="Specialty 2"
            className="rounded-lg object-cover h-32 md:h-40 w-full max-w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          />
          <img
            src="/img3.png"
            alt="Specialty 3"
            className="rounded-lg object-cover h-32 md:h-40 w-full max-w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialtiesSection;
