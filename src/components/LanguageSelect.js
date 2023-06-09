import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18nextConf';

const languageMap = {
  en: { label: 'English', dir: 'ltr', active: true },
  sp: { label: 'Español', dir: 'ltr', active: false }
};

const LanguageSelect = () => {
  const selected = localStorage.getItem('i18nextLng') || 'en';
  const { i18n } = useTranslation();

  React.useEffect(() => {
    if (selected && languageMap[selected] && languageMap[selected].dir) {
      document.body.dir = languageMap[selected].dir;
    }
  }, [selected]);

  const changeLang = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <div>
      <select name="select" onChange={(e) => changeLang(e.target.value)} value={selected}>
        {Object.keys(languageMap).map((item) => (
          <option value={item} key={item}>
            {languageMap[item].label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelect;
