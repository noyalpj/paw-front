"use client";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="max-w-full mx-auto xl:px-20 md:px-10 sm:px-4 px-2">
      {children}
    </div>
  );
};

export default Wrapper;