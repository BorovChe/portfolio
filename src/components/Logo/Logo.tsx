import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="block text-[--main-white-txt-cl] basis-72  leading-none tracking-[.18em] text-center uppercase hover:scale-[1.1] transition-transform duration-[--main-transition]"
    >
      <p className="mb-[3px] text-[18px]  font-medium">Borov Che</p>
      <span className="text-[8px]">Full-Stack Developer</span>
    </Link>
  );
};

export default Logo;
