import ContactList from '@/components/contacts/contact-list';
import SectionTitle from '@/components/UI/section-title';
import TitleUnderline from '@/components/UI/title-underline';

const Contacts = () => {
  return (
    <section id="contacts" className=" w-full pb-16 pt-6 bg-[--main-dark-cl]">
      <SectionTitle color="second-white-txt-cl" position="left">
        Contacts
      </SectionTitle>
      <TitleUnderline color="second-white-txt-cl" />
      <ContactList />
    </section>
  );
};

export default Contacts;
