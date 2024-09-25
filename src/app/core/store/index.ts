import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './reducers';

export * as effects from './effects';
export * from './reducers';

export type RootState = ReturnType<typeof reducers>;

export const store = configureStore({
    reducer: reducers,
    devTools: true,
 });
