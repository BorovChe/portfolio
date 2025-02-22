import { IStackListProps } from '@/common/types';
import StackItem from './stack-item';

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
