export default function PrimaryButton({ link, children, brand }) {
  return (
    <a
      href={link}
      className={`btn  py-6 px-12 ${brand && "btn-primary bg-brand hover:bg-brandHover border-brand hover:border-brandHover text-white"}  text-[1rem] font-semibold `}
    >
      {children}
    </a>
  );
}
