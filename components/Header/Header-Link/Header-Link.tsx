import Link from "next/link";

interface HeaderLinkProps {
  link: string;
  buttonText: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function HeaderLink({ link, buttonText, onClick }: HeaderLinkProps) {
  return (
    <Link href={link} className="tagline-medium" onClick={onClick}>
      {buttonText}
    </Link>
  );
}

export default HeaderLink;
