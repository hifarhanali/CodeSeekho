import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { UserContextProvider } from '../contexts/UserContext'
import '../styles/globals.css'


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <UserContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </UserContextProvider>
  )
}
export default MyApp
