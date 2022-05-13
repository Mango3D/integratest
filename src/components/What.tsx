import React from "react";

// import component
import Carousel from "./Carousel";

const What = () => {
    return (
        <section id="What" className="what">
            <div className="what_text">
                <h2 className="what_title">What we do?</h2>
                <p className="what_paragraph">
                    God creates dinosaurs, God destroys dinosaurs. God creates
                    <br />
                    Man. man destrovs God. Man creates dinosaur:
                    <br />
                    <br />
                    Dinosaurs eat man. Woman inherits the earth
                </p>
            </div>
            <div className="what_carousel">
                <Carousel />
            </div>
        </section>
    );
};

export default What;
