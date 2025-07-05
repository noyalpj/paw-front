// import React from "react";

// interface ButtonProps {
//     onClick?: () => void;
//     className?: string;
//     isLoading?: boolean;
//     type?: "primary" | "secondary" | "tertiary" | "quaternary";
//     isDisabled?: boolean;
//     children?: React.ReactNode;
// }

// export const Button = ({
//     onClick,
//     className,
//     isLoading,
//     type = "primary",
//     isDisabled,
//     children,
// }: ButtonProps) => {
//     // classNames for basic button
//     const basicClassNames = ` text-white rounded-[8px] min-w-[95px] min-h-[35px] bg-[#107569] w-full flex justify-center items-center text-[18px] px-[14px] py-3 relative inter-regular hover:bg-[#0e6a57] transition duration-200 `;
//     // const basicClassNames = ` `;
//     // classNames for button types
//     // const primaryClassNames = `cursor-pointer bg-[#059664] text-[#fff] border-[#059664] border-[1px] border-solid hover:bg-[#047853] hover:border-[#047853]`;
//     const secondaryClassNames = `cursor-pointer bg-[#FFF] text-[#364152] border-[#CDD5DF] border-[1px] border-solid hover:bg-[#F8FAFC]`;
//     const tertiaryClassNames = `cursor-pointer bg-[#FFF] text-[#047853] border-[#6EE7B3] border-[1px] border-solid hover:bg-[#ECFDF4] hover:text-[#065F43]`;
//     const quaternaryClassNames = `cursor-pointer text-[#047853] hover:text-[#065F43]`;
//     // classNames for disabled button
//     const primaryDisabledClassNames = `cursor-not-allowed bg-[#EEF2F6] text-[#9AA4B2] border-[1px] border-transparent border-solid`;
//     const secondaryDisabledClassNames = `cursor-not-allowed bg-[#FFF] text-[#9AA4B2] border-[1px] border-transparent border-solid`;

//     return (
//         <>
//             {isDisabled ? (
//                 <>
//                     {type === "secondary" ||
//                     type === "tertiary" ||
//                     type === "quaternary" ? (
//                         //  ----------------------------- Disabled buttton for the type secondary and tertiary -----------------------------
//                         <button
//                             onClick={(e) => {
//                                 if (onClick) {
//                                     e.preventDefault();
//                                     onClick();
//                                 }
//                             }}
//                             className={`${basicClassNames} ${secondaryDisabledClassNames} ${className}`}
//                         >
//                             {isLoading && (
//                                 <span
//                                     className={`button-loader absolute !text-[#059664]`}
//                                 />
//                             )}
//                             <div
//                                 className={`inter-semiBold  ${
//                                     isLoading ? "opacity-0" : ""
//                                 }`}
//                             >
//                                 {children}
//                             </div>
//                         </button>
//                     ) : (
//                         //  ----------------------------- Disabled buttton for the type primary -----------------------------
//                         <button
//                             onClick={(e) => {
//                                 if (onClick) {
//                                     e.preventDefault();
//                                     onClick();
//                                 }
//                             }}
//                             className={`${basicClassNames} ${primaryDisabledClassNames} ${className}`}
//                         >
//                             {isLoading && (
//                                 <span
//                                     className={`button-loader absolute !text-[#059664]`}
//                                 />
//                             )}
//                             <div
//                                 className={`font-semibold ${
//                                     isLoading ? "opacity-0" : ""
//                                 }`}
//                             >
//                                 {children}
//                             </div>
//                         </button>
//                     )}
//                 </>
//             ) : type === "secondary" ? (
//                 //  ----------------------------- buttton for the type secondary -----------------------------
//                 <button
//                     onClick={(e) => {
//                         if (onClick) {
//                             e.preventDefault();
//                             onClick();
//                         }
//                     }}
//                     className={`${basicClassNames} ${secondaryClassNames} ${className}`}
//                 >
//                     {isLoading && (
//                         <span
//                             className={`button-loader absolute !text-[#059664]`}
//                         />
//                     )}
//                     <div
//                         className={`font-semibold ${
//                             isLoading ? "opacity-0" : ""
//                         }`}
//                     >
//                         {children}
//                     </div>
//                 </button>
//             ) : type === "tertiary" ? (
//                 //  ----------------------------- buttton for the type tertiary -----------------------------
//                 <button
//                     onClick={(e) => {
//                         if (onClick) {
//                             e.preventDefault();
//                             onClick();
//                         }
//                     }}
//                     className={`${basicClassNames} ${tertiaryClassNames} ${className}`}
//                 >
//                     {isLoading && (
//                         <span
//                             className={`button-loader absolute !text-[#059664]`}
//                         />
//                     )}
//                     <div
//                         className={`font-semibold ${
//                             isLoading ? "opacity-0" : ""
//                         }`}
//                     >
//                         {children}
//                     </div>
//                 </button>
//             ) : type === "quaternary" ? (
//                 //  ----------------------------- buttton for the type quaternary -----------------------------
//                 <button
//                     onClick={(e) => {
//                         if (onClick) {
//                             e.preventDefault();
//                             onClick();
//                         }
//                     }}
//                     className={`${basicClassNames} ${quaternaryClassNames} ${className}`}
//                 >
//                     {isLoading && (
//                         <span
//                             className={`button-loader absolute !text-[#B42318]`}
//                         />
//                     )}
//                     <div
//                         className={`font-semibold ${
//                             isLoading ? "opacity-0" : ""
//                         }`}
//                     >
//                         {children}
//                     </div>
//                 </button>
//             ) : (
//                 //  ----------------------------- buttton for the type primary -----------------------------
//                 <button
//                     onClick={(e) => {
//                         if (onClick) {
//                             e.preventDefault();
//                             onClick();
//                         }
//                     }}
//                     className={`${className} ${basicClassNames}`}
//                 >
//                     {isLoading && <span className={`button-loader absolute`} />}
//                     <div
//                         className={`font-semibold ${
//                             isLoading ? "opacity-0" : ""
//                         }`}
//                     >
//                         {children}
//                     </div>
//                 </button>
//             )}
//         </>
//     );
// };
