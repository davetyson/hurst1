import ProductPreview from '../Modular/ProductPreview';

const ProductSlider = () => {
    return(
        <section className="productsSliderSection">
            <h2>Featured Products</h2>
            <div className="underline"></div>
            <div className="productSlider">
                <button className="prevNext">prev</button>
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <button className="prevNext">next</button>
            </div>
        </section>
    );
};

export default ProductSlider;