import Header from "@/components/general/Header";
import PetCard from "@/components/general/PetCard";
import SearchFilter from "@/components/general/SearchFilter";
import SpotlightSection from "@/components/general/SpotlightSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <SpotlightSection/>
      <SearchFilter/>
      <PetCard/>
    </div>
  );
}

                    //chatGPT
// import Header from "@/components/general/Header";
// import SpotlightSection from "@/components/general/SpotlightSection";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <main>
//         <SpotlightSection />
//       </main>
//     </>
//   );
// }
