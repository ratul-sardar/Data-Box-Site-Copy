import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

// --- Static Data Array ---
const testimonialsData = [
  {
    id: 1,
    name: "Nik Glanz",
    title: "Marketing Intelligence",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg", // Placeholder image
    quote:
      "Maintaining all of our dashboards manually just wasn't sustainable. With Databox, I'm able to manage everything myself—and we have a lot of clients. It's essentially like having a whole data department in the platform.",
  },
  {
    id: 2,
    name: "Daniel Montalvo",
    title: "Marketing Manager",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg", // Placeholder image
    quote:
      "I feel like I save at least 30% of my time using a preset dashboard. Everything's already there, I just integrate the backend and make tiny tweaks.",
  },
  {
    id: 3,
    name: "Martin Saunders",
    title: "Managing Director",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg", // Placeholder image
    quote:
      "We've grown year on year over the last five years, and I think a big factor in that is business reporting and Databox.",
  },
  {
    id: 4,
    name: "Jason Spooner",
    title: "President/Founder",
    avatar: null, // No image, use initials
    initials: "JS",
    quote:
      "I think it's safe to say Databox easily saved us 10 to 15 hours a month on reporting. If you quantify that in terms of salary, that's like a quarter of someone's annual salary we saved.",
  },
  {
    id: 5,
    name: "Elizabeth Kuerth",
    title: "Senior Marketing Direct...",
    avatar: null, // No image, use initials
    initials: "EK",
    quote:
      "My business life has improved tremendously since implementing Databox because I am not sifting through so many reports anymore and I am able to make better marketing decisions based on the data I have in front of me.",
  },
  {
    id: 6,
    name: "Sumit Rai",
    title: "Chief Product Officer",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg", // Placeholder image
    quote:
      "What Databox has provided us that we couldn't do before is visualize data from our own platform. It gives us that really useful overview—from marketing to the board, and even the DevOps team.",
  },
  {
    id: 7,
    name: "Mark...", // partial name from image
    title: "Dire...", // partial title from image
    avatar: null, // No image, use initials
    initials: "M", // Partial initials
    quote:
      "It has really efficiency. In check five d... everything is standardize...", // partial text from image
  },
];

// --- Sub-component for individual card ---
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col h-full shadow-sm min-h-100">
      {/* Header (Avatar + Name) */}
      <div className="flex items-center gap-4 mb-6">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-xl uppercase">
            {testimonial.initials}
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

      {/* Quote Body */}
      <p className="text-gray-700 leading-relaxed text-[15px] flex-grow">
        {testimonial.quote}
      </p>
    </div>
  );
};

// --- Main Carousel Component ---

export default function Testimonials() {
  return (
    <section id="testimonial" className="">
      <div className="cssContainer pb-0">
        {/* Section Heading */}

        <header className="header">
          <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-950 mb-16 tracking-tight">
            Why customers <span className="linearText">love Databox</span>
          </h2>
        </header>
      </div>
      {/* Carousel Container */}
      <Swiper
        // Swiper configurations
        modules={[Autoplay, Pagination]}
        spaceBetween={30} // gap between cards
        slidesPerView={1} // mobile default
        loop={true} // infinite loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true, // matching the compact dots in image
        }}
        // Responsiveness Breakpoints
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
          1536: {
            slidesPerView: 5, // Matching the wide view in the screenshot
          },
        }}
        className="mySwiper !pb-14" // Extra padding at bottom for pagination dots
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="h-full">
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
