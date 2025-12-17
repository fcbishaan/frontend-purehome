"use client";
import { collectionItems2 } from "@/data/collections";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Collections() {
  return (
    <section className="space-30">
      <div
      className="heading-section-2 wow fadeInUp text-center" style={{visibility:"visible", animationName:"fadeInUp"}}>
        <h3>Top Collections</h3>
        <a className="btn-line" href="/">
        View All Collections</a>
      </div>

      <Swiper
        dir="ltr"
        // UPDATED: slidesPerView changed to 5 (default for large screens)
        slidesPerView={5}
        spaceBetween={20}
        breakpoints={{
          // UPDATED: Added 1200px breakpoint for 5 slides
          1200: { slidesPerView: 5 },
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          576: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="swiper tf-sw-collection"
      >
        {collectionItems2.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="collection-position style-lg hover-img">
              <a className="img-style" style={{position:'relative', display:"block", }}>
                <Image
                  className="lazyload"
                  data-src={item.imgSrc}
                  alt={item.alt}
                  src={item.imgSrc}
                  width={900}
                  height={900}
                />
                <div className="collection-overlay"
                style={{position:"absolute", inset:0, zIndex:1, pointerEvents:'none', background: 'linear-gradient(0deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.15) 100%)', color:"white" }}
                ></div>
              </a>
              <div className="content" style={{ color: "#fff", position: "absolute", bottom: "20px", left: "20px", right: "20px", zIndex: 2 }}>
                <h3 className="title wow fadeInUp ">
                  <Link href={`/`} className="link" style={{ color: "#fff" }}>
                    {item.title}
                  </Link>
                </h3>
                <p
                  className="desc text-white text-title wow fadeInUp"
                  data-wow-delay="0.1s"
                  style={{ color: "#fff" }}
                >
                  {item.desc}
                </p>
                <div className="wow fadeInUp" data-wow-delay="0.2s">
                  <Link
                    href={`/`}
                    className="btn-line style-white"
                  >
                    {item.btnText}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
