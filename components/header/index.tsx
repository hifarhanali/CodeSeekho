import Link from "next/link"
import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from "next/router"
import { UserContext } from "../../contexts/UserContext"
import SignInCard from "../signInCard"
import SignUpCard from "../signUpCard"
import { logout } from "../../contexts/UserContext/actions"
import Modal from "../../components/modal"

const Header: React.FC = ({ }) => {
  const router = useRouter()
  const currentPage = router.pathname.split('/')[1]
  const { state, dispatch } = React.useContext(UserContext)
  const [signInCardOpen, setSignInCardOpen] = React.useState(false)
  const [signUpCardOpen, setSignUpCardOpen] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  return (
    <>
      <div className="bg-primary-900 flex justify-between text-md p-4 box-content uppercase text-white  shadow-[white] shadow-xl " style={{ borderBottom: "1px solid gray" }} >
        <div className="lg:hidden block">
          <Link href="/" passHref>
            <div className="text-xl font-bold mr-4">
              CloudSeekho.
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-8  ">

          <Link href="/" passHref>
            <div className="text-xl font-bold mr-4">
              CloudSeekho.
            </div>
          </Link>

          <Link href={"/trade"} passHref>
            <div style={currentPage === "snippets" ? activeButton : headerButton}>
              Snippets
            </div>
          </Link>
        </div>

        {
          state.isAuth ?
            <>
              <div className="hidden lg:flex space-x-6 items-center">
                <div className="p-2 box-content bg-white bg-opacity-20 rounded-lg">{state.user?.email.split("@")[0]}</div>
                <div><Link href={"/personal"} passHref><BsFillPersonFill size={28} /></Link></div>
                <div className="bg-white bg-opacity-20 p-2 px-4 font-bold text-primary-background rounded-lg" onClick={(e) => logout(dispatch)}>
                  Logout
                </div>
              </div>




            </> :
            <div className="hidden lg:flex space-x-6 items-center">
              <div className="bg-primary-button p-2 px-4 font-bold text-primary-background rounded-lg" onClick={(e) => { setSignInCardOpen(true); setMobileMenuOpen(false) }}>
                Sign In
              </div>
              <div className="border-primary-button border-2 p-2 px-4 font-bold text-primary-button rounded-lg" onClick={(e) => { setSignUpCardOpen(true); setMobileMenuOpen(false) }}>
                Sign Up
              </div>
            </div>
        }

        <div className="block lg:hidden ">
          <GiHamburgerMenu size={32} onClick={() => setMobileMenuOpen(true)} />
        </div>


        <SignInCard
          isOpen={signInCardOpen}
          setIsOpen={setSignInCardOpen}
        />

        <SignUpCard
          isOpen={signUpCardOpen}
          setIsOpen={setSignUpCardOpen}
        />

        <Modal
          id="mobile-menu"
          isOpen={mobileMenuOpen}
          setIsOpen={setMobileMenuOpen}
          header={"Menu"}
          body={
            <div>

              <Link href="/" passHref>
                <div className="text-xl font-bold my-4">
                  CloudSeekho.
                </div>
              </Link>

              <Link href={"/trade"} passHref>
                <div style={currentPage === "snippets" ? { ...activeButton } : headerButton}>
                  Snippets
                </div>
              </Link>


            </div>
          }
          footer={
            state.isAuth ? <div className="text-center w-full">

              <div className="p-2 box-content bg-white bg-opacity-20 rounded-lg">{state.user?.email.split("@")[0]}</div>
              <div className="flex items-center justify-center p-2 bg-white bg-opacity-20 rounded-md my-4"><Link href={"/personal"} passHref><BsFillPersonFill size={24} /></Link></div>
              <div className="bg-primary-button p-2 px-4 font-bold text-primary-background rounded-lg" onClick={(e) => logout(dispatch)}>
                Logout
              </div>
            </div> :
              <div className=" w-full text-center ">
                <div className="bg-primary-button my-4 w-full p-2 px-4 font-bold text-primary-background rounded-lg" onClick={(e) => { setSignInCardOpen(true); setMobileMenuOpen(false) }}>
                  Sign In
                </div>
                <div className="border-primary-button border-2 p-2 px-4 font-bold text-primary-button rounded-lg" onClick={(e) => { setSignUpCardOpen(true); setMobileMenuOpen(false) }}>
                  Sign Up
                </div>
              </div>

          }
        />

      </div>
    </>
  )
}

const headerButton = {
  padding: "0.5em",
  paddingRight: "1.5em",
  paddingLeft: "1.5em",
}

const activeButton = {
  ...headerButton,
  background: "linear-gradient(to right, #9C54FD, #DC34FE)",
  borderRadius: "25px"
}

export default Header