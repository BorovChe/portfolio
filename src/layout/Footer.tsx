import Container from '@/components/UI/Container';
import I18nSwitcher from '@/components/i18nSwitcher';
import Logo from '@/components/UI/Logo';

const Footer = () => {
  return (
    <footer className="relative flex items-center min-h-[68px]  border-[--footer-border-cl-30] border-t-[0.5px] border-solid text-[--main-dark-cl]">
      <Container>
        <Logo textColor="--main-dark-cl" />
        <I18nSwitcher textColor="--main-dark-cl" />
      </Container>
    </footer>
  );
};

export default Footer;
