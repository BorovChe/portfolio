import contacts from '@/data/contacts.json';
import ContactItem from './contact-item';

const ContactList = () => {
  return (
    <ul className="flex flex-col items-center gap-6">
      {contacts.map(contact => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
