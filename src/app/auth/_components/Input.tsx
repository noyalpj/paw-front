import React from "react";

// interface InputProps {
//   label: string;
//   type: string;
//   name: string;
//   placeholder: string;
//   icon?: React.ReactNode;
// }

// export default function Input({ label, type, name, placeholder, icon }: InputProps) {
//   return (
//     <div className="mb-4">
//       <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
//       <div className="relative">
//         {icon && (
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
//             {icon}
//           </div>
//         )}
//         <input
//           type={type}
//           name={name}
//           placeholder={placeholder}
//           className="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
//         />
//       </div>
//     </div>
//   );
// }

// components/form/Input.tsx
interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

export default function Input({
  label,
  name,
  type = "text",
  placeholder,
  className,
}: InputProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
}
