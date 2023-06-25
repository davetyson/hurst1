import Menu from './Menu';
import { useState } from 'react';
import furnitureStore from '../../assets/furnitureStore.png';
import '../../styling/header.css';

const Header = () => {

    const [ menuOpen, setMenuOpen ] = useState(false);

    const handleMenu = () => {
        if (menuOpen === false){
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }
    }

    return(
        <header>
            {menuOpen ? <Menu /> : null}
            <button onClick={handleMenu}>
                <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
                <span class="sr-only">Menu</span>
            </button>
            <figure>
                <img src={furnitureStore} alt="Tap On Cards store logo" />
            </figure>
            <div class="headerCartIcon">
                <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i><span class="sr-only">Cart Page</span>
                <p>1</p>
            </div>
        </header>
    );
};

export default Header;