import HeroSlideshow from './HeroSlideshow/HeroSlideshow';
import FeaturedProduct from './FeaturedProduct';
import ProductSlider from './ProductSlider';
import Discount from './Discount/Discount';
import ProductList from './ProductList';
import BlogPreviewHome from './BlogPreviewHome';
import LogoBanner from './LogoBanner';
import '../../styling/home.css';

const Home = () => {
    return(
        <>
            <HeroSlideshow />
            <FeaturedProduct />
            <ProductSlider />
            <Discount />
            <ProductList />
            <BlogPreviewHome />
            <LogoBanner />
        </>
    );
};

export default Home;