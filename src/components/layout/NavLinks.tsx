import Link from "next/link";

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

export const NavLinks = ({ mobile, onClick }: NavLinksProps) => {
  const links = [
    { href: "/products", text: "Products" },
    { href: "/learn", text: "Learn" },
    { href: "/support", text: "Support" },
  ];

  return (
    <>
      {links.map(({ href, text }) => (
        <Link
          key={href}
          href={href}
          className={`
            text-gray-300 hover:text-white transition-colors
            ${mobile ? "text-2xl" : ""}
          `}
          onClick={onClick}
        >
          {text}
        </Link>
      ))}
    </>
  );
};
