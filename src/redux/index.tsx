import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore, createMigrate} from "redux-persist";
import { combineReducers, createStore} from "redux";
import { theme } from "./reducers/theme/reducer";

const migrations = {
    1: (state:any) => ({
        ...state
    })
}

const persistConfig = {
    key: "root",
    blacklist: [],
    storage,
    version: 1,
    migrate: createMigrate(migrations, {debug: true})
}

const reducers = () => combineReducers({
    theme: theme,
});

const persistReducerInit = persistReducer(persistConfig, reducers());

export const store = createStore(persistReducerInit);

export const PersistStoreFct = (store: any) => persistStore(store);