"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "../common/Countdown";
import { useContextElement } from "@/context/Context";
export default function ProductCard1({
  product,
  gridClass = "",
  parentClass = "card-product wow fadeInUp",
  isNotImageRatio = false,
  radiusClass = "",
  imageWidth = 600,
  imageHeight = 800,
  imageFit = "contain",
  aspectRatio,
  showHeader = false,
  title = "Explore Our Products",
  subtitle = "Discover our curated collection of premium products"
}) {
  // Map backend data to frontend format if needed
  const displayProduct = {
    ...product,
    id: product.id || product._id,
    colors: product.colors?.map(c => {
      // If colors are already mapped (from ExploreProducts before refactor), use them
      if (c.imgSrc) return c;

      // Otherwise map from backend format
      const colorImage = product.colorImages?.find(ci => ci.color === c._id || ci.color?._id === c._id);
      return {
        ...c,
        imgSrc: colorImage?.imageUrl || product.imgSrc,
        hexValue: c.hexValue
      };
    }) || []
  };

  // Helper to safely get image URL
  const getImageUrl = (img) => {
    if (!img) return null;
    if (typeof img === "string") return img.trim() !== "" ? img : null;
    if (typeof img === "object" && img.url)
      return img.url.trim() !== "" ? img.url : null;
    return null;
  };

  const [currentImage, setCurrentImage] = useState(getImageUrl(displayProduct.imgSrc) || "");

  const {
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
    setQuickViewItem,
    addProductToCart,
    isAddedToCartProducts,
  } = useContextElement();

  useEffect(() => {
    setCurrentImage(getImageUrl(displayProduct.imgSrc) || "");
  }, [displayProduct.imgSrc]);

  if (!product) return null;

  const imgHoverUrl = getImageUrl(displayProduct.imgHover);

  return (
    <div className="product-section">
      {showHeader && (
        <div className="section-header text-center mb-5">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}
      <div
        className={`${parentClass} ${gridClass} ${displayProduct.isOnSale ? "on-sale" : ""
          } ${displayProduct.sizes ? "card-product-size" : ""}`}
      >
        <div
          className={`card-product-wrapper ${isNotImageRatio ? "aspect-ratio-0" : ""
            } ${radiusClass} `}
          style={aspectRatio ? { aspectRatio } : undefined}
        >
          <Link
            href={`/product-detail/${displayProduct.slug || displayProduct.id}`}
            className="product-img"
            style={
              isNotImageRatio
                ? {
                  width: `${imageWidth}px`,
                  height: `${imageHeight}px`,
                  position: "relative",
                  display: "block",
                }
                : undefined
            }
          >

            {currentImage ? (
              <Image
                className="lazyload img-product"
                src={currentImage}
                alt={displayProduct.title}
                width={450}
                height={450}
                style={{ width: "100%", height: "100%", objectFit: imageFit }}
              />
            ) : null}

            {imgHoverUrl ? (
              <Image
                className="lazyload img-hover"
                src={imgHoverUrl}
                alt={displayProduct.title}
                width={imageWidth}
                height={imageHeight}
                style={{ width: "100%", height: "100%", objectFit: imageFit }}
              />
            ) : null}

          </Link>
          {/*{product.hotSale && (
          <div className="marquee-product bg-main">
            <div className="marquee-wrapper">
              <div className="initial-child-container">
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
              </div>
            </div>
            <div className="marquee-wrapper">
              <div className="initial-child-container">
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
              </div>
            </div>
          </div>
        )}/}
        {displayProduct.isOnSale && (
          <div className="on-sale-wrap">
            <span className="on-sale-item">-{displayProduct.salePercentage}</span>
          </div>
        )}
      {/*    {product.sizes && (
          <div className="variant-wrap size-list">
            <ul className="variant-box">
              {product.sizes.map((size) => (
                <li key={size} className="size-item">
                  {size}
                </li>
              ))}
            </ul>
          </div>
        )}*/}
          {displayProduct.countdown && (
            <div className="variant-wrap countdown-wrap">
              <div className="variant-box">
                <div
                  className="js-countdown"
                  data-timer={displayProduct.countdown}
                  data-labels="D :,H :,M :,S"
                >
                  <CountdownTimer />
                </div>
              </div>
            </div>
          )}
          {displayProduct.oldPrice ? (
            <div className="on-sale-wrap">
              <span className="on-sale-item">-25%</span>
            </div>
          ) : (
            ""
          )}
          <div className="list-product-btn">
            <a
              onClick={() => addToWishlist(displayProduct.id)}
              className="box-icon wishlist btn-icon-action"
            >
              <span className="icon icon-heart" />
              <span className="tooltip">
                {isAddedtoWishlist(displayProduct.id)
                  ? "Already Wishlished"
                  : "Wishlist"}
              </span>
            </a>
            <a
              href="#compare"
              data-bs-toggle="offcanvas"
              aria-controls="compare"
              onClick={() => addToCompareItem(displayProduct.id)}
              className="box-icon compare btn-icon-action"
            >
              <span className="icon icon-gitDiff" />
              <span className="tooltip">
                {isAddedtoCompareItem(displayProduct.id)
                  ? "Already compared"
                  : "Compare"}
              </span>
            </a>
            <a
              href="#quickView"
              onClick={() => setQuickViewItem(displayProduct)}
              data-bs-toggle="modal"
              className="box-icon quickview tf-btn-loading"
            >
              <span className="icon icon-eye" />
              <span className="tooltip">Quick View</span>
            </a>
          </div>
          <div className="list-btn-main  margin-top-30">
            {displayProduct.addToCart == "Quick Add" ? (
              <a
                className="btn-main-product"
                href="#quickAdd"
                onClick={() => setQuickAddItem(displayProduct.id)}
                data-bs-toggle="modal"
              >
                Quick Add
              </a>
            ) : (
              <a
                className="btn-main-product"
                onClick={() => addProductToCart(displayProduct.id)}
              >
                {isAddedToCartProducts(displayProduct.id)
                  ? "Already Added"
                  : "ADD TO CART"}
              </a>
            )}
          </div>
        </div>
        <div className="card-product-info ">
          <Link href={`/product-detail/${displayProduct.slug || displayProduct.id}`} className="title link">
            {displayProduct.title}
          </Link>
          <span className="price">
            {displayProduct.oldPrice && (
              <span className="old-price">₹{displayProduct.oldPrice.toFixed(2)}</span>
            )}{" "}
            ₹{displayProduct.price?.toFixed(2)}
          </span>
          {displayProduct.colors && (
            <ul className="list-color-product">
              {displayProduct.colors.map((color, index) => (
                <li
                  key={index}
                  className={`list-color-item color-swatch ${currentImage == getImageUrl(color.imgSrc) ? "active" : ""
                    } ${color.bgColor == "bg-white" || color.hexValue === '#ffffff' ? "line" : ""}`}
                  onMouseOver={() => setCurrentImage(getImageUrl(color.imgSrc))}
                >
                  <span
                    className={`swatch-value ${color.bgColor || ''}`}
                    style={{ backgroundColor: color.hexValue }}
                  />
                  {getImageUrl(color.imgSrc) ? (
                    <Image
                      className="lazyload"
                      src={getImageUrl(color.imgSrc)}
                      alt="color variant"
                      width={600}
                      height={800}
                    />
                  ) : null}

                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}