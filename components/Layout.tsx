import NavBar from './NavBar'
import Footer from './Footer'
import Donation from './Donation'

function Layout(props) {
  return (
    <div>
      <NavBar></NavBar >
      {props.children}
      <Donation></Donation>
      <Footer></Footer>
    </div>
  )
}

export default Layout