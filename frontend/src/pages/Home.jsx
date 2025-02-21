// import { Head } from '@components/index'
import Head from '../components/Head'
import { BrandName } from '../constants'
import Navbar from '../components/Navbar'
// import { Navbar, Header, Features, AuthPages, LayoutPages, Footer } from './components'

export default function Home () {
    return (
        <>
            {/* <Head>
                <title>Home | {BrandName}</title>
            </Head> */}
            <Navbar />
            {BrandName}
            {/* <Header /> */}
            {/* <main>
                <Features />
                <AuthPages />
                <LayoutPages />
            </main>
            <Footer /> */}
        </>
    )
}
