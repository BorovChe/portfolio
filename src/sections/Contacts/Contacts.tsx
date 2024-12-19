import ContactList from '@/components/Contacts/ContactList/ContactsList';

const Contacts = () => {
  return (
    <section id="contacts" className=" w-full pb-16 pt-6 bg-[--main-dark-cl]">
      <h2 className="text-[32px] text-[--second-white-txt-cl] mb-2 font-medium tracking-wider uppercase">
        Contacts
      </h2>
      <div className="h-1 w-full bg-[--second-white-txt-cl] mb-10"></div>

      <ContactList />
    </section>
  );
};

export default Contacts;
