"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/general/Header";
import Input from "../_components/Input";
import Image from "next/image";

export default function SignUp() {
  const [agree, setAgree] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <Header />

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 mt-7 pb-7">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Image
              className="mx-auto mb-4"
              src="/icons/heart-logo.svg"
              alt="Logo"
              width={55}
              height={60}
            />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Sign in to your PawConnect account</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
              Sign Up
            </h2>

            <form>
              <div className="grid grid-cols-2 gap-4">
                <Input label="First Name" name="firstName" placeholder="John" />
                <Input label="Last Name" name="lastName" placeholder="Doe" />
              </div>

              <Input
                label="Email Address"
                name="email"
                placeholder="your.email@example.com"
                type="email"
                className="mt-4"
              />

              <Input
                label="Password"
                name="password"
                placeholder="Create a password"
                type="password"
                className="mt-4"
              />

              <Input
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Confirm your password"
                type="password"
                className="mt-4"
              />

              <div className="flex items-start text-sm text-gray-700 mt-4 mb-6">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                  className="mt-1 mr-2"
                />
                <p>
                  I agree to the{" "}
                  <a className="text-orange-500 hover:underline" href="#">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a className="text-orange-500 hover:underline" href="#">
                    Privacy Policy
                  </a>
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-2.5 rounded-md hover:bg-orange-600 transition"
                disabled={!agree}
              >
                Create Account
              </button>
            </form>

            <p className="mt-6 text-sm text-center text-gray-700">
              Already have an account?{" "}
              <Link
                href="/auth/signin"
                className="text-orange-500 font-medium hover:underline"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
