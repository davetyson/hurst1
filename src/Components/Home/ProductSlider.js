import ProductPreview from '../Modular/ProductPreview';

const ProductSlider = () => {
    return(
        <section className="productsSliderSection">
            <h2>Featured Products</h2>
            <div className="underline"></div>
            <ProductPreview />
        </section>
    );
};

export default ProductSlider;