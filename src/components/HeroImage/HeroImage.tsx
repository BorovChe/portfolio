import Image from 'next/image';
import { heroPhoto } from '../../../public/images';

const HeroImage = () => {
  return (
    <div className="mx-auto min-w-[280px] max-w-[420px] md:min-w-[340px] md:max-w-[340px] md:max-h-[440px] lg:m-0 shadow-custom-border bg-inherit  ">
      <Image src={heroPhoto} alt="Profile photo" priority={true} />
    </div>
  );
};

export default HeroImage;
