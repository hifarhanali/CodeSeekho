import InputBar from "../inputBar"
import { Dispatch } from "react"
import Modal from "../modal"
import { UserContext } from "../../contexts/UserContext"
import React from "react"
import { register } from "../../contexts/UserContext/actions"
import Alert from "../../components/alert"
import Loader from "../../components/loader"

interface SignUpCardProps {
    isOpen: boolean
    setIsOpen: Dispatch<any>
}

const SignUpCard: React.FC<SignUpCardProps> = ({ isOpen, setIsOpen }) => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [localError, setLocalError] = React.useState("")
    const {state,  dispatch } = React.useContext(UserContext)
    
    const handleSignUp = () => {
        if (confirmPassword !== password) {
            setLocalError("Passwords do not match")
            return
        }
        if (confirmPassword.length < 8) {
            setLocalError("Password too short")
            return
        }
        register(dispatch, {
            email: email,
            password: password,
            username: email.split("@")[0]
        }).then(() => {
            setLocalError("")
            setIsOpen(false)
        }).catch(() => {

        })
    }

    return (
        <Modal 
            id="sign-up-card"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            header="Sign Up"
            body={
                <div>
                    {
                        state.error && <Alert message={state.error} type="error" />
                    }
                    {
                        localError && <Alert message={localError} type="error" />
                    }
                    {
                        state.loading && <Loader />
                    }
                    <div className="my-2 text-lg">Email</div>
                    <InputBar placeholder="john@gmail.com" type="email" value={email} onChange={(e) => setEmail((e.target as HTMLInputElement).value)}/>
                    <div className="my-2 text-lg">Password</div>
                    <InputBar placeholder="Password" type="password" value={password} onChange={(e) => setPassword((e.target as HTMLInputElement).value)}/>
                    <div className="my-2 text-lg">Confirm Password</div>
                    <InputBar placeholder="Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword((e.target as HTMLInputElement).value)}/>
                </div>
            }
            footer={
                <div 
                    className="p-4 text-center text-lg font-bold text-primary-background bg-primary-button rounded-lg w-full"
                    onClick={handleSignUp}
                >
                    Sign Up
                </div>}
        />
    )
}

export default SignUpCard