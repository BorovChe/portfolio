import education from '@/data/education.json';

const EducationList = () => {
  return (
    <ul className="text-[white]">
      {education.map(({ title, profession, time }) => (
        <li key={title}>
          <p>{title}</p>
          <p>{profession}</p>
          <p>{time}</p>
        </li>
      ))}
    </ul>
  );
};

export default EducationList;
