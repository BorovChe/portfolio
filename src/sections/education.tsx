import EducationList from '@/components/education/education-list';
import LanguageList from '@/components/languages/language-list';
import SectionTitle from '@/components/UI/section-title';
import TitleUnderline from '@/components/UI/title-underline';

const Education = () => {
  return (
    <section
      id="education"
      className="w-full pb-16 lg:pt-6 bg-[--main-dark-cl]"
    >
      <SectionTitle color="second-white-txt-cl" position="right">
        Education <i>&</i> Languages
      </SectionTitle>
      <TitleUnderline color="second-white-txt-cl" />
      <div className="flex">
        <EducationList />
        <LanguageList />
      </div>
    </section>
  );
};

export default Education;
