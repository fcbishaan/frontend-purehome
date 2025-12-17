  "use client";
  import React, { useState } from "react";
  import Link from "next/link";
  import { useRouter } from "next/navigation";
  import { useAuth } from "@/context/AuthContext";
  import axios from "axios";

  axios.defaults.withCredentials = true;
  //axios.defaults.headers.common['pragma'] = 'no-cache';
 // axios.defaults.headers.common['cache-control'] = 'no-cache';
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const MessageAlert = ({ type, text }) => {
    if (!text) return null;
    const baseClasses = "p-3 mb-4 rounded-lg text-sm";
    const typeClasses =
      type === "error"
        ? "bg-red-100 text-red-800 border border-red-200"
        : "bg-green-100 text-green-800 border border-green-200";

    return (
      <div className={`${baseClasses} ${typeClasses}`} role="alert">
        {text}
      </div>
    );
  };

  export default function Login() {
    const router = useRouter();
    const { setUser, fetchProfile } = useAuth();

    const [passwordType, setPasswordType] = useState("password");
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ email: "", password: "" });
    const [message, setMessage] = useState({ type: null, text: "" });

    const handleChanges = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
      e.preventDefault();
      setMessage({ type: null, text: "" });
      setLoading(true);
    
      try {
        await axios.post(
          `${API_BASE_URL}/auth/email-password/login`,
          {
            email: form.email,
            password: form.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
          //    'pragma': 'no-cache',
           //   'cache-control': 'no-cache',
              
            },
          }
        );
    
        // 🔥 IMPORTANT: fetch full user profile using cookie
        await fetchProfile();
    
        setMessage({
          type: "success",
          text: "Login successful! Redirecting...",
        });
    
        // ✅ Soft navigation
        router.push("/home-furniture");
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          "Login failed. Please try again.";
    
        setMessage({
          type: "error",
          text: errorMessage,
        });
      } finally {
        setLoading(false);
      }
    };
    

    const togglePassword = () => {
      setPasswordType((prev) => (prev === "password" ? "text" : "password"));
    };

    return (
      <section className="flat-spacing">
        <div className="container">
          <div className="login-wrap">
            <div className="left">
              <div className="heading">
                <h4>Login</h4>
              </div>

              <MessageAlert type={message.type} text={message.text} />

              <form onSubmit={handleLogin} className="form-login form-has-password">
                <div className="wrap">
                  <fieldset>
                    <input
                      type="email"
                      placeholder="Username or email address*"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChanges}
                    />
                  </fieldset>

                  <fieldset className="position-relative password-item">
                    <input
                      className="input-password"
                      type={passwordType}
                      placeholder="Password*"
                      name="password"
                      required
                      value={form.password}
                      onChange={handleChanges}
                    />
                    <span
                      className={`toggle-password ${
                        !(passwordType === "text") ? "unshow" : ""
                      }`}
                      onClick={togglePassword}
                    >
                      <i
                        className={`icon-eye-${
                          !(passwordType === "text") ? "hide" : "show"
                        }-line`}
                      />
                    </span>
                  </fieldset>

                  <div className="d-flex align-items-center justify-content-between">
                    <div className="tf-cart-checkbox">
                      <div className="tf-checkbox-wrapp">
                        <input
                          defaultChecked
                          type="checkbox"
                          id="login-form_agree"
                          name="agree_checkbox"
                        />
                        <div>
                          <i className="icon-check" />
                        </div>
                      </div>
                      <label htmlFor="login-form_agree"> Remember me </label>
                    </div>
                    <Link
                      href={`/forget-password`}
                      className="font-2 text-button forget-password link"
                    >
                      Forgot Your Password?
                    </Link>
                  </div>
                </div>

                <div className="button-submit">
                  <button
                    className="tf-btn btn-fill"
                    type="submit"
                    disabled={loading || message.type === "success"}
                  >
                    <span className="text text-button">
                      {loading ? "Logging In..." : "Login"}
                    </span>
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
