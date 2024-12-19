import Image from 'next/image';

import { IProject } from '@/common/types';
import ProjectStackList from '@/components/Stack/ProjectStackList/ProjectStackList';

import { live, gitHub } from '../../../../public/icons';

const ProjectItem = ({ logoSrc, title, type, stack }: IProject) => {
  return (
    <li
      className="flex flex-col  gap-4 px-4 py-4  sm:px-6 sm:py-6  md:w-[600px] lg:flex-row lg:px-4 lg:py-4
     rounded lg:even:ml-auto lg:even:flex-row-reverse shadow-[0_3px_8px_1px_#000000d1]  lg:w-[800px] 2xl:w-[820px]"
    >
      <div className="aspect-w-16 aspect-h-9  min-w-[100%] lg:min-w-[360px] max-w-[360px] h-[270px]  lg:h-[300px]">
        <Image
          src={logoSrc}
          alt={title}
          className="object-cover w-full h-full rounded"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-center mb-3 lg:mb-1 text-[26px] tracking-[.18em] font-medium">
          {title}
        </h3>
        <div className="flex gap-2 items-center mb-4 lg:mb-2">
          <p className="text-base tracking-[.18em]  font-medium">Type:</p>
          <p className="text-base">{type}</p>
        </div>
        <p className="text-base tracking-[.18em] mb-4 lg:mb-2  font-medium">
          Project Stack:
        </p>
        <ProjectStackList stack={stack} />
        <div className="flex justify-between items-center mt-8 lg:m-0">
          <div className="flex gap-2 ">
            <Image src={gitHub} alt="GitHub" width={30} height={30} />
            <Image src={live} alt="Live Page" width={26} height={26} />
          </div>
          <button className="test" type="button">
            Details
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
