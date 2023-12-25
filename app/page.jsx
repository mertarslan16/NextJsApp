import AboutUs from "./components/AboutUs/page"
import Description from "./components/Description/page"
import FooterHome from "./components/Footer/page"
import NavbarHome from "./components/Navbar/page"
import ProductHome from "./components/Product/page"
import Slider from "./components/Slider/page"
import styles from "./homepage.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const Homepage = () => {
  return (
      < >
        <NavbarHome />
        <Slider />
        <AboutUs />
        <Description />
        <ProductHome />
        <FooterHome />
      </>
  )
}

export default Homepage