// import Menu from './Menu';
import hurstNewLogo from '../../assets/hurstNewLogo.png';

const Header = () => {
    return(
        <header>
            <h1>Header</h1>
            <button>
                <i class="fa fa-bars" aria-hidden="true"></i>
                <span class="sr-only">Menu</span>
            </button>
            <figure>
                <img src={hurstNewLogo} alt="Tap On Cards store logo" />
            </figure>
            <div>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i><span class="sr-only">Cart Page</span>
                <p>1</p>
            </div>
            {/* <Menu /> */}
        </header>
    );
};

export default Header;