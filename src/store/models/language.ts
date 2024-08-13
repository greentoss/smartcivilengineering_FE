import { createModel } from '@rematch/core';
import { RootModel } from '../index';
import i18n from '@/config/i18n';

interface LanguageState {
  currentLanguage: string;
}

export const language = createModel<RootModel>()({
  state: { currentLanguage: 'en' } as LanguageState, // Default language
  reducers: {
    setLanguage(state, language: string) {
      return { ...state, currentLanguage: language };
    },
  },
  effects: (dispatch) => ({
    async changeLanguage(language: string) {
      i18n.changeLanguage(language);
      dispatch.language.setLanguage(language);
    },
  }),
});
