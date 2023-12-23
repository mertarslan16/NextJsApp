import AboutUs from "./components/AboutUs/page"
import Description from "./components/Description/page"
import ProductHome from "./components/Product/page"
import Slider from "./components/Slider/page"
import styles from "./homepage.module.css"

const Homepage = () => {
  return (
    <div className={styles.container}>
      <Slider />
      <AboutUs />
      <Description />
      <ProductHome />
    </div>
  )
}

export default Homepage