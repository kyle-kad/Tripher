import { combineReducers } from 'redux';

import intrests  from "./intrests/reducer";
import subscriptions from "./subscriptions/reducer";
import featured from "./featured/reducer";
import recents from "./recents/reducer"

export const rootReducer = combineReducers({
    intrests, subscriptions, featured, recents
})

export type RootState = ReturnType<typeof rootReducer>;