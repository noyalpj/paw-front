"use client";

import { useParams } from "next/navigation";
import PetDetails from "@/components/general/PetDetails";

const pets = [
  {
    id: 1,
    title: "Luna",
    category: "Golden Retriever",
    age: "2 years",
    weight: "65 lbs",
    size: "Large",
    gender: "Female",
    fee: 150,
    description:
      "Luna is a friendly and energetic dog who loves playing fetch and going on long walks.",
    goodWith: ["Children", "Dogs"],
    notGoodWith: ["Cats"],
    energyLevel: "High",
    training: "Basic commands",
    specialNeeds: "None",
    vaccinated: true,
    spayed: true,
    image: "/images/dog-1.jpeg",
    shelter: {
      name: "Happy Paws Shelter",
      phone: "(555) 123-4567",
      email: "adopt@happypaws.org",
      address: "123 Pet Street, Animal City, AC 12345",
    },
  },
  {
    id: 2,
    title: "Mittens",
    category: "Siamese",
    age: "1 year",
    weight: "10 lbs",
    size: "Small",
    gender: "Female",
    fee: 80,
    description:
      "Mittens is a playful kitten who loves interactive toys and sunny windowsills.",
    goodWith: ["Children"],
    notGoodWith: [],
    energyLevel: "Medium",
    training: "Litter trained",
    specialNeeds: "None",
    vaccinated: true,
    spayed: true,
    image: "/images/cat-1.jpeg",
    shelter: {
      name: "Happy Paws Shelter",
      phone: "(555) 123-4567",
      email: "adopt@happypaws.org",
      address: "123 Pet Street, Animal City, AC 12345",
    },
  },
  {
    id: 3,
    title: "Charlie",
    category: "Labrador Mix",
    age: "5 year",
    weight: "70 lbs",
    size: "Large",
    gender: "Male",
    fee: 100,
    description:
      "Charlie is a loyal companion who's great with kids and other pets.",
    goodWith: ["Children", "Dogs"],
    notGoodWith: ["Berds"],
    energyLevel: "Medium",
    training: "Basic commands",
    specialNeeds: "None",
    vaccinated: true,
    spayed: true,
    image: "/images/dog-2.jpeg",
    shelter: {
      name: "Happy Paws Shelter",
      phone: "(555) 123-4567",
      email: "adopt@happypaws.org",
      address: "123 Pet Street, Animal City, AC 12345",
    },
  },
  {
    id: 4,
    title: "Max",
    category: "German Shepherd",
    age: "4 year",
    weight: "75 lbs",
    size: "Large",
    gender: "Male",
    fee: 180,
    description:
      "Max is a protective and intelligent dog who would make an excellent guard dog.",
    goodWith: ["Children", "Dogs"],
    notGoodWith: [],
    energyLevel: "High",
    training: "Basic commands",
    specialNeeds: "None",
    vaccinated: true,
    spayed: true,
    image: "/images/dog-blue.jpeg",
    shelter: {
      name: "Happy Paws Shelter",
      phone: "(555) 123-4567",
      email: "adopt@happypaws.org",
      address: "123 Pet Street, Animal City, AC 12345",
    },
  },
  {
    id: 5,
    title: "Mass",
    category: "Doberman",
    age: "3 years",
    weight: "65 lbs",
    size: "Large",
    gender: "Female",
    fee: 150,
    description:
      "Mass is a friendly and energetic dog who loves playing fetch.",
    goodWith: ["Children", "Dogs"],
    notGoodWith: [],
    energyLevel: "High",
    training: "Basic commands",
    specialNeeds: "None",
    vaccinated: true,
    spayed: true,
    image: "/images/max.jpeg",
    shelter: {
      name: "Happy Paws Shelter",
      phone: "(555) 123-4567",
      email: "adopt@happypaws.org",
      address: "123 Pet Street, Animal City, AC 12345",
    },
  },
];

export default function PetPage() {
  const params = useParams();
  const petId = Number(params?.id);
  const pet = pets.find((p) => p.id === petId);

  if (!pet) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <a
          href="/browse"
          className="text-orange-600 flex items-center mb-4 text-sm"
        >
          <span className="mr-1 text-lg">←</span> Back to Browse Pets
        </a>
        <h1 className="text-xl font-bold">Pet Not Found</h1>
      </div>
    );
  }

  return <PetDetails pet={pet} />;
}
