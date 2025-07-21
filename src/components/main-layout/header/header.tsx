import Image from 'next/image';

import NavList from '../nav-list';
import I18nSwitcher from '@/components/i18n-switcher';
import Logo from '@/components/UI/logo';

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);

  //   if (!isOpen) {
  //     document.body.classList.add('overflow-hidden');
  //   } else {
  //     document.body.classList.remove('overflow-hidden');
  //   }
  // };
  // bg-[#0c0c0cbf]

  return (
    <header
      className="blur-filter absolute top-0 w-full flex items-center min-h-[64px]
      bg-[--main-dark-cl] shadow-[0_4px_12px_#191c2666] border-[--header-border-cl-20] border-b-[0.5px] border-solid  z-[999] px-5
       sm:px-8"
    >
      <div className="w-full flex justify-between gap-8">
        <button
          type="button"
          className="xl:hidden flex items-center justify-center w-10 h-10"
          // onClick={toggleSidebar}
        >
          <Image
            // src={isOpen ? close : burgerMenu}
            src="/icons/header/menu.svg"
            alt="Menu"
            width={30}
            height={30}
          />
        </button>
        <NavList textColor="--main-white-txt-cl" textSize="14px" />
        <Logo textColor="--main-white-txt-cl" textSize="18px" />
        <I18nSwitcher textColor="--main-white-txt-cl" textSize="14px" />
      </div>
    </header>
  );
};

export default Header;
