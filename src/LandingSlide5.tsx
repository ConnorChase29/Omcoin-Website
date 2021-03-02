import React from 'react';
import { Carousel } from 'react-bootstrap';
import Roadmap2 from './Assets/Roadmap-card-2.png';
import Roadmap3 from './Assets/Roadmap-card-3.png';
import Roadmap4 from './Assets/Roadmap-card-4.png';

export class LandingSlide5 extends React.Component<{}, {}>
{
    render() {
        return (
            <div>
                <div id = "CarouselPadding">
                <h1>Roadmap</h1>
                <h2>Our 2021 plans.</h2>
                
                    <Carousel>
                        <Carousel.Item>
                            <img src={Roadmap2} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Roadmap3} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Roadmap4} />
                        </Carousel.Item>
                    </Carousel>
                </div>


            </div>
        )
    }
}

export default LandingSlide5;
