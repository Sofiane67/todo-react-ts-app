import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore, createMigrate} from "redux-persist";
import { combineReducers, createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";
import { theme } from "./reducers/theme/reducer";
import { tasks } from "./reducers/tasks/reducer";
import { localStorage } from "./reducers/localstorage/reducer";

const migrations = {
    1: (state:any) => ({
        ...state
    })
}

const persistConfig = {
    key: "root",
    blacklist: ["theme", "localStorage"],
    storage,
    version: 1,
    migrate: createMigrate(migrations, {debug: true})
}

const reducers = () => combineReducers({
    theme,
    tasks,
    localStorage
});

const persistReducerInit = persistReducer(persistConfig, reducers());

export const store = createStore(
    persistReducerInit,
    composeWithDevTools(applyMiddleware(thunk))
);

export const PersistStoreFct = (store: any) => persistStore(store);