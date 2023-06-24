import SectionHeader from '../Modular/SectionHeader';
import Categories from './Categories';
import Price from './Price';
import Colour from './Colour';
import Size from './Size';
import SearchBar from '../Modular/SearchBar';
import ProductPreview from '../Modular/ProductPreview';
import PromoImg from '../Modular/PromoImg'

const ProductList = () => {
    return(
        <>
            <h1>ProductList</h1>
            <SectionHeader />
            <Categories />
            <Price />
            <Colour />
            <Size />
            <SearchBar />
            <ProductPreview />
            <PromoImg />
        </>
    );
};

export default ProductList;