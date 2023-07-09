import ProductPreview from '../Modular/ProductPreview';

const ProductList = () => {
    return(
        <section className="productListSection">
            <h2>Purchase Online from Furniture Store</h2>
            <div className="underline"></div>
            <nav className="plNav">
                <ul>
                    <li>
                        <h3>New Arrivals</h3>
                    </li>
                    <li>
                        <h3>Best Sellers</h3>
                    </li>
                    <li>
                        <h3>Most Viewed</h3>
                    </li>
                    <li>
                        <h3>On Sale</h3>
                    </li>
                </ul>
            </nav>
            <div className="plListBox">
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
            </div>
        </section>
    );
};

export default ProductList;