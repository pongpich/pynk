import { addLocaleData } from 'react-intl';
import enLang from './entries/en-US';
import thLang from './entries/th-TH';

const AppLocale = {
    th: thLang,
    en: enLang,
};
addLocaleData(AppLocale.th.data);
addLocaleData(AppLocale.en.data);

export default AppLocale;