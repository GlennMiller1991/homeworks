import {UserType} from "../HW8";


export const homeWorkReducer = (state:UserType[], action: any): any => {
    switch (action.type) {
        case 'sort': {
            debugger
            switch (action.payload) {
                case 'up':
                    return [...state.sort((a:UserType, b:UserType) => a.age <= b.age ? -1 : 1)]
                case 'down':
                    return [...state.sort((a:UserType, b:UserType) => a.age <= b.age ? 1 : -1)]
                default:
                    return state
            }
        }
        case 'check': {
            return [...state.filter(user => user.age >= 18)]
        }
        default: return state
    }
}