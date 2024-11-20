"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

function Carousel() {
  return (
    <div className="mb-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link href="/shop/product/672ba4e09e16953b66fa8629">
            <Image
              src="https://res.cloudinary.com/dnugszkww/image/upload/v1732015623/banner4_rlz5j9.jpg"
              alt="Image Slider"
              width={1200}
              height={400}
              className="w-full rounded-lg lg:h-full h-[30vh] sm:h-60 bg-cover"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/shop/product/6720dbe1bd7078dee3304891">
          <Image
            src="https://res.cloudinary.com/dnugszkww/image/upload/v1732015623/banner5_plasay.jpg"
            alt="Image Slider 2"
            width={1200}
            height={400}
            className="w-full rounded-lg lg:h-full h-[30vh] sm:h-60 bg-cover"
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/shop/product/6720d821bd7078dee33047e8">
            <Image
              src="https://res.cloudinary.com/dnugszkww/image/upload/v1732015624/banner3_awhypk.jpg"
              alt="Image Slider 3"
              width={1200}
              height={400}
              className="w-full rounded-lg lg:h-full h-[30vh] sm:h-60 bg-cover"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/shop/product/672ba4e09e16953b66fa8629">
          <Image
            src="https://res.cloudinary.com/dnugszkww/image/upload/v1732015628/banner2_lkrtmr.jpg"
            alt="Image Slider 3"
            width={1200}
            height={400}
            
            className="w-full rounded-lg lg:h-full h-[30vh] sm:h-60  bg-cover"
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='/shop/product/6720d9e8bd7078dee3304845'>
          <Image
            src="https://res.cloudinary.com/dnugszkww/image/upload/v1732015628/banner1_apd8dj.jpg"
            alt="Image Slider 3"
            width={1200}
            height={400}
            className="w-full rounded-lg lg:h-full h-[30vh] sm:h-60 bg-cover"
          />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
