"use client";

import { useState } from "react";

interface FilterProps {
  onSearch: (filters: { query: string; petType: string }) => void;
}

export default function SearchFilter({ onSearch }: FilterProps) {
  const [query, setQuery] = useState("");
  const [petType, setPetType] = useState("All Pets");

  const handleSearch = () => {
    onSearch({ query, petType });
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search by name or breed
              </label>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., Golden Retriever, Luna..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pet Type
              </label>
              <select
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option>All Pets</option>
                <option>Dogs</option>
                <option>Cats</option>
              </select>
            </div>

            <button
              onClick={handleSearch}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md transition"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
