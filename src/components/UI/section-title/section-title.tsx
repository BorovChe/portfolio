import { ISectionTitleProps } from './section-title.types';

const SectionTitle = ({ children, color, position }: ISectionTitleProps) => {
  return (
    <h2
      style={{ color: `var(--${color})`, textAlign: position }}
      className={`text-[32px]  mb-2  font-medium tracking-wider uppercase`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
