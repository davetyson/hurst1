import blackChair from '../../../assets/blackChair.jpg';

const DiscountProduct = () => {
    return(
        <section className="discountProductSection">
            <figure>
                <img src={blackChair} alt="a beautiful black armchair" />
            </figure>
            <div className="dProductTextBox">
                <p>Indoor Furniture</p>
                <p>$200.00</p>
            </div>
            <div className="dSaleCounter">
                <div className="dCountBox">
                    <p className="dCountBoxCount">0</p>
                    <p className="dCountBoxLabel">Days</p>
                </div>
                <div className="dCountBox">
                    <p className="dCountBoxCount">0</p>
                    <p className="dCountBoxLabel">Hour</p>
                </div>
                <div className="dCountBox">
                    <p className="dCountBoxCount">00</p>
                    <p className="dCountBoxLabel">Min</p>
                </div>
            </div>
        </section>
    );
};

export default DiscountProduct;