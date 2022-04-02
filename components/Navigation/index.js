import Link from "next/link"
import { useRouter } from "next/router"
import Logo from "./Logo"
import NavManager from './navManager'
export default function Navigation({ navigation }) {

    const router = useRouter()
    const { logo } = navigation
    // console.log(router)
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Logo logo={logo} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navbarText">
                        {navigation && <NavManager navigation={navigation} />}
                    </ul>
                    <Link href={router.asPath} locale={router.locale === "th" ? "en" : "th"}>
                        <a className='navbar-brand'>{router.locale === "th" ? "en" : "th"}</a>
                    </Link>
                </div>
            </div>
        </nav>

    )
}