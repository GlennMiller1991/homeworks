
//constants
import {actionsType} from "./store";

const LOADING = 'LOADING'

//types
export type loadingReducerStateType = typeof initState
const initState = {
    loading: false
}

//actions types
export type loadingActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state: loadingReducerStateType = initState, action: actionsType): loadingReducerStateType => {
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                loading: action.payload.value
            }
        }
        default:
            return state
    }
}

export const loadingAC = (value: boolean) => {
    return {
        type: LOADING,
        payload: {
            value: value
        }
    } as const
}