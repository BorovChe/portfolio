import Container from '@/components/Container';
import NavList from '@/components/NavList';
import Logo from '@/components/Logo';
import I18nSwitcher from '@/components/i18nSwitcher/i18nSwitcher';

const Header = () => {
  return (
    <header
      className="blur-filter fixed w-full flex items-center min-h-[78px]
     bg-[#0c0c0cbf] shadow-[0_4px_12px_#191c2666] border-[--header-border-cl-20] border-b-[0.5px] border-solid "
    >
      <Container>
        <div className="flex justify-between gap-8">
          <NavList />
          <Logo />
          <I18nSwitcher />
        </div>
      </Container>
    </header>
  );
};

export default Header;
