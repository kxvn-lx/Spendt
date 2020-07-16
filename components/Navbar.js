import Link from 'next/link'
import { useRouter } from "next/router";

export default function Navbar() {

    const router = useRouter();

    return (
        <nav>
            <Link href="/">
                <h1 style={{ cursor: 'pointer' }}>Spendt</h1>
            </Link>

            <ul>
                <li>
                    <Link href="/about">
                        <a className={router.pathname == "/about" ? "active" : ""}>About</a>
                    </Link>
                </li>
            </ul>



            <style jsx>{`
                nav {
                    max-width: 800px;
                    width: 70vw;
                    margin: 2em auto;
                    text-align: center;
                }

                ul {
                    display: block;
                }

                ul li {
                    display: inline-block;
                    list-style-type: none;
                }

                ul li {
                    margin: 1em;
                }

                ul li a {
                    padding: 7px;
                    border-radius: 5px;
                }
            `}</style>
        </nav>
    )
}
