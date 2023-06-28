import DiscountProduct from './DiscountProduct';
import saleStorefront from '../../../assets/saleStorefront.jpg';

const Discount = () => {
    return(
        <section className="discountSection">
            <div className="discountWrapper">
                <div className="discountSlider">
                    <div className="discountSliderContent">
                        <figure>
                            <img src={saleStorefront} alt="A sale sign out front of a retail store" />
                        </figure>
                        <div className="discountTextBox">
                            <h2 className="discountTitle">Discount 50%</h2>
                            <p className="discountP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque illum quo aut aliquam hic sequi temporibus. Dolorem deserunt maxime inventore eaque. Odit iure nam accusantium ex esse nisi delectus consequuntur.</p>
                            <p className="discountLink">Get Discount →</p>
                        </div>
                    </div>
                    <div className="dIndicatorButtons">
                        <div className="dSlideIndicator"></div>
                        <div className="dSlideIndicator"></div>
                        <div className="dSlideIndicator dCurrentSlide"></div>
                        <div className="dSlideIndicator"></div>
                    </div>
                </div>
                <DiscountProduct />
            </div>
        </section>
    );
};

export default Discount;