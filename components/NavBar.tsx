import Link from 'next/link'

function NavBar() {
    return (
        <div className="w3-top">
            <div className="w3-bar w3-purple w3-card w3-left-align w3-large">
                <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-purple" title="Toggle Navigation Menu">
                    <i className="fa fa-bars"></i>
                </a>
                <Link href="./">
                <a className="w3-bar-item w3-button w3-padding-large w3-white">Home</a>
                </Link>
                <a href="./drivemark.html" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Drive Bookmark</a>
                <a href="./webinstagram.html" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Extension for Instagram</a>
            </div>

            <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
                <a href="./drivemark.html" className="w3-bar-item w3-button w3-padding-large">Drive Bookmark</a>
                <a href="./webinstagram.html" className="w3-bar-item w3-button w3-padding-large">Extension for Instagram</a>
            </div>
        </div>

    )
}

export default NavBar