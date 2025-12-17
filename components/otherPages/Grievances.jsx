"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "introduction",
  "how-to-lodge",
  "grievance-redressal-process",
  "escalation-matrix",
  "response-time",
  "confidentiality"
];

const sections = [
  { id: 1, text: "Introduction", scroll: "introduction" },
  { id: 2, text: "How to Lodge a Grievance", scroll: "how-to-lodge" },
  { id: 3, text: "Grievance Redressal Process", scroll: "grievance-redressal-process" },
  { id: 4, text: "Escalation Matrix", scroll: "escalation-matrix" },
  { id: 5, text: "Response Time", scroll: "response-time" },
  { id: 6, text: "Confidentiality", scroll: "confidentiality" },
];

export default function Grievances() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Your grievance has been submitted. We will get back to you soon.');
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
            <h4 className="heading">Grievance Redressal</h4>
            <p className="text-muted mb-4">Last updated: December 9, 2025</p>

            <div className="terms-of-use-item item-scroll-target" id="introduction">
              <h5 className="terms-of-use-title">1. Introduction</h5>
              <div className="terms-of-use-content">
                <p>
                  At Curve & Comfy, we are committed to providing excellent customer service. 
                  This Grievance Redressal Policy outlines our approach to addressing and 
                  resolving any concerns or complaints you may have regarding our products or services.
                </p>
                <p>
                  We take all grievances seriously and aim to resolve them in a fair, 
                  transparent, and timely manner. This policy applies to all customers 
                  and users of our services.
                </p>
              </div>
            </div>

            <div className="terms-of-use-item item-scroll-target" id="how-to-lodge">
              <h5 className="terms-of-use-title">2. How to Lodge a Grievance</h5>
              <div className="terms-of-use-content">
                <p>You can lodge a grievance through any of the following channels:</p>
                <ul>
                  <li><strong>Email:</strong> grievances@curveandcomfy.com</li>
                  <li><strong>Phone:</strong> +91 XXXXXXXXXX (10:00 AM - 6:00 PM, Monday to Saturday)</li>
                  <li><strong>Registered Post:</strong> VIENA LIFESTYLE PRIVATE LIMITED, [Your Complete Address]</li>
                  <li><strong>Online Form:</strong> Fill out the form at the bottom of this page</li>
                </ul>
                <p className="mt-3">
                  Please provide the following details when lodging a grievance:
                </p>
                <ol>
                  <li>Your full name and contact information</li>
                  <li>Order number (if applicable)</li>
                  <li>Detailed description of the grievance</li>
                  <li>Supporting documents or evidence</li>
                </ol>
              </div>
            </div>

            <div className="terms-of-use-item item-scroll-target" id="grievance-redressal-process">
              <h5 className="terms-of-use-title">3. Grievance Redressal Process</h5>
              <div className="terms-of-use-content">
                <p>Our grievance redressal process consists of the following steps:</p>
                <ol>
                  <li><strong>Receipt of Grievance:</strong> We will acknowledge receipt of your grievance within 24 working hours.</li>
                  <li><strong>Review:</strong> Our team will review your grievance and may contact you for additional information if needed.</li>
                  <li><strong>Resolution:</strong> We will work towards resolving your grievance within 7 working days from the date of receipt.</li>
                  <li><strong>Communication:</strong> We will keep you informed about the status of your grievance throughout the process.</li>
                </ol>
              </div>
            </div>

            <div className="terms-of-use-item item-scroll-target" id="escalation-matrix">
              <h5 className="terms-of-use-title">4. Escalation Matrix</h5>
              <div className="terms-of-use-content">
                <p>If you are not satisfied with the resolution provided, you may escalate your concern as follows:</p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Level</th>
                        <th>Authority</th>
                        <th>Contact</th>
                        <th>Timeframe for Resolution</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Level 1</td>
                        <td>Customer Support</td>
                        <td>support@curveandcomfy.com</td>
                        <td>3 working days</td>
                      </tr>
                      <tr>
                        <td>Level 2</td>
                        <td>Grievance Officer</td>
                        <td>grievance.officer@curveandcomfy.com</td>
                        <td>5 working days</td>
                      </tr>
                      <tr>
                        <td>Level 3</td>
                        <td>Nodal Officer</td>
                        <td>nodal.officer@curveandcomfy.com</td>
                        <td>7 working days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="terms-of-use-item item-scroll-target" id="response-time">
              <h5 className="terms-of-use-title">5. Response Time</h5>
              <div className="terms-of-use-content">
                <p>We strive to address all grievances within the following timeframes:</p>
                <ul>
                  <li><strong>Initial Acknowledgment:</strong> Within 24 working hours</li>
                  <li><strong>Resolution of Simple Grievances:</strong> Within 3-5 working days</li>
                  <li><strong>Complex Grievances:</strong> Within 7-10 working days</li>
                </ul>
                <p className="mt-3">
                  If your grievance requires more time to resolve, we will inform you 
                  of the expected timeline for resolution.
                </p>
              </div>
            </div>

            <div className="terms-of-use-item item-scroll-target" id="confidentiality">
              <h5 className="terms-of-use-title">6. Confidentiality</h5>
              <div className="terms-of-use-content">
                <p>
                  All grievances and related information will be treated as confidential 
                  and will only be used for the purpose of resolving the grievance. 
                  We are committed to protecting your personal information in 
                  accordance with our Privacy Policy.
                </p>
              </div>
            </div>

            <div className="grievance-form mt-5">
              <h5 className="mb-4">Lodge a Grievance</h5>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input type="text" className="form-control" id="name" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input type="tel" className="form-control" id="phone" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="order" className="form-label">Order Number (if applicable)</label>
                    <input type="text" className="form-control" id="order" />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input type="text" className="form-control" id="subject" required />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="message" className="form-label">Grievance Details *</label>
                    <textarea className="form-control" id="message" rows="5" required></textarea>
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="file" className="form-label">Attach Supporting Documents (if any)</label>
                    <input type="file" className="form-control" id="file" multiple />
                    <div className="form-text">You can upload multiple files (max 5MB each)</div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit Grievance</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
