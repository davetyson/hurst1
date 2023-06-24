import SectionHeader from '../Modular/SectionHeader';
import CustomerInfo from './CustomerInfo';
import OrderHistory from './OrderHistory';

const Account = () => {
    return(
        <>
            <h1>Account</h1>
            <SectionHeader />
            <CustomerInfo />
            <OrderHistory />
        </>
    );
};

export default Account;