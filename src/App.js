import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider.js"
import Offers from "./components/Offers.js"
import data from "./data/data.json"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"

const img = [
  "https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif",
  "https://i02.appmifile.com/615_operator_in/05/07/2021/a4b26d6b2ad2d6d2edbfb23a8482328e.jpg",
  "https://i02.appmifile.com/762_operator_in/05/07/2021/4c90dda893b43e0153950f36ee37dc03.jpg",
  "https://i02.appmifile.com/645_operator_in/02/06/2021/4e32c24cfdf8c48ad1bc911807cac09e.jpg",
  "https://i02.appmifile.com/232_operator_in/04/06/2021/568c8fd7c3c4368c14c8ef64cda7866b.jpg",
  "https://i02.appmifile.com/3_operator_in/08/06/2021/3e2d6457a1e569145f66318a17ea1e03.jpg",
  "https://i02.appmifile.com/860_operator_in/09/06/2021/15c70c1f59ef4aad235531578c3d1757.jpg",
  "https://i02.appmifile.com/279_operator_in/08/06/2021/072acd0a667c5a0e045ed50a9064c531.jpg",
  "https://i02.appmifile.com/417_operator_in/04/06/2021/36c1c9f10ac411c5ba304d30d60ca234.jpg",
  "https://i02.appmifile.com/172_operator_in/08/06/2021/44c5407a6c9ede6d782bebfd70cecc24.jpg",
  "https://i02.appmifile.com/667_operator_in/09/06/2021/eca16c5a1a97b1f30cedb943e144e2e0.jpg",
  "https://i02.appmifile.com/934_operator_in/07/06/2021/372a6e5d29c26c34b716b0408a533e3f.jpg"
]




function App() {
  return (

    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={img} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>

        <Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}>
        </Route>

        <Route exact path='/smartDevice' element={
          <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
        }>
        </Route>
        <Route exact path='/home' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}>
        </Route>

        <Route exact path='/lifestyle' element={<HotAccessories home={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />}>
        </Route>

        <Route exact path='/mobileAccessories' element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}>
        </Route>
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />

      <Heading text="VIDEOS" /> 
      <Videos videos={data.videos} />
      
      <Heading text="IN THE PRESS"/>
      <Banner banner = {data.banner} />

      <Footer/>
    </Router>

  );
};

export default App;
