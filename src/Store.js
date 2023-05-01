import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "././Services/Reducer/Rootreducer";

// const persistConfig = {
//     key: 'MyPersistCount',
//     storage
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    
// export const persistor = persistStore(store)
export default store;