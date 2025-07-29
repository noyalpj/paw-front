"use client";
import Image from "next/image";
// import { Heart } from "lucide-react";

export default function PetDetails() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <a href="/browse" className="text-orange-600 flex items-center mb-4 text-sm">
        <span className="mr-1 text-lg">←</span> Back to Browse Pets
      </a>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative">
          <Image
            src="/images/luna.jpg"
            alt="Luna"
            width={600}
            height={400}
            className="rounded-lg shadow"
          />
          {/* <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
            Urgent
          </span> */}
        </div>

        <div>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">Luna</h1>
              <p className="text-gray-500">Golden Retriever</p>
              <p className="text-sm text-gray-600 mt-1">🏠 Happy Paws Shelter</p>
              <div className="flex gap-4 mt-3 text-sm text-gray-600">
                <span>🐶 2 years</span>
                <span>⚖️ 65 lbs</span>
                <span>📏 Large</span>
                <span>♀️ Female</span>
              </div>
            </div>
            <button className="border rounded-md p-2 hover:bg-gray-100">
              {/* <Heart className="w-5 h-5 text-red-500" /> */}
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg shadow mt-6 p-4">
            <p className="text-sm text-gray-500">Adoption Fee</p>
            <p className="text-2xl font-bold text-orange-600 mt-1">$150</p>
          </div>

          <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md">
            Apply to Adopt
          </button>
        </div>
      </div>

      {/* About */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
          <h2 className="text-lg font-semibold mb-2">About Luna</h2>
          <p className="text-sm text-gray-700 mb-4">
            Luna is a friendly and energetic dog who loves playing fetch and going on long walks.
            She's great with children and other dogs, making her the perfect family companion. Luna
            is house-trained and knows basic commands like sit, stay, and come.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 text-sm">
            <div>
              <p className="font-semibold">Good with:</p>
              <ul className="list-disc pl-4">
                <li className="text-green-600">Children</li>
                <li className="text-green-600">Dogs</li>
                <li className="text-red-500">Cats</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Care Details:</p>
              <p>Energy Level: <span className="font-medium">High</span></p>
              <p>Training: <span className="font-medium">Basic commands</span></p>
              <p>Special Needs: <span className="font-medium">None</span></p>
            </div>
          </div>
        </div>

        {/* Medical Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Medical Information</h2>
          <ul className="text-sm space-y-2">
            <li className="flex justify-between">
              <span>Vaccinated</span>
              <span className="bg-green-100 text-green-600 px-2 rounded-full text-xs">Yes</span>
            </li>
            <li className="flex justify-between">
              <span>Spayed/Neutered</span>
              <span className="bg-green-100 text-green-600 px-2 rounded-full text-xs">Yes</span>
            </li>
            {/* <li className="flex justify-between">
              <span>Microchipped</span>
              <span className="bg-green-100 text-green-600 px-2 rounded-full text-xs">Yes</span>
            </li> */}
          </ul>
        </div>

        {/* Shelter Contact */}
        <div className="bg-white p-6 rounded-lg shadow md:col-span-3 md:flex md:justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-2">Shelter Contact</h2>
            <p className="text-sm text-gray-700">📞 (555) 123-4567</p>
            <p className="text-sm text-gray-700">📧 adopt@happypaws.org</p>
            <p className="text-sm text-gray-700">📍 123 Pet Street, Animal City, AC 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
}
