import greyCouch from '../../assets/greyCouch.jpg';
import greyStool from '../../assets/greyStool.jpg';

const FeaturedProduct = () => {
    return(
        <section className="featuredProductSection">
            <div className="featuredProductProduct">
                <div className="fpDetails">
                    <p className="newLabel">New</p>
                    <p className="fpPrice">$50.00</p>
                </div>
                <figure>
                    <img src={greyCouch} alt="the perfect grey 3 seater couch in a cozy living room" />
                </figure>
                <div className="fpDetails">
                    <div className="fpTitleCategory">
                        <p className="fpTitle">The Ultimate Grey Couch</p>
                        <p className="fpCategory">Furniture</p>
                    </div>
                    <button>Buy now</button>
                </div>
            </div>
            <div className="featuredProductQuote">
                <figure>
                    <img src={greyStool} alt="the perfect simple woven grey stool in a modernist style" />
                </figure>
                <div className="fpQuote">
                    <h2>Design by Furniture Store</h2>
                    <p>- 2023</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProduct;