import { contacts } from '@/data/contacts';
import Image from 'next/image';

const ContactList = () => {
  return (
    <ul className="flex flex-col gap-6">
      {contacts.map(({ id, path, title, width, height }) => (
        <li className="flex gap-4 items-center pl-[200px]" key={id}>
          <Image src={path} alt={title} width={width} height={height} />
          <p className="text-[--main-white-txt-cl] text-base">{title}</p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
