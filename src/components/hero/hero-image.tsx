import Image from 'next/image';

const HeroImage = () => {
  return (
    <div className="mx-auto min-w-[280px] max-w-[420px] md:min-w-[340px] md:max-w-[340px] md:max-h-[440px] lg:m-0 shadow-custom-border bg-inherit  ">
      <Image
        src="/images/hero/myBudka.jpg"
        alt="Profile photo"
        priority={true}
        width={420}
        height={440}
      />
    </div>
  );
};

export default HeroImage;
