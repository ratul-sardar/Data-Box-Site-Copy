export default function PrimaryButton({ link, children, brand, className }) {
  return (
    <a
      href={link}
      className={`btn  py-6 px-12 ease-in duration-300 ${brand && "btn-primary bg-[#E7FE29] hover:bg-[#E7FE29] border-[#E7FE29] hover:border-[#E7FE29] text-black"}  text-[1rem] font-semibold ${className || ""} `}
    >
      {children}
    </a>
  );
}
