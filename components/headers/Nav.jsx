"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard1 from "../productCards/ProductCard1";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories and subcategories from API
  // In Nav.jsx
  useEffect(() => {
    const fetchNavData = async () => {
      try {
        // Fetch categories
        const categoriesRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/categories`);
        if (!categoriesRes.ok) throw new Error('Failed to fetch categories');
        const categoriesData = await categoriesRes.json();

        // Fetch subcategories
        const subcategoriesRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subCategory/`);
        if (!subcategoriesRes.ok) throw new Error('Failed to fetch subcategories');
        const subcategoriesData = await subcategoriesRes.json();

        // Fetch products for featured items
        const productsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`);
        if (!productsRes.ok) throw new Error('Failed to fetch products');
        const productsData = await productsRes.json();

        if (categoriesData.success) {
          setCategories(categoriesData.data);
        }

        if (subcategoriesData.success) {
          setSubcategories(subcategoriesData.data);
        }

        if (productsData.success) {
          setFeaturedProducts(productsData.products.slice(0, 9));
        }
      } catch (error) {
        console.error('Error fetching nav data:', error);
        // Set empty arrays to prevent undefined errors
        setCategories([]);
        setSubcategories([]);
        setFeaturedProducts([]);
      } finally {
        setLoading(false);
        // Always dispatch nav-ready even if there was an error
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('nav-ready'));
        }
      }
    };

    fetchNavData();
  }, []);
  // Helper function for active state logic
  const checkActive = (slug) => pathname.includes(slug);

  // Get subcategories for a specific category
  const getSubcategoriesForCategory = (categoryId) => {
    return subcategories.filter(sub => sub.category?._id === categoryId || sub.category === categoryId);
  };

  // Mega Menu Renderer - now accepts category object
  const renderMegaMenu = (category) => {
    if (!category) return null;

    const categorySubcategories = getSubcategoriesForCategory(category._id);
    const categoryProducts = featuredProducts.filter(p =>
      p.category?.slug === category.slug || p.category?._id === category._id
    ).slice(0, 3); // Show first 3 products from this category

    return (
      <div className="sub-menu mega-menu">
        <div className="container">
          <div className="row">
            {/* Column 1: Subcategory Links (Left Side) */}
            <div className="col-lg-3">
              <div className="mega-menu-item">
                <div className="menu-heading">{category.name} Categories</div>
                <ul className="menu-list">
                  {categorySubcategories.map((subcat, index) => (
                    <li
                      key={index}
                      className={`menu-item-li ${pathname.includes(subcat.slug) ? "active" : ""
                        }`}
                    >
                      <Link href={`/shop/${(category.slug || category.name?.toLowerCase())}/${(subcat.slug || subcat.name?.toLowerCase())}`} className="menu-link-text">
                        {subcat.name}
                      </Link>
                    </li>
                  ))}
                  <li className="menu-item-li view-all">
                    <Link href={`/shop/${(category.slug || category.name?.toLowerCase())}`} className="menu-link-text tf-btn-link">
                      View All {category.name}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2, 3, 4: Featured Products (Right Side) */}
            <div className="col-lg-9">
              <div className="wrapper-sub-shop">
                <div className="menu-heading">Featured Products</div>
                {categoryProducts.length > 0 ? (
                  <Swiper
                    dir="ltr"
                    className="swiper tf-product-header"
                    slidesPerView={3}
                    spaceBetween={20}
                  >
                    {categoryProducts.map((product, i) => (
                      <SwiperSlide key={i} className="swiper-slide">
                        <ProductCard1 product={{ ...product, colors: null }} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <p className="text-muted">No featured products available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <li
        className={`menu-item ${pathname === "/" ? "active" : ""
          }`}
      >
        <a href="/" className="item-link">
          Home
        </a>
      </li>

      {/* Dynamically render all categories */}
      {categories.map((category, index) => {
        const hasSubcategories = getSubcategoriesForCategory(category._id).length > 0;
        const isActive = checkActive(category.slug);

        return (
          <li
            key={category._id || index}
            className={`menu-item ${isActive ? "active" : ""}`}
          >
            <a href={`/shop/${(category.slug || category.name?.toLowerCase())}`} className="item-link">
              {category.name}
              {hasSubcategories && <i className="icon icon-arrow-down" />}
            </a>
            {hasSubcategories && renderMegaMenu(category)}
          </li>
        );
      })}
    </>
  );
}
