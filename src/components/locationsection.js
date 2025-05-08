import React from "react";

function LocationSection() {
  return (
    <section className="px-6 md:px-12 py-16 bg-gray-50 space-y-12 text-black">
      {/* 標題 */}
      <h2 className="text-3xl font-bold text-center">Location &amp; Hours</h2>

      {/* 地址與營業時間 */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 max-w-screen-xl mx-auto">
        {/* 地址資訊 */}
        <div className="w-full md:w-1/2 space-y-3">
          <h3 className="text-2xl font-semibold text-orange-500">Address</h3>
          <p className="text-gray-700">116台北市文山區指南路二段45巷3號</p>
          <p className="text-orange-500 font-semibold">
            Tel <span className="text-gray-700 font-normal">02-2939-2998</span>
          </p>
        </div>

        {/* 營業時間 */}
        <div className="w-full md:w-1/2 space-y-3">
          <h3 className="text-2xl font-semibold text-orange-500">Opening Hours</h3>
          <p className="text-gray-700">週一～四　17:00 – 01:00</p>
          <p className="text-gray-700">週五、六　17:00 – 02:00</p>
          <p className="text-gray-700">週日　　　19:00 – 01:00</p>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full max-w-screen-xl mx-auto">
        <iframe
          title="restaurant location"
          className="w-full h-72 md:h-96 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1221859196626!2d121.56786241500015!3d24.989340584562376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7ef7d684d4d%3A0x38d74102db82e30f!2z6L6y5pyD6YqA6Kqe5Z-O!5e0!3m2!1szh-TW!2stw!4v1682869131891!5m2!1szh-TW!2stw"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default LocationSection;
