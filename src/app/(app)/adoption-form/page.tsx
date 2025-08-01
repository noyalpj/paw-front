// 'use client';

// import Header from '@/components/general/Header';
// import { useState } from 'react';
// import { useSearchParams } from "next/navigation";

// export default function AdoptionFormPage() {

//   const searchParams = useSearchParams();
//   const petId = searchParams.get("petId");

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     zip: '',
//     housingType: '',
//     ownership: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     // const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//     //   [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Submitted form:', formData);
//     // TODO: POST to backend or API
//   };

//   return (
//     <div className='min-h-screen bg-gradient-to-br from-orange-50 to-blue-50'>
//       <Header/>
//       <div className="text-center mb-5 mt-12">
//         <h2 className="text-3xl font-bold text-gray-900 mb-4">
//           Adoption Application
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Help us find the perfect match for you and your new companion
//         </p>
//       </div>
//     <div className="max-w-3xl mx-auto py-10 px-6">

//       <div className="bg-white shadow-md rounded-md p-6 ">
//         {/* <h2 className="text-lg font-semibold mb-6">Pet Adoption Application</h2> */}
//         <h2 className="text-2xl font-bold text-gray-700 mb-6">Pet Adoption Application</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">

//           {/* Personal Info */}
//           <div>
//             <h3 className="font-medium mb-2">Personal Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="input rounded border border-gray-400 p-1"  />
//               <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="input rounded border border-gray-400 p-1"  />
//               <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input rounded border border-gray-400 p-1"  />
//               <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="input rounded border border-gray-400 p-1"  /> */}
//               <input type="text" name="firstName" placeholder="First Name" className="input rounded border border-gray-400 p-1" />
//               <input type="text" name="lastName" placeholder="Last Name" className="input rounded border border-gray-400 p-1" />
//               <input type="email" name="email" placeholder="Email" className="input rounded border border-gray-400 p-1" />
//               <input type="text" name="phone" placeholder="Phone Number" className="input rounded border border-gray-400 p-1" />
//             </div>
//           </div>

//           {/* Housing Info */}
//           <div>
//             <h3 className="font-medium mb-2">Housing Information</h3>
//             {/* <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="input w-full rounded border border-gray-400 p-1" /> */}
//             <input type="text" name="address" placeholder="Address"className="input w-full rounded border border-gray-400 p-1" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
//               {/* <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="input rounded border border-gray-400 p-1" />
//               <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="input rounded border border-gray-400 p-1" />
//               <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} className="input rounded border border-gray-400 p-1" />
//               <input type="text" name="housingType" placeholder="House, Apartment, etc." value={formData.housingType} onChange={handleChange} className="input rounded border border-gray-400 p-1" /> */}

//               <input type="text" name="city" placeholder="City" className="input rounded border border-gray-400 p-1" />
//               <input type="text" name="state" placeholder="State" className="input rounded border border-gray-400 p-1" />
//               <input type="text" name="zip" placeholder="Zip Code" className="input rounded border border-gray-400 p-1" />
//               <input type="text" name="housingType" placeholder="House, Apartment, etc." className="input rounded border border-gray-400 p-1" />
//             </div>
//             {/* <input type="text" name="ownership" placeholder="Own/Rent" value={formData.ownership} onChange={handleChange} className="input w-full mt-2 rounded border border-gray-400 p-1" /> */}
//             <input type="text" name="ownership" placeholder="Own/Rent" className="input w-full mt-2 rounded border border-gray-400 p-1" />

//             <div className="mt-3 space-y-2 text-sm">
//               <label className="flex gap-2 items-center">
//                 {/* <input type="checkbox" name="landlordApproval" checked={formData.landlordApproval} onChange={handleChange} /> */}
//                 <input type="checkbox" name="landlordApproval" />
//                 If renting, do you have landlord approval for pets?
//               </label>
//               <label className="flex gap-2 items-center">
//                 {/* <input type="checkbox" name="hasYard" checked={formData.hasYard} onChange={handleChange} /> */}
//                 <input type="checkbox" name="hasYard" />
//                 Do you have a yard?
//               </label>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-between pt-4">
//             <button
//               type="button"
//               className="border border-orange-500 text-orange-600 px-4 py-2 rounded hover:bg-orange-50"
//             >
//               Back to Pet
//             </button>
//             <button
//               type="submit"
//               className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
//             >
//               Submit Application
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// }

// "use client";

// import Header from "@/components/general/Header";
// import { useState } from "react";
// import { useSearchParams } from "next/navigation";

// export default function AdoptionFormPage() {
//   const searchParams = useSearchParams();
//   const petId = searchParams.get("petId");

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     housingType: "",
//     ownership: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Pet ID:", petId);
//     console.log("Submitted form:", formData);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
//       <Header />
//       <div className="text-center mb-5 mt-12">
//         <h2 className="text-3xl font-bold text-gray-900 mb-4">
//           Adoption Application
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Help us find the perfect match for you and your new companion
//         </p>
//         {petId && (
//           <p className="text-orange-600 font-medium">For Pet ID: {petId}</p>
//         )}
//       </div>
//       <div className="max-w-3xl mx-auto py-10 px-6">

//       <div className="bg-white shadow-md rounded-md p-6 ">
//         {/* <h2 className="text-lg font-semibold mb-6">Pet Adoption Application</h2> */}
//         <h2 className="text-2xl font-bold text-gray-700 mb-6">Pet Adoption Application</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">

