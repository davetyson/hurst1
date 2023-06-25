import HeroCard from "./HeroCard";

const HeroSlideshow = () => {
    return(
        <section className="heroSlideshow">
            <div className="slideButtons">
                <button className="slideButtonL">L</button>
                <button className="slideButtonR">R</button>
            </div>
            <HeroCard />
            <div className="indicatorButtons">
                <div className="slideIndicator"></div>
                <div className="slideIndicator currentSlide"></div>
                <div className="slideIndicator"></div>
            </div>
        </section>
    );
};

export default HeroSlideshow;