"use client";
import Image from "next/image";

// PetCard.tsx
export default function PetCard({ data }: any) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 w-72   hover:shadow-xl transition-all duration-300 hover:-translate-y-1  hover:border-orange-200">
      <div className="relative">
        <Image
          src={data?.image}
          alt={data?.title || "Pet"}
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
      </div>

      <div className="p-4 space-y-1">
        <h2 className="font-semibold text-lg">{data?.title}</h2>
        <p className="text-gray-600 text-sm">
          {data?.category} • {data?.age}
        </p>

        <p className="text-gray-700 text-sm mt-2 line-clamp-2">
          {data?.description}
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
