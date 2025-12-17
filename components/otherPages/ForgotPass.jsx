"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ForgotPass() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleForgotPass = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    setLoading(true);
    try {
     const res = await fetch(`${API_BASE_URL}/auth/email-forgot/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setOtpSent(true);
        setMessage(data.message || "OTP sent successfully. Please check your email.");
      } else {
        setError(data.message || "Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!otp || !newPassword || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);
    try {
       const res = await fetch(`${API_BASE_URL}/auth/email-forgot/verify-otp`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: otp,
          password: newPassword,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Password reset successful! Redirecting to login...");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        setError(data.message || "Failed to reset password. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Network error. Please try again.");
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
              <h4 className="mb_8">{otpSent ? 'Reset Your Password' : 'Forgot Password'}</h4>
              <p>{otpSent ? 'Enter the OTP sent to your email and set a new password' : 'Enter your email to receive a password reset OTP'}</p>
            </div>
            
            <form onSubmit={otpSent ? handlePasswordReset : handleForgotPass} className="form-login">
              {!otpSent ? (
                <div className="wrap">
                  <fieldset className="mb_20">
                    <input
                      className="w-full p-3 border rounded-md"
                      type="email"
                      placeholder="Email address*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      required
                    />
                  </fieldset>
                </div>
              ) : (
                <div className="space-y-4">
                  <fieldset className="mb_20">
                    <input
                      className="w-full p-3 border rounded-md"
                      type="text"
                      placeholder="Enter OTP*"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      disabled={loading}
                      required
                    />
                  </fieldset>
                  
                  <fieldset className="mb_20 relative">
                    <input
                      className="w-full p-3 border rounded-md pr-10"
                      type={showPassword ? "text" : "password"}
                      placeholder="New Password*"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      disabled={loading}
                      minLength={6}
                      required
                    />
                    
                  </fieldset>
                  
                  <fieldset className="mb_20">
                    <input
                      className="w-full p-3 border rounded-md"
                      type="password"
                      placeholder="Confirm New Password*"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      disabled={loading}
                      required
                    />
                  </fieldset>
                </div>
              )}
              
              {(error || message) && (
                <div className={`mb-4 p-3 rounded-md ${error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {error || message}
                </div>
              )}
              
              <div className="button-submit">
                <button 
                  className="tf-btn btn-fill w-full" 
                  type="submit" 
                  disabled={loading}
                >
                  <span className="text text-button">
                    {loading ? 'Processing...' : otpSent ? 'Reset Password' : 'Send OTP'}
                  </span>
                </button>
              </div>
              
              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={() => otpSent ? setOtpSent(false) : router.push('/login')}
                  className="text text-button"
                >
                  {otpSent ? 'Back to Email' : 'Back to Login'}
                </button>
              </div>
            </form>
          </div>
          
          <div className="right">
            <h4 className="mb_8">New Customer</h4>
            <p className="text-secondary">
              Be part of our growing family of new customers! Join us today and
              unlock a world of exclusive benefits, offers, and personalized
              experiences.
            </p>
            <Link href={`/register`} className="tf-btn btn-fill">
              <span className="text text-button">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
