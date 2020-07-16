import Head from 'next/head'

// Components
import Navbar from './Navbar'

const Layout = (props) => (
    <div>
        <Head>
            <title>Spendt | Minimalist spending tracker</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />

        <div className="container">
            {props.children}
        </div>

        <style jsx>{`
        .container {
            margin 5em auto;
            max-width: 800px;
            width: 70vw;
        }
    `}</style>
    </div>
)

export default Layout