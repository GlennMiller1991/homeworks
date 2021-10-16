import { combineReducers, createStore } from 'redux'
import {loadingActionType, loadingReducer} from './loadingReducer'

export type actionsType = loadingActionType

 const reducers = combineReducers({
     loading: loadingReducer,

 })

 const store = createStore(reducers)

 export default store

 export type AppStoreType = ReturnType<typeof reducers>

 // @ts-ignore
 window.store = store // for dev
