"use client";

import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center mb-8">
        <div className="bg-black rounded-2xl p-4 mb-4">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="12" fill="black"/><path d="M12 12c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 2c-2.67 0-8 1.336-8 4v2h16v-2c0-2.664-5.33-4-8-4z" fill="#fff"/></svg>
        </div>
        <h1 className="text-3xl font-semibold mb-2">Welcome</h1>
        <p className="text-gray-500">Sign in to continue to your account</p>
      </div>
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
                aria-label="Show password"
              >
                {showPassword ? (
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="#888"/><circle cx="12" cy="12" r="2.5" fill="#888"/></svg>
                ) : (
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M1 1l22 22M4.22 4.22A9.77 9.77 0 0 0 2 12s3 7 10 7c2.03 0 3.77-.38 5.22-1.03M9.9 9.9A3 3 0 0 0 12 15a3 3 0 0 0 2.1-.9M7.05 7.05A7.007 7.007 0 0 1 12 5c7 0 10 7 10 7a9.77 9.77 0 0 1-1.67 2.88" stroke="#888" strokeWidth="2" strokeLinecap="round"/></svg>
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox rounded" /> Remember me
            </label>
            <a href="#" className="text-gray-500 hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-900 transition">Sign In <span className="ml-1">→</span></button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="mx-3 text-gray-400 text-sm">or continue with</span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>
        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 hover:bg-gray-50 transition">
            <FaGoogle className="text-lg" /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 hover:bg-gray-50 transition">
            <FaFacebookF className="text-lg" /> Facebook
          </button>
        </div>
        <div className="text-center mt-6 text-sm">
          Don&apos;t have an account? <a href="#" className="font-semibold hover:underline">Create account</a>
        </div>
      </div>
      <footer className="mt-8 text-gray-400 text-xs">© 2025 Your Company. All rights reserved.</footer>
    </div>
  );
} 