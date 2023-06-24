import SectionHeader from '../Modular/SectionHeader';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
import Map from './Map';

const Contact = () => {
    return(
        <>
            <h1>Contact</h1>
            <SectionHeader />
            <ContactForm />
            <ContactDetails />
            <Map />
        </>
    );
};

export default Contact;