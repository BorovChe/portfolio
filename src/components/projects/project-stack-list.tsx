import { IStackListProps } from '@/common/types';
import StackItem from '../stack/stack-item';

const ProjectStackList = ({ stack }: IStackListProps) => {
  return (
    <ul className="flex flex-wrap gap-2 mb-auto text-[--main-white-txt-cl]">
      {stack.map(item => (
        <StackItem key={item} item={item} bgColor="#251c31" />
      ))}
    </ul>
  );
};

export default ProjectStackList;
