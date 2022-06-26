import React, {createContext} from 'react'
import {initialUserState, userReducer} from "./reducers";
import {IUserState} from "./types";
import {checkUserLoggedIn} from "./actions";

interface UserContextInterface {
    state: IUserState
    dispatch: React.Dispatch<any>
}

export const UserContext = createContext<UserContextInterface>({
    state: initialUserState,
    dispatch: () => undefined
})

interface ProviderProps {
    children: JSX.Element | JSX.Element[] | React.ReactNode
}

export const UserContextProvider: React.FC<ProviderProps> = (props: ProviderProps) => {
    const [state, dispatch] = React.useReducer(userReducer, initialUserState)
    const { children } = props
    const value = { state, dispatch }

    React.useEffect(() => {
        checkUserLoggedIn(dispatch)
    }, [])


    return (
        <UserContext.Provider
            value={value}
        >
            {children}
        </UserContext.Provider>
    )
}