"use client";
import Image from "next/image";
import Header from "./Header";

export default function PetDetails({ pet }: any) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* <Header/> */}
      <a href="/browse" className="text-orange-600 flex items-center mb-4 text-sm">
        <span className="mr-1 text-lg">←</span> Back to Browse Pets
      </a>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative">
          <Image
            src={pet.image}
            alt={pet.title}
            width={600}
            height={400}
            className="rounded-lg shadow"
          />
        </div>

        <div>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">{pet.title}</h1>
              <p className="text-gray-500">{pet.category}</p>
              <p className="text-sm text-gray-600 mt-1">🏠 {pet.shelter.name}</p>
              <div className="flex gap-4 mt-3 text-sm text-gray-600">
                <span>🐶 {pet.age}</span>
                <span>⚖️ {pet.weight}</span>
                <span>📏 {pet.size}</span>
                <span>{pet.gender === "Female" ? "♀️ Female" : "♂️ Male"}</span>
              </div>
            </div>
            <button className="border rounded-md p-2 hover:bg-gray-100">
              {/* Favorite Icon can go here */}
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg shadow mt-6 p-4">
            <p className="text-sm text-gray-500">Adoption Fee</p>
            <p className="text-2xl font-bold text-orange-600 mt-1">${pet.fee}</p>
          </div>

          <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md">
            Apply to Adopt
          </button>
        </div>
      </div>

      {/* About */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
          <h2 className="text-lg font-semibold mb-2">About {pet.title}</h2>
          <p className="text-sm text-gray-700 mb-4">{pet.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 text-sm">
            <div>
              <p className="font-semibold">Good with:</p>
              <ul className="list-disc pl-4">
                {pet.goodWith.map((g: string, i: number) => (
                  <li key={i} className="text-green-600">{g}</li>
                ))}
                {pet.notGoodWith.length > 0 &&
                  pet.notGoodWith.map((g: string, i: number) => (
                    <li key={i} className="text-red-500">{g}</li>
                  ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold">Care Details:</p>
              <p>
                Energy Level: <span className="font-medium">{pet.energyLevel}</span>
              </p>
              <p>
                Training: <span className="font-medium">{pet.training}</span>
              </p>
              <p>
                Special Needs: <span className="font-medium">{pet.specialNeeds}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Medical Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Medical Information</h2>
          <ul className="text-sm space-y-2">
            <li className="flex justify-between">
              <span>Vaccinated</span>
              <span className="bg-green-100 text-green-600 px-2 rounded-full text-xs">
                {pet.vaccinated ? "Yes" : "No"}
              </span>
            </li>
            <li className="flex justify-between">
              <span>Spayed/Neutered</span>
              <span className="bg-green-100 text-green-600 px-2 rounded-full text-xs">
                {pet.spayed ? "Yes" : "No"}
              </span>
            </li>
          </ul>
        </div>

        {/* Shelter Contact */}
        <div className="bg-white p-6 rounded-lg shadow md:col-span-3 md:flex md:justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-2">Shelter Contact</h2>
            <p className="text-sm text-gray-700">📞 {pet.shelter.phone}</p>
            <p className="text-sm text-gray-700">📧 {pet.shelter.email}</p>
            <p className="text-sm text-gray-700">📍 {pet.shelter.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
