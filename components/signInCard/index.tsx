import InputBar from "../inputBar"
import { Dispatch } from "react"
import Modal from "../modal"
import { login } from "../../contexts/UserContext/actions"
import React from "react"
import { UserContext } from "../../contexts/UserContext"
import Alert from "../alert"
import Loader from "../../components/loader"

interface SignInCardProps {
    isOpen: boolean
    setIsOpen: Dispatch<any>
}

const SignInCard: React.FC<SignInCardProps> = ({ isOpen, setIsOpen }) => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const {state,  dispatch } = React.useContext(UserContext)
    return (
        <Modal 
            id="sign-in-card"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            header="Sign In"
            body={
                <div>
                    {
                        state.error && <Alert message={state.error} type={"error"} />
                    }
                    {
                        state.loading && <Loader />
                    }
                    <div className="my-2 text-lg">Email</div>
                    <InputBar placeholder="john@gmail.com" type="email" value={email} onChange={(e) => setEmail((e.target as HTMLInputElement).value)} />
                    <div className="my-2 text-lg">Password</div>
                    <InputBar placeholder="Password" type="password" value={password} onChange={(e) => setPassword((e.target as HTMLInputElement).value)} />
                </div>
            }
            footer={
            <div 
                className="p-4 text-center text-lg font-bold text-primary-background bg-primary-button rounded-lg w-full"
                onClick={(e) => {
                    login(dispatch, { email, password })
                    .then(() => {
                        setIsOpen(false)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                }}
            >Sign In</div>}
        />
    )
}

export default SignInCard