export default function PrimaryButton({ link, children, brand, className }) {
  return (
    <a
      href={link}
      className={`btn  py-6 px-12 ease-in duration-300 ${brand && "btn-primary bg-[#F2BD44] hover:bg-[#F2BD44] border-[#F2BD44] hover:border-[#F2BD44] text-black"}  text-[1rem] font-semibold ${className || ""} `}
    >
      {children}
    </a>
  );
}
