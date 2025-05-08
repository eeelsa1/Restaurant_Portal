import React, { useEffect, useState } from "react";

function BackToTop({ label }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
        {label && (
          <div className="bg-white text-black px-4 py-2 rounded shadow text-sm font-medium">
            {label.category} / {label.sub}
          </div>
        )}
        <button
          onClick={scrollToTop}
          className="bg-orange-400 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-500 transition"
          aria-label="Back to top"
        >
         ⬆ 回頂部
        </button>
      </div>
    )
  );
}

export default BackToTop;
