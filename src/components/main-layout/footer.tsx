import Container from '@/components/UI/container';
import Logo from '@/components/UI/logo';
import I18nSwitcher from '../i18n-switcher';

const Footer = () => {
  return (
    <footer className="relative flex items-center min-h-[68px]  border-[--footer-border-cl-30] border-t-[0.5px] border-solid text-[--main-dark-cl]">
      <Container>
        <Logo textColor="--main-dark-cl" textSize="18px" />
        <I18nSwitcher textColor="--main-dark-cl" textSize="14px" />
      </Container>
    </footer>
  );
};

export default Footer;
