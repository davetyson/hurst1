import SectionHeader from '../Modular/SectionHeader';
import ProgressBar from './ProgressBar';
import Cart from './Cart/Cart';
import Checkout from './Checkout';
import OrderConfirmed from './OrderConfirm';

const OrderFlow = () => {
    return(
        <>
            <h1>OrderFlow</h1>
            <SectionHeader />
            <ProgressBar />
            <Cart />
            <Checkout />
            <OrderConfirmed />
        </>
    );
};

export default OrderFlow;