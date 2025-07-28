import Header from "@/components/general/Header";
import PetCard from "@/components/general/PetCard";
import SearchFilter from "@/components/general/SearchFilter";
import Wrapper from "@/components/general/Wrapper";
import React from "react";

const datas = [
  {
    id: 2,
    title: "Mittens",
    category: "Siamese",
    age: "1 years",
    description:
      "Mittens is a playful kitten who loves interactive toys and sunny windowsills.",
    image: "/images/cat-1.jpeg",
  },
  {
    id: 1,
    title: "Luna",
    category: "Golden Retriever",
    age: "2 years",
    description:
      "Luna is a friendly and energetic dog who loves playing fetch and going on long",
    image: "/images/dog-1.jpeg",
  },
  
  {
    id: 3,
    title: "Charlie",
    category: "Labrador Mix",
    age: "5 years",
    description:
      "Charlie is a loyal companion who's great with kids and other pets.",
    image: "/images/dog-2.jpeg",
  },
  {
    id: 5,
    title: "Max",
    category: "German Shepherd",
    age: "4 years",
    description:
      "Max is a protective and intelligent dog who would make an excellent guard dog.",
    image: "/images/max.jpeg",
  },
  {
    id: 4,
    title: "Mass",
    category: "dogerman",
    age: "3 years",
    description:
      "Mass is a friendly and energetic dog who loves playing fetch.",
    image: "/images/dog-blue.jpeg",
  },
];

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <Header />
      <div className="text-center mb-12 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Find Your Perfect Companion
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse through our wonderful pets waiting for their forever homes
        </p>
      </div>
      <SearchFilter />

      <Wrapper>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {datas.map((item) => (
              <PetCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
