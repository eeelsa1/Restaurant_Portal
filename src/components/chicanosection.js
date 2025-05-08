import React from "react";
import { useNavigate } from "react-router-dom";
import chicano1 from "../images/chicano1.png";

function ChicanoSection() {
  const navigate = useNavigate();

  const goToChicano = () => {
    navigate("/chicano");
  };

  return (
    <section className="text-black px-6 md:px-12 ">
      <div className="max-w-screen-xl mx-auto pt-8 pb-4 space-y-8">
        {/* 標題 */}
        <h2 className="text-3xl font-extrabold text-center">
          The Passion of Chicano
        </h2>

        {/* 圖片 + 按鈕 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* 左側圖片 */}
          <div className="w-full md:w-1/2">
            <img
              src={chicano1}
              alt="Chicano Chef Portrait"
              loading="lazy"
              className="rounded-lg object-cover w-full aspect-video transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          </div>

          {/* 右側按鈕 */}
          <div className="flex flex-col justify-center items-center w-full md:w-1/2">
            <button
              onClick={goToChicano}
              className="
                inline-block
                bg-gradient-to-r from-orange-400 to-orange-500
                text-white font-semibold
                px-6 py-3 rounded-full
                shadow-lg hover:shadow-2xl
                transition-transform duration-300 ease-out
                hover:scale-105 active:scale-95
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
              "
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChicanoSection;
