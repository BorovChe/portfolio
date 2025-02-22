import Image from 'next/image';
import Link from 'next/link';

import { IContact } from '@/common/types';

const ContactItem = ({ icon, title, link, width, height }: IContact) => {
  return (
    <li className="flex justify-start min-w-[260px]">
      <Link
        rel="noreferrer noopener"
        target="_blank"
        href={link}
        className="flex gap-4 items-center	text-left"
      >
        <Image
          src={`/icons/contacts/${icon}`}
          alt={title}
          width={width}
          height={height}
        />
        <p className="text-[--main-white-txt-cl] text-base">{title}</p>
      </Link>
    </li>
  );
};

export default ContactItem;
