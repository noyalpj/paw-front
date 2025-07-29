"use client";

import { useState } from "react";
import Header from "@/components/general/Header";
import PetCard from "@/components/general/PetCard";
import SearchFilter from "@/components/general/SearchFilter";
import Wrapper from "@/components/general/Wrapper";

const initialPets = [
  {
    id: 2,
    title: "Mittens",
    category: "Siamese",
    age: "1 years",
    petType: "Cats",
    description:
      "Mittens is a playful kitten who loves interactive toys and sunny windowsills.",
    image: "/images/cat-1.jpeg",
  },
  {
    id: 1,
    title: "Luna",
    category: "Golden Retriever",
    age: "2 years",
    petType: "Dogs",
    description:
      "Luna is a friendly and energetic dog who loves playing fetch and going on long walks.",
    image: "/images/dog-1.jpeg",
  },
  {
    id: 3,
    title: "Charlie",
    category: "Labrador Mix",
    age: "5 years",
    petType: "Dogs",
    description:
      "Charlie is a loyal companion who's great with kids and other pets.",
    image: "/images/dog-2.jpeg",
  },
  {
    id: 5,
    title: "Max",
    category: "German Shepherd",
    age: "4 years",
    petType: "Dogs",
    description:
      "Max is a protective and intelligent dog who would make an excellent guard dog.",
    image: "/images/max.jpeg",
  },
  {
    id: 4,
    title: "Mass",
    category: "Doberman",
    age: "3 years",
    petType: "Dogs",
    description:
      "Mass is a friendly and energetic dog who loves playing fetch.",
    image: "/images/dog-blue.jpeg",
  },
];

export default function Page() {
  const [pets, setPets] = useState(initialPets);

  // Handle search filtering
  const handleSearch = (filters: { query: string; petType: string }) => {
    const { query, petType } = filters;
    let filtered = [...initialPets];

    // Filter by pet type
    if (petType !== "All Pets") {
      filtered = filtered.filter((pet) => pet.petType === petType);
    }

    // Filter by query (name or breed)
    if (query.trim() !== "") {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(
        (pet) =>
          pet.title.toLowerCase().includes(lowerQuery) ||
          pet.category.toLowerCase().includes(lowerQuery)
      );
    }

    setPets(filtered);
  };

  return (
    <div className="pb-12 min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <Header />
      <div className="text-center mb-12 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Find Your Perfect Companion
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find your perfect companion from our extensive collection of pets
          looking for their forever homes.
        </p>
      </div>

      {/* Pass handleSearch here */}
      <SearchFilter onSearch={handleSearch} />

      <Wrapper>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {pets.length > 0 ? (
              pets.map((item) => <PetCard key={item.id} data={item} />)
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No pets found.
              </p>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
