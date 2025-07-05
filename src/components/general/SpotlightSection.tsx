// import React from "react";
// import Image from "next/image";

// export default function SpotlightSection() {
//   return (
//     <section className="relative bg-gradient-to-r from-orange-400 via-orange-500 to-blue-500 text-white py-24 px-4">
//       <div className="absolute inset-0 bg-black opacity-20"></div>

//       <div className="relative max-w-7xl mx-auto text-center">
//         <div className="mb-8">
//           {/* <Heart className="h-16 w-16 mx-auto mb-6 text-white animate-pulse" /> */}
//           <Image
//             className="h-16 w-16 mx-auto mb-6 text-white animate-pulse"
//             src="icons/white-heart-logo.svg"
//             alt="Logo"
//             width={80}
//             height={80}
//           />

//           <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//             Find Your
//             <span className="block text-yellow-200">Forever Friend</span>
//           </h1>

//           <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
//             Connect with loving pets from trusted shelters. Every adoption saves
//             a life and brings joy to your home.
//           </p>
//         </div>

//         <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
//           <button className="rounded-[10px] p-[14px] bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold flex items-center">
//             {/* Replace this with an actual icon component if using one */}
//             {/* <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 mr-2"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M10 18a8 8 0 100-16 8 8 0 000 16zm8-2l4 4"
//               />
//             </svg> */}
//             <Image src="/icons/orange-search.svg" alt="Search" width={19} height={19} className="mr-3" />
//             Browse Pets
//           </button>

//           {/* <button className="rounded-[10px] border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold">
//             I'm a Shelter
//           </button> */}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
//           <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
//             <h3 className="text-2xl font-bold mb-2">2,500+</h3>
//             <p className="text-lg">Pets Adopted</p>
//           </div>
//           <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
//             <h3 className="text-2xl font-bold mb-2">150+</h3>
//             <p className="text-lg">Partner Shelters</p>
//           </div>
//           <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
//             <h3 className="text-2xl font-bold mb-2">98%</h3>
//             <p className="text-lg">Success Rate</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";

export default function SpotlightSection() {
  return (
    <section className="relative bg-gradient-to-r from-orange-400 via-orange-500 to-blue-500 text-white py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <Image
            className="mx-auto mb-6 animate-pulse"
            src="/icons/white-heart-logo.svg"
            alt="Logo"
            width={64}
            height={64}
          />

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your
            <span className="block text-yellow-200">Forever Friend</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with loving pets from trusted shelters. Every adoption saves
            a life and brings joy to your home.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <Link href="/browse">
            <button className="rounded-[10px] p-[14px] bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold flex items-center">
              <Image
                src="/icons/orange-search.svg"
                alt="Search"
                width={19}
                height={19}
                className="mr-3"
              />
              Browse Pets
            </button>
          </Link>

          {/* <button className="rounded-[10px] border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold">
            I'm a Shelter
          </button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">2,500+</h3>
            <p className="text-lg">Pets Adopted</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">150+</h3>
            <p className="text-lg">Partner Shelters</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">98%</h3>
            <p className="text-lg">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
