// import Header from '@/components/general/Header'
// import React from 'react'

// export default function page() {
//   return (
//     <div>
//       <Header/>

//     </div>
//   )
// }

"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/general/Header";
// import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <Header />

      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about pet adoption, our platform, or need support?
            We're here to help you find your perfect furry companion.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Send us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                />
                <textarea
                  rows={10}
                  placeholder="Tell us how we can help you..."
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                ></textarea>
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Image
                        src="/icons/location-pin-orange.svg"
                        alt="Families"
                        width={30}
                        height={25}
                      />
                    </div>

                    <div>
                      <p className="font-medium">Address</p>
                      <p>123 Pet Love Street</p>
                      <p>Animal City, AC 12345</p>
                      <p>United States</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Image
                        src="/icons/call-blue.svg"
                        alt="Phone"
                        width={32}
                        height={30}
                      />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p>(555) 123-PAWS (7297)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Image
                        src="/icons/mail-green.svg"
                        alt="Families"
                        width={30}
                        height={25}
                      />
                    </div>

                    <div>
                      <p className="font-medium">Email</p>
                      <p>hello@pawconnect.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-full"><Image
                      src="/icons/time-pa.svg"
                      alt="Families"
                      width={30}
                      height={30}
                    /></div>
                    
                    <div>
                      <p className="font-medium">Support Hours</p>
                      <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                      <p>Saturday: 10:00 AM – 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Quick Help</h2>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <span className="font-semibold">For Adopters</span>:
                    Questions about the adoption process, pet care, or
                    application status.
                  </li>
                  <li>
                    <span className="font-semibold">For Shelters</span>: Need
                    help listing pets, managing applications, or technical
                    support.
                  </li>
                  <li>
                    <span className="font-semibold">Emergency</span>: For urgent
                    pet-related emergencies, please contact your local animal
                    control or veterinarian.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
