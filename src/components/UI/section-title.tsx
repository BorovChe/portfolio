type TextAlign = 'left' | 'center' | 'right';

export interface ISectionTitleProps {
  children: React.ReactNode;
  color: string;
  position: TextAlign;
}

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
