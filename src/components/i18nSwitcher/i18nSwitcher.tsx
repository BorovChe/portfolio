interface II18nSwitcher {
  textColor: string;
}

const I18nSwitcher = ({ textColor }: II18nSwitcher) => {
  return (
    <div className={`flex items-center text-[${textColor}]`}>
      <p>UA</p>
      <span>/</span>
      <p>EU</p>
    </div>
  );
};

export default I18nSwitcher;
