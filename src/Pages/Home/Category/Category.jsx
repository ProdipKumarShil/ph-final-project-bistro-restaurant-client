import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import '../../../app.css'

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle 
      subHeading={'From 11.00am to 10:00pm'}
      heading={'Order Online'}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide >
          <img src={slide1} alt="" />
          <h3 className="text-white text-center font-cenizel mb-4 text-shadow -mt-16 text-4xl uppercase">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-white text-center font-cenizel mb-4 text-shadow -mt-16 text-4xl uppercase">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-white text-center font-cenizel text-shadow mb-4  -mt-16 text-4xl uppercase">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-white text-center font-cenizel text-shadow mb-4  -mt-16 text-4xl uppercase">Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-white text-center font-cenizel text-shadow mb-4  -mt-16 text-4xl uppercase">Salads</h3>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Category;