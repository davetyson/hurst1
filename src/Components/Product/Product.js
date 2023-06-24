import SectionHeader from '../Modular/SectionHeader';
import ProductBlock from './ProductBlock';
import Description from './Description';
import Reviews from './Reviews/Reviews';
import Information from './Information';
import Tags from './Tags';

const Product = () => {
    return(
        <>
            <h1>Product</h1>
            <SectionHeader />
            <ProductBlock />
            <Description />
            <Reviews />
            <Information />
            <Tags />
        </>
    );
};

export default Product;