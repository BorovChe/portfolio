import { FC } from 'react';

import StackList from '../StackList';

import { IDirectionItemProps } from './DirectionItem.types';

const DirectionItem: FC<IDirectionItemProps> = ({ title, technologies }) => {
  return (
    <li className="flex flex-col gap-2">
      <h3>{title}:</h3>
      <StackList stack={technologies} />
    </li>
  );
};

export default DirectionItem;
