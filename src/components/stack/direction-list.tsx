import directions from '@/data/directions.json';
import DirectionItem from './direction-item';
import { IDirection } from '@/common/types';

const DirectionList = () => {
  return (
    <ul className="flex flex-col lg:flex-row 2xl:flex-col lg:items-start items-center gap-6 md:max-w-[100%]  2xl:max-w-[514px]  ">
      {directions.map(({ title, technologies }: IDirection) => (
        <DirectionItem key={title} title={title} technologies={technologies} />
      ))}
    </ul>
  );
};

export default DirectionList;
