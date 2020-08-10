import { combineReducers } from 'redux';

import intrests  from "./intrests/reducer";
import subscriptions from "./subscriptions/reducer";
import featured from "./featured/reducer";
import recents from "./recents/reducer"
import user from "./user/reducer"

export const rootReducer = combineReducers({
    intrests, subscriptions, featured, recents, user
})

export type RootState = ReturnType<typeof rootReducer>;