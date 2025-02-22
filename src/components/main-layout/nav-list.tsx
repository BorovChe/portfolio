import Link from 'next/link';
import navList from '@/data/navLink.json';

export interface INavLinst {
  id: string;
  title: string;
}

export interface INavListProps {
  textColor: string;
}

const NavList = ({ textColor }: INavListProps) => {
  return (
    <nav className="hidden xl:block">
      <ul className="flex gap-8 items-center">
        {navList.map(({ id, title }: INavLinst) => (
          <li
            key={id}
            className="hover:scale-[1.1] transition-transform duration-[--main-transition]"
          >
            <Link
              className={`text-[${textColor}] leading-tight tracking-widest	 uppercase lg:text-[14px] `}
              href={`/#${id}`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
