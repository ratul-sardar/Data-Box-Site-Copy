export default function PrimaryButton({ link, children, brand, className }) {
  return (
    <a
      href={link}
      className={`btn inline-flex items-center justify-center py-2.5 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 ease-in duration-300 ${brand && "btn-primary bg-[#F2BD44] hover:bg-[#F2BD44] border-[#F2BD44] hover:border-[#F2BD44] text-black"} text-[0.9rem] sm:text-[1rem] font-semibold text-center whitespace-normal break-words leading-tight ${className || ""} `}
    >
      {children}
    </a>
  );
}
