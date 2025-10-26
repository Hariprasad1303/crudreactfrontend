import React from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//data in the testimonial section
const testimonials = [
  {
    name: "Hariprasad V V",
    role: "Frontend Developer",
    feedback:
      "DevElevate transformed the way I track and showcase my skills. The dashboard is clean, interactive, and very intuitive!",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Aarav Singh",
    role: "Full Stack Engineer",
    feedback:
      "The analytics and progress tracking features are next-level. It helps me stay focused on my growth goals.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Neha Sharma",
    role: "UI/UX Designer",
    feedback:
      "Beautiful interface, smooth animations, and the skills section makes showcasing my work seamless.",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
];
const Testimonials = () => {
  return (
    <div className="bg-indigo-400 p-16">
      <h2 className="text-center text-4xl font-bold md:text-5xl mb-8">
        Testimonials
      </h2>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
      >
      {
        testimonials.map((testimonial,index)=>(
            <SwiperSlide>
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-5 md:flex-row items-center gap-8 md;p-16 flex flex-col">
                    {/* image section */}
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-indigo-500"/>
                    {/* content section */}
                   <div>
                        <h3 className="mt-6 text-indigo-600 font-semibold font-lg md:text-xl italic leading-relaxed">{testimonial.name}</h3>
                        <p className="text-gray-500 text-sm md:text-base">{testimonial.role}</p>
                        <p className="text-gray-700 text-lg md:text-xl italic leading-relaxed mb-8">"{testimonial.feedback}"</p>
                   </div>
                </div>
            </SwiperSlide>
        ))
      }      
      </Swiper>
    </div>
  );
};

export default Testimonials;
