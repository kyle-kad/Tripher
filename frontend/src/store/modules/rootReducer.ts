import { combineReducers } from 'redux';

import intrests  from "./intrests/reducer";
import subscriptions from "./subscriptions/reducer";
import featured from "./featured/reducer"

export const rootReducer = combineReducers({
    intrests, subscriptions, featured
})

export type RootState = ReturnType<typeof rootReducer>