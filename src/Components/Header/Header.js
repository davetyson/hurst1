// import Menu from './Menu';
import hurstNewLogo from '../../assets/hurstNewLogo.png';
import '../../styling/header.css';

const Header = () => {
    return(
        <header>
            <button>
                <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
                <span class="sr-only">Menu</span>
            </button>
            <figure>
                <img src={hurstNewLogo} alt="Tap On Cards store logo" />
            </figure>
            <div class="headerCartIcon">
                <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i><span class="sr-only">Cart Page</span>
                <p>1</p>
            </div>
            {/* <Menu /> */}
        </header>
    );
};

export default Header;