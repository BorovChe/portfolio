import ITitleUnderlineProps from './title-underline.types';

const TitleUnderline = ({ color }: ITitleUnderlineProps) => {
  return (
    <div
      style={{ backgroundColor: `var(--${color})` }}
      className={`h-1 w-full  mb-10`}
    ></div>
  );
};

export default TitleUnderline;
