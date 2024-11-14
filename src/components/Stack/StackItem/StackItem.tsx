interface IStackItemProps {
  item: string;
  bgColor: string;
}

const StackItem = ({ item, bgColor }: IStackItemProps) => {
  return (
    <li
      style={{ backgroundColor: bgColor }}
      className={`flex items-center justify-center bg-[] rounded-[10rem] px-3 min-h-8`}
    >
      {item}
    </li>
  );
};

export default StackItem;
