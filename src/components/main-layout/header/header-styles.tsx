import { CSSProperties } from 'react';

interface IHeaderStyles {
  hidden: CSSProperties;
  visible: CSSProperties;
}

const headerStyles: IHeaderStyles = {
  hidden: {
    position: 'fixed',
    top: '0',
    transform: 'translateY(0)',
  },

  visible: {
    position: 'fixed',
    top: '0',
    transform: 'translateY(-100%)',
  },
};

export { headerStyles };
