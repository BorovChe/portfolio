import DirectionItem from '../DirectionItem';
import { directions } from '@/data/directions';

import { IDirection } from '@/common/types';

const DirectionList = () => {
  return (
    <ul className="flex flex-col gap-6">
      {directions.map(({ title, technologies }: IDirection) => (
        <DirectionItem key={title} title={title} technologies={technologies} />
      ))}
    </ul>
  );
};

export default DirectionList;
