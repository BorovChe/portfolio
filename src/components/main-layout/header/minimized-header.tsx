'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import NavList from '../nav-list';
import I18nSwitcher from '@/components/i18n-switcher';
import Logo from '@/components/UI/logo';
import { headerStyles } from './header-styles';

const MinimizedHeader = () => {
  const [scrollDirection, setScrollDirection] = useState<string>('');
  const [headerZone, setHeaderZone] = useState<boolean>(true);
  const scrollPosition = useRef<number>(0);

  const handleScroll = (): void => {
    const currentScrollPosition: number = window.pageYOffset;
    setHeaderZone(currentScrollPosition < 100);

    const direction: string =
      currentScrollPosition > scrollPosition.current ? 'down' : 'up';
    setScrollDirection(direction);
    scrollPosition.current = currentScrollPosition;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isSrollUp: boolean = !headerZone && scrollDirection === 'up';

  return (
    <header
      style={isSrollUp ? headerStyles.hidden : headerStyles.visible}
      className="blur-filter absolute top-[-64px] w-full flex items-center min-h-[44px] transition-transform ease-linear duration-200
      bg-[#0c0c0cda] shadow-[0_4px_12px_#191c2666] border-[--header-border-cl-20] border-b-[0.5px] border-solid  z-[777] px-5
       sm:px-8"
    >
      <div className="w-full flex justify-between gap-8">
        <button
          type="button"
          className="xl:hidden flex items-center justify-center w-10 h-10"
        >
          <Image
            src="/icons/header/menu.svg"
            alt="Menu"
            width={30}
            height={30}
          />
        </button>
        <NavList textColor="--main-white-txt-cl" textSize="12px" />
        <Logo textColor="--main-white-txt-cl" textSize="16px" />
        <I18nSwitcher textColor="--main-white-txt-cl" textSize="12px" />
      </div>
    </header>
  );
};

export default MinimizedHeader;
