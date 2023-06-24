import HeroSlideshow from './HeroSlideshow';
import FeaturedProduct from './FeaturedProduct';
import ProductSlider from './ProductSlider';
import Discount from './Discount/Discount';
import ProductList from './ProductList';
import BlogPreviewHome from './BlogPreviewHome';
import LogoBanner from './LogoBanner';

const Home = () => {
    return(
        <>
            <h1>Home</h1>
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