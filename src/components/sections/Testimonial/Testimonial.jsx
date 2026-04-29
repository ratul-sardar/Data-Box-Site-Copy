import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { urlFor } from "../../../lib/sanityClient";

function Testimonials({ testimonialsData, heading = true }) {
  if (!testimonialsData) return null;

  const data = testimonialsData?.testimonials || [];

  return (
    <section id="testimonial" className="py-16">
      <style>{`
        .mySwiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
      <div className="cssContainer pb-0">
        {heading && (
          <header className="header">
            <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-950 mb-16 tracking-tight">
              {testimonialsData?.heading?.split(testimonialsData?.highlightedText)[0]}
              <span className="linearText">{testimonialsData?.highlightedText}</span>
              {testimonialsData?.heading?.split(testimonialsData?.highlightedText)[1]}
            </h2>
          </header>
        )}
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 10,
          disableOnInteraction: false,
        }}
        speed={5000}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
        }}
        className="mySwiper !pb-14"
      >
        {data.map((testimonial, idx) => (
          <SwiperSlide key={idx} className="h-full">
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

const TestimonialCard = ({ testimonial }) => {
  const imageUrl = testimonial.avatar ? urlFor(testimonial.avatar)?.url() : null;

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col h-full shadow-sm min-h-100">
      <div className="flex items-center gap-4 mb-6">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-xl uppercase">
            {testimonial.initials || testimonial.name?.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 leading-tight">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-500 font-medium">
            {testimonial.title}
          </p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed text-[15px] flex-grow">
        {testimonial.quote}
      </p>
    </div>
  );
};

export default memo(Testimonials);
