import * as React from 'react'
import Link from 'next/link'

export default class Menu extends React.PureComponent<void, void> {

  showNav() {
    // var x = document.getElementById("navDemo");
    // if (x.className.indexOf("w3-show") == -1) {
    //   x.className += " w3-show";
    // } else {
    //   x.className = x.className.replace(" w3-show", "");
    // }
  }

  render() {
    return (
      <div className="w3-top" >
        <div className="w3-bar w3-purple w3-card w3-left-align w3-large" >
          <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-purple" href="javascript:void(0);" onClick={this.showNav} title="Toggle Navigation Menu" >
            <i className="fa fa-bars" />
          </a >
          <Link href="./">
            <a className="w3-bar-item w3-button w3-padding-large w3-white"> Home </a>
          </Link>
          <Link href="./drivemark.html">
            <a className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" > Drive Bookmark </a>
          </Link>
          <Link href="./webinstagram.html" >
            <a className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" > Instagram.Web </a>
          </Link>
        </div>

        <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large" >
          <Link href="./drivemark.html">
            <a className="w3-bar-item w3-button w3-padding-large" > Drive Bookmark </a>
          </Link>
          <Link href="./webinstagram.html">
            <a className="w3-bar-item w3-button w3-padding-large" > Instagram.Web </a>
          </Link>
        </div>
      </div>
    )
  }
}