//           {/* Personal Info */}
//           <div>
//             <h3 className="font-medium mb-2">Personal Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="input rounded border border-gray-400 p-1"  />
//               <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="input rounded border border-gray-400 p-1"  />
//               <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input rounded border border-gray-400 p-1"  />
//               <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="input rounded border border-gray-400 p-1"  /> */}
//               <input type="text" name="firstName" placeholder="First Name" className="input rounded border border-gray-400 p-1" />
//               <input type="text" name="lastName" placeholder="Last Name" className="input rounded border border-gray-400 p-1" />
//               <input type="email" name="email" placeholder="Email" className="input rounded border border-gray-400 p-1" />
//               <input type="text" name="phone" placeholder="Phone Number" className="input rounded border border-gray-400 p-1" />
//             </div>
//           </div>

//           {/* Housing Info */}
//           <div>
//             <h3 className="font-medium mb-2">Housing Information</h3>
//             {/* <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="input w-full rounded border border-gray-400 p-1" /> */}
//             <input type="text" name="address" placeholder="Address"className="input w-full rounded border border-gray-400 p-1" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
//               {/* <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="input rounded border border-gray-400 p-1" />
//               <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="input rounded border border-gray-400 p-1" />
//               <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} className="input rounded border border-gray-400 p-1" />
//               <input type="text" name="housingType" placeholder="House, Apartment, etc." value={formData.housingType} onChange={handleChange} className="input rounded border border-gray-400 p-1" /> */}

//               <input type="text" name="city" placeholder="City" className="input rounded border border-gray-400 p-1" />
//               <input type="text" name="state" placeholder="State" className="input rounded border border-gray-400 p-1" />
//               <input type="text" name="zip" placeholder="Zip Code" className="input rounded border border-gray-400 p-1" />
//               <input type="text" name="housingType" placeholder="House, Apartment, etc." className="input rounded border border-gray-400 p-1" />
//             </div>
//             {/* <input type="text" name="ownership" placeholder="Own/Rent" value={formData.ownership} onChange={handleChange} className="input w-full mt-2 rounded border border-gray-400 p-1" /> */}
//             <input type="text" name="ownership" placeholder="Own/Rent" className="input w-full mt-2 rounded border border-gray-400 p-1" />

//             <div className="mt-3 space-y-2 text-sm">
//               <label className="flex gap-2 items-center">
//                 {/* <input type="checkbox" name="landlordApproval" checked={formData.landlordApproval} onChange={handleChange} /> */}
//                 <input type="checkbox" name="landlordApproval" />
//                 If renting, do you have landlord approval for pets?
//               </label>
//               <label className="flex gap-2 items-center">
//                 {/* <input type="checkbox" name="hasYard" checked={formData.hasYard} onChange={handleChange} /> */}
//                 <input type="checkbox" name="hasYard" />
//                 Do you have a yard?
//               </label>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-between pt-4">
//             <a href="/PetDetails">
//             <button
//               type="button"
//               className="border border-orange-500 text-orange-600 px-4 py-2 rounded hover:bg-orange-50"
//             >
//               Back to Pet
//             </button>
//             </a>
//             <button
//               type="submit"
//               className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
//             >
//               Submit Application
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// }



"use client";

import Header from "@/components/general/Header";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function AdoptionFormPage() {
  const searchParams = useSearchParams();
  const petId = searchParams.get("petId");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    housingType: "",
    ownership: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pet ID:", petId);
    console.log("Submitted form:", formData);

    // Show success popup
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <Header />
      <div className="text-center mb-5 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Adoption Application
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Help us find the perfect match for you and your new companion
        </p>
        {petId && (
          <p className="text-orange-600 font-medium">For Pet ID: {petId}</p>
        )}
      </div>
      <div className="max-w-3xl mx-auto py-10 px-6">
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">
            Pet Adoption Application
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div>
              <h3 className="font-medium mb-2">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="input rounded border border-gray-400 p-1"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="input rounded border border-gray-400 p-1"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input rounded border border-gray-400 p-1"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="input rounded border border-gray-400 p-1"
                />
              </div>
            </div>

            {/* Housing Info */}
            <div>
              <h3 className="font-medium mb-2">Housing Information</h3>
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input w-full rounded border border-gray-400 p-1"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="input rounded border border-gray-400 p-1"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  className="input rounded border border-gray-400 p-1"
                />
                <input
                  type="text"
                  name="zip"
                  placeholder="Zip Code"
                  className="input rounded border border-gray-400 p-1"
                />
                <input
                  type="text"
                  name="housingType"
                  placeholder="House, Apartment, etc."
                  className="input rounded border border-gray-400 p-1"
                />
              </div>
              <input
                type="text"
                name="ownership"
                placeholder="Own/Rent"
                className="input w-full mt-2 rounded border border-gray-400 p-1"
              />

              <div className="mt-3 space-y-2 text-sm">
                <label className="flex gap-2 items-center">
                  <input type="checkbox" name="landlordApproval" />
                  If renting, do you have landlord approval for pets?
                </label>
                <label className="flex gap-2 items-center">
                  <input type="checkbox" name="hasYard" />
                  Do you have a yard?
                </label>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between pt-4">
              <a href="/PetDetails">
                <button
                  type="button"
                  className="border border-orange-500 text-orange-600 px-4 py-2 rounded hover:bg-orange-50"
                >
                  Back to Pet
                </button>
              </a>
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-sm text-center">
            <h3 className="text-xl font-semibold mb-2 text-green-600">
              Application Submitted!
            </h3>
            <p className="text-gray-600 mb-4">
              Thank you for your adoption request. We will contact you soon.
            </p>
            <button
              onClick={closePopup}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
