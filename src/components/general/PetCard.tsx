"use client";
import Image from "next/image";

export default function PetCard() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 w-72 hover:">
      <div className="relative">
        <Image
          src="/images/dog-1.jpeg"
          alt="Luna"
          width={288}
          height={192}
          className="w-full h-48 object-cover"
        />
        
        <button className="absolute top-2 left-2 bg-white p-1 rounded-md shadow">
          <Image
            src="/icons/heart-logo.svg"
            alt="Favorite"
            width={20}
            height={20}
          />
        </button>
        
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded-md">
          Urgent
        </div>
      </div>


      <div className="p-4 space-y-1">
        <h2 className="font-semibold text-lg">Luna</h2>
        <p className="text-gray-600 text-sm">Golden Retriever • 2 years</p>

        {/* <div className="flex items-center text-sm text-gray-600 mt-1">
          <Image
            src="/icons/location.svg"
            alt="Shelter"
            width={16}
            height={16}
            className="mr-1"
          />
          Happy Paws Shelter
        </div> */}

        <p className="text-gray-700 text-sm mt-2 line-clamp-2">
          Luna is a friendly and energetic dog who loves playing fetch and going
          on long...
        </p>

        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-3 py-2 rounded-md">
            Adopt Me
          </button>
          <button className="flex-1 border border-orange-500 text-orange-600 text-sm font-medium px-3 py-2 rounded-md hover:bg-orange-50">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
