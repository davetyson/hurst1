import CartItem from './CartItem';
import CouponForm from './CouponForm';
import ShippingCalc from './ShippingCalc';
import OrderDetails from '../OrderDetails';

const Cart = () => {
    return(
        <>
            <h1>Cart</h1>
            <CartItem />
            <CouponForm />
            <ShippingCalc />
            <OrderDetails />
        </>
    );
};

export default Cart;