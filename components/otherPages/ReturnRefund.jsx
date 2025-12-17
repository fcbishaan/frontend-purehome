"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "introduction",
  "return-eligibility",
  "refund-process",
  "exchanges",
  "damaged-or-defective-items",
  "return-shipping"
];

const sections = [
  { id: 1, text: "Introduction", scroll: "introduction" },
  { id: 2, text: "Return Eligibility", scroll: "return-eligibility" },
  { id: 3, text: "Refund Process", scroll: "refund-process" },
  { id: 4, text: "Exchanges", scroll: "exchanges" },
  { id: 5, text: "Damaged or Defective Items", scroll: "damaged-or-defective-items" },
  { id: 6, text: "Return Shipping", scroll: "return-shipping" },
];

export default function ReturnRefund() {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  const handleClick = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="terms-of-use-wrap">
          <div className="left sticky-top">
            {sections.map(({ id, text, scroll }) => (
              <h6
                key={id}
                onClick={() => handleClick(scroll)}
                className={`btn-scroll-target ${
                  activeSection === scroll ? "active" : ""
                }`}
              >
                {id}. {text}
              </h6>
            ))}
          </div>
          <div className="right">
            <h4 className="heading">Return & Refund Policy</h4>
            
            <div className="terms-of-use-item item-scroll-target" id="introduction">
              <h5 className="terms-of-use-title">1. Introduction</h5>
              <div className="terms-of-use-content">
                <p>
                  At Curve & Comfy, we want you to be completely satisfied with your purchase. 
                  If you're not happy with your item, we're here to help with our straightforward 
                  return and refund policy. Please read the following information carefully 
                  to understand our policies and procedures.
                </p>
              </div>
            </div>

            <div className="terms-of-use-item item-scroll-target" id="return-eligibility">
              <h5 className="terms-of-use-title">2. Return Eligibility</h5>
              <div className="terms-of-use-content">
                <p>To be eligible for a return, your item must be:</p>
                <ul>
                  <li>In its original condition (unused, unwashed, with all tags attached)</li>
                  <li>In the original packaging</li>
                  <li>Accompanied by the original receipt or proof of purchase</li>
                  <li>Returned within 30 days of the delivery date</li>
                </ul>
                <p className="mt-3">
                  <strong>Note:</strong> Custom or made-to-order furniture, clearance items, and final sale items 
                  are not eligible for return unless they arrive damaged or defective.
                </p>
              </div>
            </div>

            <div className="terms-of-use-item item-scroll-target" id="refund-process">
              <h5 className="terms-of-use-title">3. Refund Process</h5>
              <div className="terms-of-use-content">
                <p>Once we receive your return, we will inspect it and notify you that we've received your returned item. We will also notify you of the approval or rejection of your refund.</p>
                <p>If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 7-10 business days.</p>
                <p>Please note that shipping costs are non-refundable. If you received free shipping on your original order, the cost of return shipping will be deducted from your refund.</p>
              </div>
            </div>

            <div className="terms-of-use-item item-scroll-target" id="exchanges">
              <h5 className="terms-of-use-title">4. Exchanges</h5>
              <div className="terms-of-use-content">
                <p>We are happy to exchange items for a different size or color, subject to availability. To request an exchange:</p>
                <ol>
                  <li>Contact our customer service team to check item availability</li>
                  <li>Return the original item following our return process</li>
                  <li>Once we receive your return, we'll ship the replacement item</li>
                </ol>
                <p className="mt-3">
                  <strong>Note:</strong> You will be responsible for the cost of return shipping for exchanges, 
                  and we will cover the cost of shipping the replacement item to you.
                </p>
              </div>
            </div>

            <div className="terms-of-use-item item-scroll-target" id="damaged-or-defective-items">
              <h5 className="terms-of-use-title">5. Damaged or Defective Items</h5>
              <div className="terms-of-use-content">
                <p>If you receive a damaged or defective item, please contact us immediately at support@curveandcomfy.com with your order number and photos of the damage. We will work with you to resolve the issue as quickly as possible.</p>
                <p>For damaged or defective items, we will cover all return shipping costs and provide a full refund or replacement at no additional charge.</p>
              </div>
            </div>

            <div className="terms-of-use-item item-scroll-target" id="return-shipping">
              <h5 className="terms-of-use-title">6. Return Shipping</h5>
              <div className="terms-of-use-content">
                <p>To return an item, please follow these steps:</p>
                <ol>
                  <li>Contact our customer service team to initiate a return and receive a Return Authorization (RA) number</li>
                  <li>Package the item securely in its original packaging</li>
                  <li>Include the original packing slip or a copy of your order confirmation</li>
                  <li>Clearly mark the RA number on the outside of the package</li>
                  <li>Ship the package to the address provided by our customer service team</li>
                </ol>
                <p className="mt-3">
                  <strong>Important:</strong> We recommend using a trackable shipping service and purchasing shipping insurance, 
                  as we cannot be responsible for lost or damaged return shipments.
                </p>
              </div>
            </div>

            <div className="terms-of-use-item">
              <div className="terms-of-use-content">
                <p className="text-center mt-5">
                  If you have any questions about our return and refund policy, please don't hesitate to 
                  <a href="/contact" className="text-primary"> contact us</a>.
                </p>
                <p className="text-center mb-0">
                  <small>Last updated: December 9, 2025</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
