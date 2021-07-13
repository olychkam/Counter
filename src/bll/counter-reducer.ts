const initialState = {
    value: 0
}
type initialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state,
                value: state.value + 1
            }
            case "SET-VALUE":
            return {
                ...state,
                value:action.value
            }
        default:
            return state

    }
}
export const incValueAC = () => (
    {type: 'INC-VALUE'} as const
)
export const setValueFromLocalStorageAC = (value:number) => (
    {type: 'SET-VALUE',value} as const
)
export type incValueActionType = ReturnType<typeof incValueAC>
export type setValueFromLocalStorageActionType = ReturnType<typeof setValueFromLocalStorageAC>

export type ActionType=incValueActionType|setValueFromLocalStorageActionType