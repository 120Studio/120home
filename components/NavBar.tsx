import { useState } from "react"
import { useRouter } from 'next/router'

function NavBar() {
    const [show, setShow] = useState(false)
    const router = useRouter()

    const driveMarkClass = router.pathname === "/drivemark" ? "w3-white" : "w3-hover-white"
    const instagramClass = router.pathname === "/webinstagram" ? "w3-white" : "w3-hover-white"
    const tiktokClass = router.pathname === "/tiktok.ext" ? "w3-white" : "w3-hover-white"
    const homeClass = router.pathname === "/" ? "w3-white" : "w3-hover-white"


    return (
        <div className="w3-top">
            <div className="w3-bar w3-purple w3-card w3-left-align w3-large">
                <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-purple" title="Toggle Navigation Menu" onClick={() => setShow(!show)}>
                    <i className="fa fa-bars"></i>
                </a>

                <a href="./" className={"w3-bar-item w3-button w3-padding-large " + homeClass}>Home</a>
                <a href="./drivemark.html" className={"w3-bar-item w3-button w3-hide-small w3-padding-large " + driveMarkClass}>Drive Bookmark</a>
                <a href="./webinstagram.html" className={"w3-bar-item w3-button w3-hide-small w3-padding-large " + instagramClass}>Extension for Instagram</a>
                <a href="./tiktok.ext.html" className={"w3-bar-item w3-button w3-hide-small w3-padding-large " + tiktokClass}>Extension for Tiktok</a>
            </div>

            {show &&
                <div id="navDemo" className="w3-bar-block w3-white w3-hide-large w3-hide-medium w3-large">
                <a href="./drivemark.html" className="w3-bar-item w3-button w3-padding-large">Drive Bookmark</a>
                <a href="./webinstagram.html" className="w3-bar-item w3-button w3-padding-large">Extension for Instagram</a>
                <a href="./tiktok.ext.html" className="w3-bar-item w3-button w3-padding-large">Extension for Tiktok</a>
            </div>
            }
        </div>

    )
}

export default NavBar