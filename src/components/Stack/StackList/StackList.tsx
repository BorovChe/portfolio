import StackItem from '../StackItem';

import { IStackListProps } from './StackList.types';

const StackList = ({ stack }: IStackListProps) => {
  return (
    <ul className="flex flex-wrap gap-2 mt-auto">
      {stack.map((item: string) => (
        <StackItem key={item} item={item} bgColor="rgb(37, 37, 37)" />
      ))}
    </ul>
  );
};

export default StackList;
