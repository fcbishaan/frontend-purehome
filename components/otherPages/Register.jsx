"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleChanges = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Single button: Register me and send OTP
  const handleRegisterAndSendOtp = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      // Save user details temporarily in localStorage
      localStorage.setItem(
        "pendingUser",
        JSON.stringify({
          name: form.name,
          password: form.password,
          confirmPassword: form.confirmPassword,
          email: form.email,
        })
      );

      // Send OTP to backend (only email)
      const res = await fetch(`${API_BASE_URL}/auth/email/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send OTP.");

      alert("OTP sent successfully! Please check your email.");
      setOtpSent(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert(error.message || "Error sending OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP and register the user
  const handleVerifyAndRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const pendingUser = JSON.parse(localStorage.getItem("pendingUser"));
      if (!pendingUser) {
        alert("Session expired. Please fill the form again.");
        setOtpSent(false);
        return;
      }

      const res = await fetch(`${API_BASE_URL}/auth/email/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name: pendingUser.name,
          email: pendingUser.email,
          password: pendingUser.password,
          confirmPassword: pendingUser.confirmPassword,
          code: otp,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed.");

      alert("Registration successful! Please log in.");
      localStorage.removeItem("pendingUser");
      setOtpSent(false);
      setOtp("");
      setForm({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="login-wrap">
          <div className="left">
            <div className="heading">
              <h4>Register</h4>
            </div>

            <form
              onSubmit={
                otpSent ? handleVerifyAndRegister : handleRegisterAndSendOtp
              }
              className="form-login"
            >
              {/* Name */}
              <fieldset className="mb_20">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name*"
                  required
                  value={form.name}
                  onChange={handleChanges}
                  disabled={otpSent}

                />
              </fieldset>

              {/* Email */}
              <fieldset className="mb_20">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address*"
                  required
                  value={form.email}
                  onChange={handleChanges}
                  disabled={otpSent}
                />
              </fieldset>

              {/* Password */}
              <fieldset className="mb_20">
                <input
                  type="password"
                  name="password"
                  placeholder="Password*"
                  required
                  value={form.password}
                  onChange={handleChanges}
                  disabled={otpSent}
                />
              </fieldset>

              {/* Confirm Password */}
              <fieldset className="mb_20">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password*"
                  required
                  value={form.confirmPassword}
                  onChange={handleChanges}
                  disabled={otpSent}
                />
              </fieldset>

              {/* OTP Input */}
              {otpSent && (
                <fieldset className="mb_20">
                  <input
                    type="text"
                    placeholder="Enter OTP*"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </fieldset>
              )}

              <div className="button-submit">
                <button
                  type="submit"
                  className="tf-btn btn-fill text text-button"
                  disabled={loading}
                  
                >
                  <span className="text text-button">
                  {loading
                    ? "Please wait..."
                    : otpSent
                    ? "Verify OTP"
                    : "Register me and send OTP"}
                    </span>
                </button>
              </div>
            </form>
          </div>

          <div className="right">
            <h4 className="mb_8">Already have an account?</h4>
            <p className="text-secondary">
              Welcome back! Sign in to access your account.
            </p>
            <Link href={`/login`} className="tf-btn btn-fill">
              <span className="text text-button">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
