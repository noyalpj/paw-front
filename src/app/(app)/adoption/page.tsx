'use client';

import { useState } from 'react';

export default function AdoptionFormPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    housingType: '',
    ownership: '',
    landlordApproval: false,
    hasYard: false,
    yardFenced: false,
    currentPets: '',
    experience: '',
    schedule: '',
    reason: '',
    references: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
    //   [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted form:', formData);
    // TODO: POST to backend or API
  };

  return (
    <main className="max-w-3xl mx-auto py-10 px-6">
      <div className="bg-white shadow-md rounded-md p-6 border">
        <h2 className="text-lg font-semibold mb-6">Pet Adoption Application</h2>
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Personal Info */}
          <div>
            <h3 className="font-medium mb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="input" />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="input" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input" />
              <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="input" />
            </div>
          </div>

          {/* Housing Info */}
          <div>
            <h3 className="font-medium mb-2">Housing Information</h3>
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="input w-full" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="input" />
              <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="input" />
              <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} className="input" />
              <input type="text" name="housingType" placeholder="House, Apartment, Condo, etc." value={formData.housingType} onChange={handleChange} className="input" />
            </div>
            <input type="text" name="ownership" placeholder="Own/Rent" value={formData.ownership} onChange={handleChange} className="input w-full mt-2" />

            <div className="mt-3 space-y-2 text-sm">
              <label className="flex gap-2 items-center">
                <input type="checkbox" name="landlordApproval" checked={formData.landlordApproval} onChange={handleChange} />
                If renting, do you have landlord approval for pets?
              </label>
              <label className="flex gap-2 items-center">
                <input type="checkbox" name="hasYard" checked={formData.hasYard} onChange={handleChange} />
                Do you have a yard?
              </label>
              <label className="flex gap-2 items-center">
                <input type="checkbox" name="yardFenced" checked={formData.yardFenced} onChange={handleChange} />
                Is your yard fenced?
              </label>
            </div>
          </div>

          {/* Pet Experience */}
          <div>
            <h3 className="font-medium mb-2">Pet Experience</h3>
            <textarea
              name="currentPets"
              rows={2}
              placeholder="List any current pets, their ages, breeds, and how they get along with other animals"
              value={formData.currentPets}
              onChange={handleChange}
              className="textarea"
            />
            <textarea
              name="experience"
              rows={2}
              placeholder="Tell us about your previous experience caring for pets"
              value={formData.experience}
              onChange={handleChange}
              className="textarea"
            />
            <textarea
              name="schedule"
              rows={2}
              placeholder="Describe your typical daily schedule and how much time you can dedicate to a pet"
              value={formData.schedule}
              onChange={handleChange}
              className="textarea"
            />
            <textarea
              name="reason"
              rows={2}
              placeholder="Tell us what drew you to this particular pet and what you hope to provide"
              value={formData.reason}
              onChange={handleChange}
              className="textarea"
            />
            <textarea
              name="references"
              rows={2}
              placeholder="Please provide names and contact information for 2-3 references (veterinarian, previous landlord, etc.)"
              value={formData.references}
              onChange={handleChange}
              className="textarea"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              className="border border-orange-500 text-orange-600 px-4 py-2 rounded hover:bg-orange-50"
            >
              Back to Pet
            </button>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
