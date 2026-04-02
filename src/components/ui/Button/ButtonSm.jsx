export default function ButtonSm({ ctaLink, children }) {
  return (
    <a
      href={ctaLink}
      className="flex items-center gap-1.5 bg-white rounded-xl px-4 py-2.5 text-violet-600 font-semibold text-sm shadow-sm hover:shadow-md transition-shadow whitespace-nowrap"
    >
      {children}
    </a>
  );
}
