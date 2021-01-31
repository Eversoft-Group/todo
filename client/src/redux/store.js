import {createStore, applyMiddleware, compose} from "redux"
import thunkMiddleware from "redux-thunk"
import {persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import rootReducer from "./reducer"

const persistConfig = {
    key: "root",
    storage
}

const persistRed = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistRed,
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

const persistor = persistStore(store)

export {persistor}
export default store