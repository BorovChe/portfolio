import Link from 'next/link';
import navList from '@/data/navLink.json';

import { INavLinst } from './NavList.types';

const NavList = () => {
  return (
    <ul className="flex gap-8 basis-72 items-center">
      {navList.map(({ id, title, sectionId }: INavLinst) => (
        <li key={id}>
          <Link
            className="text-[--main-white-txt-cl] leading-tight tracking-widest	 uppercase"
            href={`#${sectionId}`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
