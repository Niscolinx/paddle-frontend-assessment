//import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../Containers/Layout'
import '../styles/main.scss'
import 'animate.css/animate.css' 

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
