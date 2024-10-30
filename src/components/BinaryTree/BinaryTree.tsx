import Image from 'next/image';
import { heroIcons } from '@/data/heroIconsSvg';

const BinaryTree = () => {
  return (
    <ul className="flex justify-center w-[600px]">
      {heroIcons.map(({ id, path, width, height }) => (
        <li
          key={id}
          className="flex items-center justify-center w-11 h-11 bg-[#251c31] rounded-full"
        >
          <Image src={path} alt="test" width={width} height={height} />
        </li>
      ))}
    </ul>
  );
};

export default BinaryTree;
