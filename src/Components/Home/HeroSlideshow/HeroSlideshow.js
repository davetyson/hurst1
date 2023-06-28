import HeroCard from "./HeroCard";

const HeroSlideshow = () => {
    return(
        <section className="heroSlideshow">
            <div className="heroSlideshowWrapper">
                <div className="slideButtons">
                    <button className="slideButtonL">L</button>
                    <button className="slideButtonR">R</button>
                </div>
                <HeroCard />
                <div className="hsIndicatorButtons">
                    <div className="hsSlideIndicator"></div>
                    <div className="hsSlideIndicator hsCurrentSlide"></div>
                    <div className="hsSlideIndicator"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSlideshow;