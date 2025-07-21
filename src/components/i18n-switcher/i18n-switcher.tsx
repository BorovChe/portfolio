interface II18nSwitcher {
  textColor: string;
  textSize: string;
}

const I18nSwitcher = ({ textColor, textSize }: II18nSwitcher) => {
  return (
    <div
      style={{ fontSize: textSize }}
      className={`flex items-center text-[${textColor}]`}
    >
      <p>UA</p>
      <span>/</span>
      <p>EU</p>
    </div>
  );
};

export default I18nSwitcher;
