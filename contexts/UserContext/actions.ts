
import { Dispatch } from "react"

import { LoginPayload, RegistrationPayload } from "./types"

export const checkUserLoggedIn = (dispatch: Dispatch<any>) => {
    dispatch({type: "LOGIN_REQUEST"})
    // Get user object from local storage
    const user = localStorage.getItem("user")
    if (user) {
        // If user object exists, dispatch success action
        dispatch({type: "LOGIN_SUCCESS", payload: JSON.parse(user)})
    } else {
        // If user object does not exist, dispatch failure action
        dispatch({type: "LOGIN_FAIL"})
    }
}

export const login = async (dispatch: Dispatch<any>, loginPayload: LoginPayload) => {
    try {
        dispatch({type: "LOGIN_REQUEST"})
        const _user = await fetch("/api/login", {
            body: JSON.stringify(loginPayload),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST"
        })
        const user = await _user.json()
        localStorage.setItem("user", JSON.stringify(user))
        
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: user
        })
        
    } catch (error: any) {
        dispatch({
            type: "LOGIN_FAIL",
            payload: { error: error.message }
        })
        throw Error("Failed")
    }
}

export const register = async (dispatch: Dispatch<any>, registerPayload: RegistrationPayload) => {
    try {
        dispatch({type: "REGISTER_REQUEST"})
        const _user = await fetch("/api/register", {
            body: JSON.stringify(registerPayload),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST"
        })
        const user = await _user.json()
        localStorage.setItem("user", JSON.stringify(user))
        dispatch({
            type: "REGISTER_SUCCESS",
            payload: user
        })
    } catch (error: any) {
        dispatch({
            type: "REGISTER_FAIL",
            payload: {error: error.message}
        })
        throw Error("Failed")
    }
}

export const logout = (dispatch: Dispatch<any>) => {
    dispatch({type: "LOGOUT"})
    localStorage.removeItem("user")
}