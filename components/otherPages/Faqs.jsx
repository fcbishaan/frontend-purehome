"use client";
import React from "react";

export default function Faqs() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="page-faqs-wrap">
          <div className="list-faqs">
            <div>
              <h5 className="faqs-title">Ordering & Shipping</h5>
              <ul
                className="accordion-product-wrap style-faqs"
                id="accordion-faq-1"
              >
                <li className="accordion-product-item">
                  <a
                    href="#accordion-1"
                    className="accordion-title collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-1"
                  >
                    <h6>What are your delivery options and timeframes?</h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-1"
                    className="collapse"
                    data-bs-parent="#accordion-faq-1"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        We offer several delivery options to suit your needs:
                        <ul>
                          <li><strong>Standard Delivery:</strong> 5-7 business days</li>
                          <li><strong>Express Delivery:</strong> 2-3 business days (additional charges apply)</li>
                          <li><strong>White Glove Delivery:</strong> In-home delivery and setup (available for select items)</li>
                        </ul>
                        Delivery times may vary based on your location and product availability. You'll receive a tracking number once your order ships.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-product-item">
                  <a
                    href="#accordion-2"
                    className="accordion-title current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-2"
                  >
                    <h6>How do I track my order?</h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-2"
                    className="collapse show"
                    data-bs-parent="#accordion-faq-1"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        Once your order has been processed and shipped, you'll receive a confirmation email with a tracking number and a link to track your package. You can also track your order by logging into your Curve & Comfy account and visiting the 'My Orders' section.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-product-item">
                  <a
                    href="#accordion-3"
                    className="accordion-title collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-3"
                  >
                    <h6>What is your return policy?</h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-3"
                    className="collapse"
                    data-bs-parent="#accordion-faq-1"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        We offer a 30-day return policy for most items. To be eligible for a return:
                        <ul>
                          <li>Items must be in original condition with all tags attached</li>
                          <li>Proof of purchase is required</li>
                          <li>Some items like custom or made-to-order furniture may not be returnable</li>
                        </ul>
                        Please contact our customer service team to initiate a return. Return shipping fees may apply unless the item is damaged or incorrect.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-product-item">
                  <a
                    href="#accordion-4"
                    className="accordion-title collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-4"
                  >
                    <h6>Do you offer assembly services for furniture?</h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-4"
                    className="collapse"
                    data-bs-parent="#accordion-faq-1"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        Yes, we offer professional assembly services for most of our furniture items. You can select this option during checkout for an additional fee. Our white-glove delivery service also includes professional assembly and placement of your furniture in your desired room.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-product-item">
                  <a
                    href="#accordion-5"
                    className="accordion-title collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-5"
                  >
                    <h6>What materials are used in your furniture?</h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-5"
                    className="collapse"
                    data-bs-parent="#accordion-faq-2"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        At Curve & Comfy, we're committed to quality and sustainability:
                        <ul>
                          <li><strong>Wood:</strong> Sustainably sourced solid wood and engineered wood</li>
                          <li><strong>Upholstery:</strong> High-quality, durable fabrics and genuine leather options</li>
                          <li><strong>Fillings:</strong> High-resilience foam and down alternative fillings</li>
                          <li><strong>Finishes:</strong> Non-toxic, low-VOC finishes for safety and durability</li>
                        </ul>
                        Each product page provides detailed material information to help you make an informed decision.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="faqs-title">Exchanges &amp; Returns</h5>
              <ul
                className="accordion-product-wrap style-faqs"
                id="accordion-faq-2"
              >
                <li className="accordion-product-item">
                  <a
                    href="#accordion-6"
                    className="accordion-title collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-6"
                  >
                    <h6>Can I cancel or change my order?</h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-6"
                    className="collapse"
                    data-bs-parent="#accordion-faq-2"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        Please contact our customer service team as soon as possible if you need to cancel or make changes to your order. We'll do our best to accommodate your request, but please note that we may not be able to make changes once an order has shipped.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-product-item">
                  <a
                    href="#accordion-7"
                    className="accordion-title current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-7"
                  >
                    <h6>
                      I have a promotional or discount code. How do I use it for
                      an online purchase?
                    </h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-7"
                    className="collapse show"
                    data-bs-parent="#accordion-faq-2"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        Simply enter your promotional or discount code at checkout to receive your discount. Please note that some codes may have expiration dates or restrictions, so be sure to review the terms and conditions before making your purchase.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-product-item">
                  <a
                    href="#accordion-8"
                    className="accordion-title collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-8"
                  >
                    <h6>What are the delivery types?</h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-8"
                    className="collapse"
                    data-bs-parent="#accordion-faq-2"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        We offer several delivery options to suit your needs:
                        <ul>
                          <li><strong>Standard Delivery:</strong> 5-7 business days</li>
                          <li><strong>Express Delivery:</strong> 2-3 business days (additional charges apply)</li>
                          <li><strong>White Glove Delivery:</strong> In-home delivery and setup (available for select items)</li>
                        </ul>
                        Delivery times may vary based on your location and product availability. You'll receive a tracking number once your order ships.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-product-item">
                  <a
                    href="#accordion-9"
                    className="accordion-title collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-9"
                  >
                    <h6>How can I pay for my purchases?</h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-9"
                    className="collapse"
                    data-bs-parent="#accordion-faq-2"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. You can also use PayPal or financing options through our partners.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-product-item">
                  <a
                    href="#accordion-10"
                    className="accordion-title collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-10"
                  >
                    <h6>Can I save an item I like?</h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-10"
                    className="collapse"
                    data-bs-parent="#accordion-faq-2"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        Yes, you can save items to your wishlist by clicking the "Save" button on the product page. You can access your wishlist by logging into your account and visiting the "Wishlist" section.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="faqs-title">Care & Maintenance</h5>
              <ul
                className="accordion-product-wrap style-faqs"
                id="accordion-faq-3"
              >
                <li className="accordion-product-item">
                  <a
                    href="#accordion-11"
                    className="accordion-title collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-11"
                  >
                    <h6>
                      I cannot find my size or the colour I like. What should I
                      do?
                    </h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-11"
                    className="collapse"
                    data-bs-parent="#accordion-faq-3"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        The courier companies have adapted their procedures to
                        guarantee the safety of our employees and our community.
                        We thank you for your patience, as there may be some
                        delays to deliveries. We remind you that you can still
                        find us at Mango.com and on all our online channels. Our
                        customer services are still there for you, to answer any
                        questions you may have, although due to the current
                        situation, we are operating with longer waiting times.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-product-item">
                  <a
                    href="#accordion-12"
                    className="accordion-title current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-12"
                  >
                    <h6>
                      I have not received all the items in my order. What should
                      I do?
                    </h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-12"
                    className="collapse show"
                    data-bs-parent="#accordion-faq-2"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        The courier companies have adapted their procedures to
                        guarantee the safety of our employees and our community.
                        We thank you for your patience, as there may be some
                        delays to deliveries. We remind you that you can still
                        find us at Mango.com and on all our online channels. Our
                        customer services are still there for you, to answer any
                        questions you may have, although due to the current
                        situation, we are operating with longer waiting times.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-product-item">
                  <a
                    href="#accordion-13"
                    className="accordion-title collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-13"
                  >
                    <h6>
                      The items received are incorrect or are defective. What
                      should I do?
                    </h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-13"
                    className="collapse"
                    data-bs-parent="#accordion-faq-2"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        The courier companies have adapted their procedures to
                        guarantee the safety of our employees and our community.
                        We thank you for your patience, as there may be some
                        delays to deliveries. We remind you that you can still
                        find us at Mango.com and on all our online channels. Our
                        customer services are still there for you, to answer any
                        questions you may have, although due to the current
                        situation, we are operating with longer waiting times.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-product-item">
                  <a
                    href="#accordion-14"
                    className="accordion-title collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-14"
                  >
                    <h6>
                      Are the items included in the shopping basket reserved
                      automatically?
                    </h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-14"
                    className="collapse"
                    data-bs-parent="#accordion-faq-2"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        The courier companies have adapted their procedures to
                        guarantee the safety of our employees and our community.
                        We thank you for your patience, as there may be some
                        delays to deliveries. We remind you that you can still
                        find us at Mango.com and on all our online channels. Our
                        customer services are still there for you, to answer any
                        questions you may have, although due to the current
                        situation, we are operating with longer waiting times.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-product-item">
                  <a
                    href="#accordion-15"
                    className="accordion-title collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-15"
                  >
                    <h6>In which countries can I shop online?</h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-15"
                    className="collapse"
                    data-bs-parent="#accordion-faq-2"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        The courier companies have adapted their procedures to
                        guarantee the safety of our employees and our community.
                        We thank you for your patience, as there may be some
                        delays to deliveries. We remind you that you can still
                        find us at Mango.com and on all our online channels. Our
                        customer services are still there for you, to answer any
                        questions you may have, although due to the current
                        situation, we are operating with longer waiting times.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="ask-question sticky-top">
            <div className="ask-question-wrap">
              <h5 className="mb_4">Ask Your Question</h5>
              <p className="mb_20 text-secondary">
                Ask Anything, We're Here to Help
              </p>
              <form
                className="form-leave-comment"
                onSubmit={(e) => e.preventDefault()}
              >
                <fieldset className="mb_20">
                  <div className="text-caption-1 mb_8">Name</div>
                  <input
                    className=""
                    type="text"
                    placeholder="Your Name*"
                    name="text"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset className="mb_20">
                  <div className="text-caption-1 mb_8">
                    How can we help you?
                  </div>
                  <div className="tf-select">
                    <select className="">
                      <option>Exchanges &amp; Returns</option>
                      <option>Other</option>
                    </select>
                  </div>
                </fieldset>
                <fieldset className="mb_20">
                  <div className="text-caption-1 mb_8">Name</div>
                  <textarea
                    className=""
                    rows={4}
                    placeholder="Your Message*"
                    tabIndex={2}
                    aria-required="true"
                    required
                    defaultValue={""}
                  />
                </fieldset>
                <div className="button-submit">
                  <button className="btn-style-2 w-100" type="submit">
                    <span className="text text-button">Send Request</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
