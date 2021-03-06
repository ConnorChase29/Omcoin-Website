import React from 'react';
import { Carousel } from 'react-bootstrap';
import Roadmap from './Assets/Roadmap-card.png';
import Roadmap2 from './Assets/Roadmap-card-2.png';
import Roadmap3 from './Assets/Roadmap-card-3.png';
import Roadmap4 from './Assets/Roadmap-card-4.png';
import Roadmap5 from './Assets/Roadmap-card-5.png';

export class LandingSlide5 extends React.Component<{}, {}>
{
    render() {
        return (
            <div>
                <div id="CarouselPadding">
                    <h1>Roadmap</h1>
                    <h2>Our 2021 plans.</h2>
                    <div className="responsiveImage">
                        <Carousel>
                            <Carousel.Item>
                                <img className="responsiveImage" src={Roadmap} alt = "Roadmap 1" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="responsiveImage" src={Roadmap2} alt = "Roadmap 2" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="responsiveImage" src={Roadmap3} alt = "Roadmap 3" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="responsiveImage" src={Roadmap4} alt = "Roadmap 4" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="responsiveImage" src={Roadmap5} alt = "Roadmap 5" />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                </div>


            </div>
        )
    }
}

export default LandingSlide5;
