import beigeChair from '../../assets/beigeChair.jpg';
import '../../styling/modular.css';

const ProductPreview = () => {
    return(
        <div className="productPreviewBlock">
            <figure>
                <p className="newLabel">New</p>
                <img src={beigeChair} alt="The perfect woven beige chair with wood legs" />
                <p className="ppPrice">$56.20</p>
            </figure>
            <p className="ppTitle">My Awesome Product</p>
            <div className="starRatings">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                <span className="sr-only">4.5 stars</span>
            </div>
        </div>
    );
};

export default ProductPreview;