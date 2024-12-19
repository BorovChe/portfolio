import { contacts } from '@/data/contacts';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  return (
    <ul className="flex flex-col items-center gap-6">
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
