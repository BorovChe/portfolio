import Image from 'next/image';

import StackItem from '@/components/Stack/StackItem';

import { live, gitHub } from '../../../../public/icons';

import { IProject } from '@/common/types';

const ProjectItem = ({ logoSrc, title, type, stack }: IProject) => {
  return (
    <li className="flex gap-4 px-6 py-4 rounded even:ml-auto even:flex-row-reverse shadow-[0_3px_8px_1px_#000000d1]  w-[800px]">
      <div className="aspect-w-16 aspect-h-9  min-w-[360px]  max-w-[360px] h-[300px] ">
        <Image
          src={logoSrc}
          alt={title}
          className="object-cover w-full h-full rounded"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-center mb-1 text-[26px] tracking-[.18em] font-medium">
          {title}
        </h3>
        <div className="flex gap-2 items-center mb-2">
          <p className="text-base tracking-[.18em]  font-medium">Type:</p>
          <p className="text-base">{type}</p>
        </div>
        <p className="text-base tracking-[.18em] mb-2  font-medium">
          Project Stack:
        </p>
        <ul className="flex flex-wrap gap-2 mb-auto text-[--main-white-txt-cl]">
          {stack.map(item => (
            <StackItem key={item} item={item} bgColor="#251c31" />
          ))}
        </ul>

        <div className="flex gap-2">
          <Image src={gitHub} alt="GitHub" width={30} height={30} />
          <Image src={live} alt="Live Page" width={26} height={26} />
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
