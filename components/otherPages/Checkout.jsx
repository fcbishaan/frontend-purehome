"use client";

import { useContextElement } from "@/context/Context";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const discounts = [
  {
    discount: "10% OFF",
    details: "For all orders from 200₹",
    code: "Mo234231",
  },
  {
    discount: "10% OFF",
    details: "For all orders from 200₹",
    code: "Mo234231",
  },
  {
    discount: "10% OFF",
    details: "For all orders from 200₹",
    code: "Mo234231",
  },
];

export default function Checkout() {
  const [activeDiscountIndex, setActiveDiscountIndex] = useState(0);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const { cartProducts = [], totalPrice = 0 } = useContextElement();

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="flat-spacing tf-page-checkout">
              {/* LOGIN */}
              <div className="wrap">
                <div className="title-login">
                  <p>Already have an account?</p>
                  <Link href="/login" className="text-button">
                    Login here
                  </Link>
                </div>
                <form className="login-box" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid-2">
                    <input type="text" placeholder="Your name / Email" />
                    <input type="password" placeholder="Password" />
                  </div>
                  <button className="tf-btn" type="submit">
                    <span className="text">Login</span>
                  </button>
                </form>
              </div>

              {/* INFORMATION */}
              <div className="wrap">
                <h5 className="title">Information</h5>
                <form className="info-box" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid-2">
                    <input type="text" placeholder="First Name*" required />
                    <input type="text" placeholder="Last Name*" required />
                  </div>
                  <div className="grid-2">
                    <input type="email" placeholder="Email Address*" required />
                    <input type="tel" placeholder="Phone Number*" required />
                  </div>

                  <div className="tf-select">
                    <select
                      className="text-title"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="">Choose Country / Region</option>
                      <option value="India">India</option>
                    </select>
                  </div>

                  <div className="grid-2">
                    <input type="text" placeholder="Town / City*" required />
                    <input type="text" placeholder="Street address*" required />
                  </div>

                  <div className="grid-2">
                    <div className="tf-select">
                      <select
                        className="text-title"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      >
                        <option value="">Choose State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="West Bengal">West Bengal</option>
                      </select>
                    </div>
                    <input type="text" placeholder="Postal Code*" required />
                  </div>

                  <textarea placeholder="Write note..." />
                </form>
              </div>

              {/* PAYMENT */}
              <div className="wrap">
                <h5 className="title">Choose payment option</h5>
                <form className="form-payment" onSubmit={(e) => e.preventDefault()}>
                  <div className="payment-box" id="payment-box">
                    <div className="payment-item active">
                      <label className="payment-header">
                        <input
                          type="radio"
                          name="payment-method"
                          defaultChecked
                        />
                        <span className="text-title">Credit Card</span>
                      </label>
                      <div className="payment-body">
                        <div className="input-payment-box">
                          <input type="text" placeholder="Name on Card*" />
                          <input type="text" placeholder="Card Number*" />
                          <div className="grid-2">
                            <input type="month" />
                            <input type="password" placeholder="CVV*" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="payment-item">
                      <label className="payment-header">
                        <input type="radio" name="payment-method" />
                        <span className="text-title">Cash on delivery</span>
                      </label>
                    </div>
                  </div>

                  <button className="tf-btn">Pay Now</button>
                </form>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="col-xl-5 offset-xl-1">
            <div className="flat-spacing flat-sidebar-checkout">
              <div className="sidebar-checkout-content">
                <h5 className="title">Shopping Cart</h5>

                <div className="list-product">
                  {cartProducts.map((item) => (
                    <div key={item.id} className="item-product">
                      <Link href={`/product-detail/${item.id}`} className="img-product">
                        <Image src={item.imgSrc} alt={item.title} width={120} height={160} />
                      </Link>
                      <div className="content-box">
                        <div className="info">
                          <Link href={`/product-detail/${item.id}`} className="name-product">
                            {item.title}
                          </Link>
                        </div>
                        <div className="total-price">
                          {item.quantity} × ₹{item.price.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* DISCOUNTS */}
                <Swiper spaceBetween={20} slidesPerView={1.2}>
                  {discounts.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className={`box-discount ${activeDiscountIndex === index ? "active" : ""
                          }`}
                        onClick={() => setActiveDiscountIndex(index)}
                      >
                        <div className="discount-top">
                          <strong>{item.discount}</strong>
                          <div className="discount-bot">
                            <p>{item.details}</p>
                          </div>
                        </div>
                        <span>{item.code}</span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="sec-total-price">
                  <h5 className="d-flex justify-content-between">
                    <span>Total</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
