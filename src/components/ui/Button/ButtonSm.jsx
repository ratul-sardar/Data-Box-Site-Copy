export default function ButtonSm({ ctaLink, children, className }) {
  return (
    <a
      href={ctaLink}
      className={`${className} min-w-0 flex items-center justify-center gap-1.5 bg-white rounded-xl px-4 py-2.5 text-violet-600 font-semibold text-sm shadow-sm hover:shadow-md transition-shadow text-center`}
    >
      {children}
    </a>
  );
}
