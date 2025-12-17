import Features from "@/components/common/Features";
import MarqueeSection2 from "@/components/common/MarqueeSection2";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Collections from "@/components/homes/furniture/Collections";
import Collections2 from "@/components/homes/furniture/Collections2";
import Hero from "@/components/homes/furniture/Hero";
import Lookbook from "@/components/homes/furniture/Lookbook";
import Testimonials from "@/components/homes/furniture/Testimonials";
import React from "react";
import Products4 from "@/components/common/Products4";
import ShopGram from "@/components/common/ShopGram";
import ExploreProducts from "@/components/common/ExploreProducts";
import Loader from "@/components/Loader";
import ContentReadySignal from "@/components/common/ContentReadySignal";
import { Suspense } from "react";

export const metadata = {
  title:
    "Home Furniture ||PURE CHAIR",
  description: "PURE CHAIR",
};

export default function HomeFurniturePage() {
  return (
    <>
    <Suspense fallback={<Loader />}>
      <Header2 />
      <Hero />
      <MarqueeSection2 parentClass="tf-marquee bg-light-blue-4 border-0" />
      <Collections />
      <ExploreProducts />
      <Lookbook />
      <Products4 parentClass="flat-spacing-3" />
      <Collections2 />
      <Testimonials />
      <ShopGram parentClass="flat-spacing-3" />
      <Footer1 />
      <ContentReadySignal />
      </Suspense>
    </>
  );
}
