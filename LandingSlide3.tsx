import React from 'react';
import { Carousel } from 'react-bootstrap';
import Feature1 from './Assets/Future-cardRE.png';
import Feature2 from './Assets/Feature-card-2RE.png';
import Feature3 from './Assets/Feature-card-3RE.png';
//import './CSS/Features.css';


export class LandingSlide3 extends React.Component<{}, {}>
{
    render() {
        return (
            <div id = "Features" className = "Landing3">
                <div className="Slide3Text">
                    <h1 className = "TitleText">Earning crypto is</h1>
                    <h1 className = "TitleText">this <span className="blueText">rewarding.</span></h1>
                </div>
                <div className="responsiveImage">
                    <Carousel>
                        <Carousel.Item>
                            <img className="responsiveImage" src={Feature1} alt="Feature 1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="responsiveImage" src={Feature2} alt="Feature 2" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="responsiveImage" src={Feature3} alt="Feature 3" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

        )
    }
}

export default LandingSlide3;