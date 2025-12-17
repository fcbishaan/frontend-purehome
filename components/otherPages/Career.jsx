"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Career() {
  const [activeTab, setActiveTab] = useState("current");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null,
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Furniture Designer",
      type: "Full-time",
      location: "Mumbai, India",
      department: "Design",
      description: "We are looking for an experienced furniture designer to join our creative team.",
      requirements: [
        "5+ years of experience in furniture design",
        "Proficiency in 3D modeling software",
        "Strong portfolio of previous work",
        "Knowledge of materials and manufacturing processes"
      ]
    },
    {
      id: 2,
      title: "Production Manager",
      type: "Full-time",
      location: "Delhi, India",
      department: "Operations",
      description: "Oversee our production process and ensure efficient manufacturing operations.",
      requirements: [
        "7+ years in furniture manufacturing",
        "Strong leadership skills",
        "Experience with quality control",
        "Knowledge of lean manufacturing"
      ]
    },
    {
      id: 3,
      title: "Sales Executive",
      type: "Full-time",
      location: "Bangalore, India",
      department: "Sales",
      description: "Join our sales team and help us bring beautiful furniture to more homes.",
      requirements: [
        "3+ years in sales",
        "Excellent communication skills",
        "Passion for design and furniture",
        "Target-driven mindset"
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      message: "",
      resume: null,
    });
  };

  return (
    <section className=" career-main">
      {/* Hero Section */}
      <div className="tf-hero-banner style-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content text-center">
                <h1 className="title wow fadeInUp bottom-10px">Join Our Team</h1>
                <p className="sub-title wow fadeInUp">Build your career with PureChair and be part of creating beautiful spaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="tf-section why-choose-us style-1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tf-heading style-1 text-center ">
                <h2 className="title bottom-10px">Why Join Us</h2>
                <p className="sub-title ">We believe in creating an environment where talent thrives</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-box style-1 wow fadeInUp">
                <div className="icon">
                  <i className="icon-people"></i>
                </div>
                <h3>Great Team</h3>
                <p>Work with talented and passionate professionals in the furniture industry.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-box style-1 wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon">
                  <i className="icon-growth"></i>
                </div>
                <h3>Growth Opportunities</h3>
                <p>We invest in our employees' growth through training and development programs.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-box style-1 wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon">
                  <i className="icon-balance"></i>
                </div>
                <h3>Work-Life Balance</h3>
                <p>We believe in maintaining a healthy balance between work and personal life.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Openings */}
      <div className="tf-section job-openings style-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tf-heading style-1 text-center bottom-10px">
                <h2 className="title bottom-30px">Current Openings</h2>
                <p className="sub-title">Find your perfect position at PureChair</p>
              </div>
            </div>
            
            <div className="col-12">
              <div className="job-filters">
                <button 
                  className={`filter-btn ${activeTab === 'current' ? 'active' : ''}`}
                  onClick={() => setActiveTab('current')}
                >
                  Current Openings
                </button>
                <button 
                  className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveTab('all')}
                >
                  All Positions
                </button>
              </div>
              
              <div className="job-listings">
                {jobOpenings.map((job) => (
                  <div key={job.id} className="job-card">
                    <div className="job-header">
                      <h3>{job.title}</h3>
                      <span className="job-type">{job.type}</span>
                    </div>
                    <div className="job-meta">
                      <span><i className="icon-location"></i> {job.location}</span>
                      <span><i className="icon-department"></i> {job.department}</span>
                    </div>
                    <p className="job-description">{job.description}</p>
                    <h4>Requirements:</h4>
                    <ul className="job-requirements">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                    <button 
                      className="tf-button style-1"
                      onClick={() => document.getElementById('apply-now').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div id="apply-now" className="tf-section application-form style-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-container">
                <h2 className="title">Apply Now</h2>
                <p className="sub-title">Fill out the form and we'll get back to you soon</p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Position</option>
                      {jobOpenings.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Cover Letter (Optional)"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                    ></textarea>
                  </div>
                  
                  <div className="form-group file-upload">
                    <label htmlFor="resume">Upload Resume (PDF, DOC, DOCX)</label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <button type="submit" className="tf-button style-1 w-100">
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="contact-info">
                <h3>Contact Us</h3>
                <p>Have questions about careers at PureChair? Reach out to our HR team.</p>
                
                <div className="contact-method">
                  <i className="icon-email"></i>
                  <div>
                    <h4>Email Us</h4>
                    <a href="mailto:careers@purechair.com">careers@purechair.com</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <i className="icon-phone"></i>
                  <div>
                    <h4>Call Us</h4>
                    <a href="tel:+911234567890">+91 12345 67890</a>
                  </div>
                </div>
                
                <div className="office-location">
                  <h4>Our Office</h4>
                  <address>
                    123 Furniture Street<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}