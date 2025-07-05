import Header from "@/components/general/Header";
import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-16">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About PawConnect
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to connect loving families with pets in need of
            forever homes. Every pet deserves a chance at happiness, and every
            family deserves the joy of a furry companion.
          </p>
        </div>

        <div className="mb-12 shadow-lg p-[25px] bg-white rounded-lg">
          <h2 className="text-2xl text-center text-gray-900 mb-4 font-semibold leading-none tracking-tight">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            PawConnect bridges the gap between animal shelters and potential pet
            parents by providing a user-friendly platform that makes pet
            adoption accessible, transparent, and efficient. We believe that
            every animal deserves a loving home and every family deserves to
            find their perfect companion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Image
                src="/icons/heart-logo.svg"
                alt="Adopted"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">5,000+</h3>
            <p className="text-gray-600">Pets Adopted</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Image
                src="/icons/home-green.svg"
                alt="Families"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">15,000+</h3>
            <p className="text-gray-600">Happy Families</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Image
                src="/icons/badge-purple.svg"
                alt="Service"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">5</h3>
            <p className="text-gray-600">Years of Service</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                PawConnect was founded in 2019 by a team of animal lovers who
                recognized the challenges faced by both shelters and prospective
                pet parents in the adoption process.
              </p>
              <p>
                Traditional adoption methods often involved lengthy paperwork,
                multiple visits, and limited visibility into available pets. We
                set out to create a modern solution that would streamline this
                process while ensuring the best matches between pets and
                families.
              </p>
              <p>
                Today, we're proud to be the leading platform connecting
                shelters across the country with loving families, making pet
                adoption more accessible than ever before.
              </p>
            </div>
          </div>
          <div>
            <Image
              className="rounded-lg shadow-lg w-full h-80 object-cover"
              src="/images/dog-blue.jpeg"
              alt="A dog biting pillow"
              width={600}
              height={320}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
