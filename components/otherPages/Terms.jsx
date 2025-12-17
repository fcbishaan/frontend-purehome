"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "introduction",
  "registration-and-account",
  "disclaimer",
  "site-terms",
  "risks",
];

const sections = [
  { id: 1, text: "Introduction", scroll: "introduction" },
  { id: 2, text: "Registration & Account", scroll: "registration-and-account" },
  { id: 3, text: "Disclaimer", scroll: "disclaimer" },
  { id: 4, text: "Site terms of use modifications", scroll: "site-terms" },
  { id: 5, text: "Risks", scroll: "risks" },
];

export default function Terms() {
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
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="terms-of-use-wrap">
          {/* LEFT SIDE NAVIGATION */}
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

          {/* RIGHT SIDE CONTENT */}
          <div className="right">
            <h4 className="heading">Terms & Conditions — Curve & Comfort</h4>
            <p className="text-muted mb-4">Last updated: December 9, 2025</p>

            {/* 1. INTRODUCTION */}
            <div className="terms-of-use-item item-scroll-target" id="introduction">
              <h5 className="terms-of-use-title">1. Introduction</h5>
              <div className="terms-of-use-content">
                <p>
                  Welcome to <strong>Curve & Comfort</strong>, an online platform offering
                  premium-quality furniture crafted for modern homes. These Terms and
                  Conditions (“Terms”) govern your use of our website, products, and
                  services.
                </p>
                <p>
                  By accessing or using Curve & Comfort, you agree to abide by these
                  Terms as well as our Privacy Policy. If you do not agree, please stop
                  using the website.
                </p>
                <p>
                  Curve & Comfort reserves the right to modify or update these Terms at
                  any time without prior notice. You are responsible for reviewing this
                  page periodically for changes.
                </p>
              </div>
            </div>

            {/* 2. REGISTRATION */}
            <div className="terms-of-use-item item-scroll-target" id="registration-and-account">
              <h5 className="terms-of-use-title">2. Registration & Account</h5>
              <div className="terms-of-use-content">
                <p>To place orders or access certain features, you may need to create an account. You agree to:</p>
                <ul>
                  <li>Provide accurate and complete registration details.</li>
                  <li>Keep your account login credentials secure.</li>
                  <li>Be responsible for all actions taken under your account.</li>
                </ul>
                <p>
                  Curve & Comfort is not liable for unauthorized access caused by your
                  failure to maintain account security.
                </p>
              </div>
            </div>

            {/* 3. DISCLAIMER */}
            <div className="terms-of-use-item item-scroll-target" id="disclaimer">
              <h5 className="terms-of-use-title">3. Disclaimer</h5>
              <div className="terms-of-use-content">
                <p>
                  Curve & Comfort strives to accurately display product images,
                  descriptions, dimensions, and finishes. However, actual product colors
                  and textures may slightly vary due to screen differences or lighting.
                </p>
                <p>
                  We do not guarantee uninterrupted or error-free website operation.
                  Product availability, prices, and features may change without prior
                  notice.
                </p>
                <p>
                  Any decisions made based on website content are at your own discretion
                  and risk.
                </p>
              </div>
            </div>

            {/* 4. SITE TERMS MODIFICATIONS */}
            <div className="terms-of-use-item item-scroll-target" id="site-terms">
              <h5 className="terms-of-use-title">4. Site Terms of Use Modifications</h5>
              <div className="terms-of-use-content">
                <p>
                  Curve & Comfort reserves the right to modify or replace any part of
                  these Terms as needed. Continued use of the website after changes
                  indicates acceptance of the new Terms.
                </p>
                <p>
                  Modifications may include updates to policies, new features, product
                  updates, pricing changes, or service improvements.
                </p>
              </div>
            </div>

            {/* 5. RISKS */}
            <div className="terms-of-use-item item-scroll-target" id="risks">
              <h5 className="terms-of-use-title">5. Risks</h5>
              <div className="terms-of-use-content">
                <p>
                  While Curve & Comfort ensures safe packaging and trusted delivery
                  partners, shipping furniture involves certain risks, including delays,
                  transit damage, and logistical issues.
                </p>
                <p>
                  Customers must inspect delivered items upon arrival and report visible
                  damages within 24 hours for replacements or support.
                </p>
                <p>
                  Curve & Comfort is not responsible for damages caused by improper
                  self-assembly, rough handling, or unauthorized modifications.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
