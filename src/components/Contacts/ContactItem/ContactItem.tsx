import Image from 'next/image';
import { IContactItemProps } from './ContactItem.types';
import Link from 'next/link';

const ContactItem = ({
  contact: { path, title, link, width, height },
}: IContactItemProps) => {
  return (
    <li className="flex justify-start min-w-[260px]">
      <Link
        rel="noreferrer noopener"
        target="_blank"
        href={link}
        className="flex gap-4 items-center	text-left"
      >
        <Image src={path} alt={title} width={width} height={height} />
        <p className="text-[--main-white-txt-cl] text-base">{title}</p>
      </Link>
    </li>
  );
};

export default ContactItem;
