// import {  useState } from 'react';
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./sliderStyles.css";
import { CircleX } from "lucide-react";

const Slider = (data) => {
  const images = data?.listingDetails?.data[0]?.images;

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
        className="w-[100%] text-gray-100 text-sm font-semibold cursor-grabbing "
      >
        {images?.map((slideContent, index) => (
          <SwiperSlide
            key={slideContent}
            virtualIndex={index}
            className="text-center text-[18px] items-center"
          >
            <img
              src={slideContent?.url}
              className="block  h-[200px] lg:w-[400px] lg:h-[400px] object-cover"
              onClick={() =>
                document.getElementById(`index-${index}`).showModal()
              }
            />
            {/* Daisy Ui Model is implemented below for full image view */}
            <dialog
              id={`index-${index}`}
              className="modal bg-black bg-opacity-50 backdrop-blur-lg"
            >
              <div className="modal-box p-0">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-blue-600">
                    <CircleX />
                  </button>
                </form>
                <img
                  src={slideContent?.url}
                  alt=""
                  className="w-[100%] h-[100%] object-contain"
                />
              </div>
            </dialog>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
