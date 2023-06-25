import greenChair from '../../../assets/greenChair.jpg';

const HeroCard = () => {
    return(
        <div className="heroCard">
            <figure>
                <img src={greenChair} alt="A comfy green velvet armchair next to a sidetable with some magazines and a coffee cup" />
            </figure>
            <div className="heroCardTextBox">
                <h1><span>Welcome to our</span>elegent furniture</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At itaque dicta in alias fugiat laborum ab! Quibusdam totam commodi quo adipisci sapiente distinctio voluptas rem, itaque earum cumque. Suscipit, aperiam.</p>
                <button>Shop now</button>
            </div>
        </div>
    );
};

export default HeroCard;