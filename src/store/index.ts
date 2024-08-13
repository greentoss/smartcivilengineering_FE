import { init, Models } from '@rematch/core';
import { language } from './models/language';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { Provider } from 'react-redux';

export interface RootModel extends Models<RootModel> {
  language: typeof language;
}

const models: RootModel = { language };

export const store = init({
  models,
});

export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
