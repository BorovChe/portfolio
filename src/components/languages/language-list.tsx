import languages from '@/data/languages.json';

const LanguageList = () => {
  return (
    <ul className="text-[white]">
      {languages.map(({ language, degree }) => (
        <li key={language}>
          <p>{language}</p>
          <p>{degree}</p>
        </li>
      ))}
    </ul>
  );
};

export default LanguageList;
