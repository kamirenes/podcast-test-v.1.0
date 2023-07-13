import i18n, { Callback } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Config } from '../config/config';

type TInitLocalization = (lng: string) => void;

const initLocalization: TInitLocalization = (lng) => {
  const ns = ['translations'];
  const defaultNS = ns[0];

  i18n
    .use(initReactI18next)
    .init({
      lng,
      debug: false,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      defaultNS,
      ns,
      useDataAttrOptions: true,
    } as unknown as Callback);

  Config.I18N.LOCALES.forEach((loc) => {
    i18n.addResourceBundle(loc, defaultNS, require(`../../public/locales/${defaultNS}.${loc}.json`));
  })
}

export default initLocalization;