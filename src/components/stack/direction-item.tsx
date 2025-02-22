import StackList from './stack-list';

export interface IDirectionItemProps {
  title: string;
  technologies: string[];
}

const DirectionItem = ({ title, technologies }: IDirectionItemProps) => {
  return (
    <li className="flex flex-col gap-2">
      <h3>{title}:</h3>
      <StackList stack={technologies} />
    </li>
  );
};

export default DirectionItem;
